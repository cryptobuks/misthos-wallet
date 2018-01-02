module type Payload = {
  type t;
  let encode: t => string;
  let decode: (string, ~type_: string) => t;
  let getType: t => string;
};

type event('t) = {
  payload: 't,
  type_: string,
  payloadHash: string,
  issuerPubKey: string,
  signature: string
};

type rawEvent = {
  payload: string,
  type_: string,
  payloadHash: string,
  issuerPubKey: string,
  signature: string
};

/* type witness = (string * string); */
/* type logItem('t) = { */
/*   event: event('t), */
/*   witnesses: witness */
/* } */
/* type t = list(logItem); */
let toHex = (buffer) => buffer |> BufferExt.toStringWithEncoding("hex");

module Encode = {
  let event = (event) =>
    Json.Encode.(object_([("signature", string(event.signature))])) |> Json.stringify;
};

module Make = (Item: Payload) => {
  type item = event(Item.t);
  let createItem = (issuerKeyPair, payload) : event(Item.t) => {
    open Bitcoin;
    let payloadHashBuffer = payload |> Item.encode |> Crypto.sha256;
    let payloadHash = payloadHashBuffer |> toHex;
    let issuerPubKey = issuerKeyPair |> ECPair.getPublicKeyBuffer |> toHex;
    let signature = issuerKeyPair |> ECPair.sign(payloadHashBuffer) |> ECSignature.toDER |> toHex;
    {payload, type_: Item.getType(payload), signature, payloadHash, issuerPubKey}
  };
  /* let verifyItem(item, allowedPubKeys) => { */
  /*   let payloadHashBuffer = item.payload |> Item.encode |> Crypto.sha256; */
  /* }; */
  module Encode = {
    let event = (event: event(Item.t)) =>
      Json.Encode.(
        object_([
          ("type", string(Item.getType(event.payload))),
          ("payload", string(Item.encode(event.payload))),
          ("payloadHash", string(event.payloadHash)),
          ("issuerPubKey", string(event.issuerPubKey)),
          ("signature", string(event.signature))
        ])
      )
      |> Json.stringify;
  };
  module Decode = {
    let event = (raw) : event(Item.t) => {
      let json = Json.parseOrRaise(raw);
      let type_ = json |> Json.Decode.(field("type", string));
      Json.Decode.{
        type_,
        payload: Item.decode(json |> field("payload", string), type_),
        payloadHash: json |> field("payloadHash", string),
        issuerPubKey: json |> field("issuerPubKey", string),
        signature: json |> field("signature", string)
      }
    };
  };
};
