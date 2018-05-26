open Belt;

open PrimitiveTypes;

open Bitcoin;

let userSession = (userId, keyPair) : Session.Data.t => {
  let appPubKey = keyPair |> Utils.publicKeyFromKeyPair;
  let chainCode = appPubKey |. String.sub(0, 64) |> Utils.bufFromHex;
  {
    userId,
    appPrivateKey: keyPair |> ECPair.toWIF,
    issuerKeyPair: keyPair,
    storagePrefix: UserInfo.storagePrefix(~appPubKey),
    masterKeyChain: HDNode.make(keyPair, chainCode),
    network: Regtest,
  };
};

let threeUserSessions = {
  let (keyA, keyB, keyC) = (
    ECPair.fromWIFWithNetwork(
      "cUVTgxrs44T7zVon5dSDicBkBRjyfLwL7RF1RvR7n94ar3HEaLs1",
      Network.bitcoinNetwork(Regtest),
    ),
    ECPair.fromWIFWithNetwork(
      "cPMRPo3fXGehCmFC5QsSFcZmYivsFtLVexxWi22CFwocvndXLqP1",
      Network.bitcoinNetwork(Regtest),
    ),
    ECPair.fromWIFWithNetwork(
      "cPfdeLvhwvAVRRM5wiEWopWviGG65gbxQCHdtFL56PYUJXsTYixf",
      Network.bitcoinNetwork(Regtest),
    ),
  );
  (
    userSession("user1" |> UserId.fromString, keyA),
    userSession("user2" |> UserId.fromString, keyB),
    userSession("user3" |> UserId.fromString, keyC),
  );
};

let threeUserSessionsArray = {
  let (user1, user2, user3) = threeUserSessions;
  [|user1, user2, user3|];
};

let scenarioSession = threeUserSessionsArray |. Array.getExn(0);

let eventLog =
  IncomeLog.log
  |> Json.parseOrRaise
  |> EventLog.decode
  |> Venture.reconstruct(scenarioSession)
  |> fst
  |> Venture.getEventLog;

let viewModel =
  eventLog |> ViewModel.init(UserId.fromString("misthosio.id"));
