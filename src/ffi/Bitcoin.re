module Crypto = {
  [@bs.module "bitcoinjs-lib"] [@bs.scope "crypto"]
  external sha256 : string => Node.buffer = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "crypto"]
  external sha256FromBuffer : Node.buffer => Node.buffer = "sha256";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "crypto"]
  external hash160 : Node.buffer => Node.buffer = "";
};

module Networks = {
  type pubKeyHash;
  type t = {
    .
    "pubKeyHash": pubKeyHash,
    "bip32": {
      .
      "public": int,
      "private": int,
    },
  };
  [@bs.val] [@bs.module "bitcoinjs-lib"] [@bs.scope "networks"]
  external bitcoin : t = "";
  [@bs.val] [@bs.module "bitcoinjs-lib"] [@bs.scope "networks"]
  external testnet : t = "";
};

module Transaction = {
  type in_ = {
    .
    "index": int,
    "sequence": int,
    "witness": array(Node.buffer),
    "script": Node.buffer,
  };
  type out = {
    .
    "value": float,
    "script": Node.buffer,
  };
  type t = {
    .
    "outs": array(out),
    "ins": array(in_),
  };
  [@bs.send] external toBuffer : t => Node.buffer = "";
  [@bs.send] external toHex : t => string = "";
  [@bs.send] external virtualSize : t => float = "";
  [@bs.send] external getId : t => string = "";
  [@bs.send] external setInputScript : (t, int, Node.buffer) => unit = "";
  [@bs.send] external setWitness : (t, int, array(Node.buffer)) => unit = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "Transaction"]
  external fromHex : string => t = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "Transaction"]
  external defaultSequence : int = "DEFAULT_SEQUENCE";
  type sighashType;
  [@bs.module "bitcoinjs-lib"] [@bs.scope "Transaction"]
  external sighashAll : sighashType = "SIGHASH_ALL";
  [@bs.send]
  external hashForWitnessV0 :
    (t, int, Node.buffer, float, sighashType) => Node.buffer =
    "";
};

module ECPair = {
  type t;
  [@bs.module "bitcoinjs-lib"] [@bs.scope "ECPair"]
  external makeRandom : unit => t = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "ECPair"]
  external makeRandomWithOptions : {. "network": Networks.t} => t =
    "makeRandom";
  let makeRandomWithNetwork = network =>
    makeRandomWithOptions({"network": network});
  [@bs.module "bitcoinjs-lib"] [@bs.scope "ECPair"]
  external fromPrivateKey : (Node.buffer, {. "network": Networks.t}) => t =
    "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "ECPair"]
  external fromPublicKey : (Node.buffer, {. "network": Networks.t}) => t = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "ECPair"]
  external fromWIF : string => t = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "ECPair"]
  external fromWIFWithNetwork : (string, Networks.t) => t = "fromWIF";
  [@bs.send] external toWIF : t => string = "";
  [@bs.get] external getNetwork : t => Networks.t = "network";
  [@bs.get] external getPublicKey : t => Node.buffer = "publicKey";
  [@bs.get] external getPrivateKey : t => Node.buffer = "privateKey";
  [@bs.send] external sign : (t, Node.buffer) => Node.buffer = "";
  [@bs.send] external verify : (t, Node.buffer, Node.buffer) => bool = "";
};

module HDNode = {
  type t;
  [@bs.module "bitcoinjs-lib"] [@bs.scope "bip32"]
  external fromPrivateKey :
    (~privateKey: Node.buffer, ~chainCode: Node.buffer, Networks.t) => t =
    "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "bip32"]
  external fromPublicKey :
    (~publicKey: Node.buffer, ~chainCode: Node.buffer, Networks.t) => t =
    "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "bip32"]
  external _fromBase58 : (string, Networks.t) => t = "fromBase58";
  let fromBase58 = base58 =>
    try (_fromBase58(base58, Networks.bitcoin)) {
    | _ => _fromBase58(base58, Networks.testnet)
    };
  [@bs.module "bitcoinjs-lib"] [@bs.scope "bip32"]
  external fromSeed : (Node.buffer, Networks.t) => t = "";
  [@bs.send] external derive : (t, int) => t = "";
  [@bs.send] external deriveHardened : (t, int) => t = "";
  [@bs.send] external derivePath : (t, string) => t = "";
  [@bs.get] external getPublicKey : t => Node.buffer = "publicKey";
  [@bs.get] external getPrivateKey : t => Node.buffer = "privateKey";
  [@bs.get] external getNetwork : t => Networks.t = "network";
  [@bs.send] external neutered : t => t = "";
  [@bs.send] external toBase58 : t => string = "";
};

