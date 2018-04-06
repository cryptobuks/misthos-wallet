open WalletTypes;

type t =
  | Regtest
  | Testnet
  | Mainnet;

let encode =
  fun
  | Regtest => Json.Encode.string("regtest")
  | Testnet => Json.Encode.string("testnet")
  | Mainnet => Json.Encode.string("mainnet");

let decode = raw => {
  let name = raw |> Json.Decode.string;
  switch name {
  | "regtest" => Regtest
  | "testnet" => Testnet
  | "mainnet" => Mainnet
  };
};

type txInput = {
  txId: string,
  txOutputN: int,
  address: string,
  value: BTC.t,
  nCoSigners: int,
  coordinates: AccountKeyChain.Address.Coordinates.t
};

let encodeInput = input =>
  Json.Encode.(
    object_([
      ("txId", string(input.txId)),
      ("txOutputN", int(input.txOutputN)),
      ("address", string(input.address)),
      ("value", BTC.encode(input.value)),
      ("nCoSigners", int(input.nCoSigners)),
      (
        "coordinates",
        AccountKeyChain.Address.Coordinates.encode(input.coordinates)
      )
    ])
  );

let decodeInput = raw =>
  Json.Decode.{
    txId: raw |> field("txId", string),
    txOutputN: raw |> field("txOutputN", int),
    address: raw |> field("address", string),
    value: raw |> field("value", BTC.decode),
    nCoSigners: raw |> field("nCoSigners", int),
    coordinates:
      raw |> field("coordinates", AccountKeyChain.Address.Coordinates.decode)
  };

module Make = (Client: NetworkClient) => {
  let network = Client.network;
  let transactionInputs = (coordinates, accountKeyChains) => {
    let addresses =
      coordinates
      |> List.map(c => {
           let address = AccountKeyChain.find(c, accountKeyChains);
           (address.address, (c, address));
         });
    Js.Promise.(
      Client.getUTXOs(addresses |> List.map(fst))
      |> then_(utxos =>
           utxos
           |> List.map(({txId, txOutputN, address, amount}: utxo) =>
                {
                  txId,
                  txOutputN,
                  address,
                  nCoSigners: snd(addresses |> List.assoc(address)).nCoSigners,
                  value: amount,
                  coordinates: addresses |> List.assoc(address) |> fst
                }
              )
           |> resolve
         )
    );
  };
  let broadcastTransaction = Client.broadcastTransaction;
};

module Regtest =
  Make(
    (
      val BitcoindClient.make(
            {
              bitcoindUrl: "http://localhost:18322",
              rpcUser: "bitcoin",
              rpcPassword: "bitcoin"
            }: BitcoindClient.config,
            Bitcoin.Networks.testnet
          )
    )
  );

let transactionInputs = (_network, coordinates, accountKeyChains) =>
  Regtest.transactionInputs(coordinates, accountKeyChains);

let broadcastTransaction = _network => Regtest.broadcastTransaction;

let bitcoinNetwork =
  fun
  | Regtest => Regtest.network
  | Testnet => Regtest.network
  | Mainnet => Regtest.network;
