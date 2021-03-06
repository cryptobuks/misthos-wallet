module type Encodable = {
  type t;
  let encode: t => Js.Json.t;
  let decode: Js.Json.t => t;
};

module Make:
  (Event: Encodable) =>
  {
    type t;
    type summary = {knownItems: Belt.Set.String.t};
    type item = {
      event: Event.t,
      hash: string,
      issuerPubKey: string,
      signature: Node.buffer,
    };
    let make: unit => t;
    let items: t => array(item);
    let append: (Bitcoin.ECPair.t, Event.t, t) => (item, t);
    let appendItem: (item, t) => t;
    let appendItems: (array(item), t) => t;
    let reduce: (('s, item) => 's, 's, t) => 's;
    let findNewItems: (~other: t, t) => array(item);
    let length: t => int;
    let encode: t => Js.Json.t;
    let decode: Js.Json.t => t;
    let encodeItem: item => Js.Json.t;
    let decodeItem: Js.Json.t => item;
    let getSummary: t => summary;
    let encodeSummary: summary => Js.Json.t;
    let decodeSummary: Js.Json.t => summary;
  };
