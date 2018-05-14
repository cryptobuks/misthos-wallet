module type PrimitiveType = {
  type t;
  let toString: t => string;
  let fromString: string => t;
  let encode: t => Js.Json.t;
  let decode: Js.Json.t => t;
  let compare: (t, t) => int;
  let eq: (t, t) => bool;
  let neq: (t, t) => bool;
  type parent = t;
  module Comparator: {
    type identity;
    type t = parent;
    let cmp: Belt.Id.cmp(t, identity);
  };
  type map('v) = Belt.Map.t(t, 'v, Comparator.identity);
};

module VentureId: {include PrimitiveType; let make: unit => t;};

type ventureId = VentureId.t;

module UserId: {include PrimitiveType;};

type userId = UserId.t;

module ProcessId: {include PrimitiveType; let make: unit => t;};

type processId = ProcessId.t;

module LabelId: {include PrimitiveType; let make: unit => t;};

type labelId = LabelId.t;