module Address = {
  [@bs.module "bitcoinjs-lib"] [@bs.scope "address"]
  external _toBase58Check : (Node.buffer, Networks.pubKeyHash) => string =
    "toBase58Check";
  let toBase58Check = (hash, network) =>
    _toBase58Check(hash, network##pubKeyHash);

  let fromHDNode = node =>
    Crypto.hash160(node |> HDNode.getPublicKey)
    |. toBase58Check(node |> HDNode.getNetwork);

  let fromKeyPair = key =>
    Crypto.hash160(key |> ECPair.getPublicKey)
    |. toBase58Check(key |> ECPair.getNetwork);

  [@bs.module "bitcoinjs-lib"] [@bs.scope "address"]
  external toOutputScript : (string, Networks.t) => Node.buffer = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "address"]
  external fromOutputScript : (Node.buffer, Networks.t) => string = "";
};

module TxBuilder = {
  type signature = Js.Nullable.t(Node.buffer);
  type input = {. "signatures": Js.Nullable.t(array(signature))};
  type t = {. "inputs": array(input)};
  [@bs.new] [@bs.module "bitcoinjs-lib"]
  external create : unit => t = "TransactionBuilder";
  [@bs.new] [@bs.module "bitcoinjs-lib"]
  external createWithNetwork : Networks.t => t = "TransactionBuilder";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "TransactionBuilder"]
  external fromTransaction : Transaction.t => t = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "TransactionBuilder"]
  external fromTransactionWithNetwork : (Transaction.t, Networks.t) => t =
    "fromTransaction";
  [@bs.send] external addInput : (t, string, int) => int = "";
  [@bs.send]
  external addInputWithSequence : (t, string, int, int) => int = "addInput";
  [@bs.send] external setLockTime : (t, int) => unit = "";
  [@bs.send] external setVersion : (t, int) => unit = "";
  [@bs.send] external addOutput : (t, string, float) => int = "";
  [@bs.send] external sign : (t, int, ECPair.t) => unit = "";
  [@bs.send]
  external signSegwit :
    (
      t,
      int,
      ECPair.t,
      ~redeemScript: Node.buffer,
      [@bs.as {json|null|json}] _,
      ~witnessValue: float,
      ~witnessScript: Node.buffer
    ) =>
    unit =
    "sign";
  [@bs.send] external build : t => Transaction.t = "";
  [@bs.send] external buildIncomplete : t => Transaction.t = "";
};

module Ops = {
  include BitcoinOps;
};

module Payments = {
  [@bs.module "bitcoinjs-lib"] [@bs.scope "payments"]
  external multisig :
    {
      .
      "m": int,
      "pubkeys": array(Node.buffer),
      "network": Networks.t,
    } =>
    {. "output": Node.buffer} =
    "p2ms";

  [@bs.module "bitcoinjs-lib"] [@bs.scope "payments"]
  external witnessScriptHash :
    {
      .
      "redeem": {.. "output": Node.buffer},
      "network": Networks.t,
    } =>
    {
      .
      "address": string,
      "output": Node.buffer,
    } =
    "p2wsh";

  [@bs.module "bitcoinjs-lib"] [@bs.scope "payments"]
  external scriptHash :
    {
      .
      "redeem": {.. "output": Node.buffer},
      "network": Networks.t,
    } =>
    {. "address": string} =
    "p2sh";
};

module Script = {
  [@bs.module "bitcoinjs-lib"] [@bs.scope "script"]
  external isCanonicalScriptSignature : Node.buffer => bool = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "script"]
  external compile : array(Ops.t) => Node.buffer = "";
  [@bs.module "bitcoinjs-lib"] [@bs.scope "script"]
  external decompile : Node.buffer => array(Node.buffer) = "";
  module Number = {
    [@bs.module "bitcoinjs-lib"] [@bs.scope ("script", "number")]
    external encode : int => Node.buffer = "";
  };
  module Signature = {
    [@bs.module "bitcoinjs-lib"] [@bs.scope ("script", "signature")]
    external encode : (Node.buffer, Transaction.sighashType) => Node.buffer =
      "";
    [@bs.module "bitcoinjs-lib"] [@bs.scope ("script", "signature")]
    external decode :
      Node.buffer =>
      {
        .
        "signature": Node.buffer,
        "hashType": Transaction.sighashType,
      } =
      "";
  };
};
