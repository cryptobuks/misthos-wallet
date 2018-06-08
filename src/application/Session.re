open PrimitiveTypes;

module Data = {
  type t = {
    userId,
    appPrivateKey: string,
    issuerKeyPair: Bitcoin.ECPair.t,
    storagePrefix: string,
    masterKeyChain: Bitcoin.HDNode.t,
    network: Network.t,
  };
  let fromUserData = userData =>
    switch (Js.Nullable.toOption(userData##username)) {
    | None => None
    | Some(blockstackId) =>
      let issuerKeyPair =
        Utils.keyPairFromPrivateKey(
          Network.bitcoinNetwork(Testnet),
          userData##appPrivateKey,
        );
      Some({
        appPrivateKey: userData##appPrivateKey,
        userId: blockstackId |> UserId.fromString,
        issuerKeyPair,
        network: Testnet,
        storagePrefix:
          UserInfo.storagePrefix(
            ~appPubKey=issuerKeyPair |> Utils.publicKeyFromKeyPair,
          ),
        masterKeyChain:
          Bitcoin.HDNode.make(
            issuerKeyPair,
            Utils.bufFromHex(
              "c8bce5e6dac6f931af17863878cce2ca3b704c61b3d775fe56881cc8ff3ab1cb",
            ),
          ),
      });
    };
};

type t =
  | Unknown
  | LoginPending
  | NotLoggedIn
  | AnonymousLogin
  | LoggedIn(Data.t);

let initMasterKey = (sessionData: Data.t) => {
  let appPubKey = sessionData.issuerKeyPair |> Utils.publicKeyFromKeyPair;
  Js.Promise.(
    UserInfo.getOrInit(~appPubKey)
    |> then_(({chainCode}: UserInfo.Private.t) =>
         {
           ...sessionData,
           masterKeyChain:
             Bitcoin.HDNode.make(sessionData.issuerKeyPair, chainCode),
         }
         |> resolve
       )
  );
};

let completeLogIn = (~environment: Environment.t) => {
  Cookie.get("transitKey")
  |> Utils.mapOption(key =>
       LocalStorage.setItem("blockstack-transit-private-key", key)
     )
  |> ignore;
  Cookie.delete("transitKey", environment.cookieDomain());
  Js.Promise.(
    Blockstack.handlePendingSignIn()
    |> then_(userData =>
         switch (Data.fromUserData(userData)) {
         | None => resolve(AnonymousLogin)
         | Some(sessionData) =>
           initMasterKey(sessionData)
           |> then_(session => LoggedIn(session) |> resolve)
         }
       )
  );
};

let getCurrentSession = (~environment=Environment.default, ()) =>
  Js.Promise.(
    if (Blockstack.isUserSignedIn()) {
      switch (Blockstack.loadUserData()) {
      | None => NotLoggedIn |> resolve
      | Some(userData) =>
        switch (Data.fromUserData(userData)) {
        | None => AnonymousLogin |> resolve
        | Some(sessionData) =>
          initMasterKey(sessionData)
          |> then_(session => LoggedIn(session) |> resolve)
        }
      };
    } else if (Blockstack.isSignInPending()) {
      completeLogIn(~environment);
    } else {
      NotLoggedIn |> resolve;
    }
  );

let signOut = () => {
  Blockstack.signUserOut();
  NotLoggedIn;
};

let signIn =
    (
      ~environment=Environment.default,
      ~transitKey=Blockstack.generateAndStoreTransitKey(),
      (),
    ) => {
  signOut() |> ignore;
  Cookie.set("transitKey", transitKey, environment.cookieDomain());
  Blockstack.(
    redirectToSignInWithAuthRequest(
      makeAuthRequest(
        ~transitKey,
        ~redirectURI=environment.redirectURI(),
        ~manifestURI=environment.manifestURI(),
        ~scopes=[|"store_write", "publish_data"|],
        ~appDomain=environment.appDomain(),
      ),
    )
  );
  LoginPending;
};
