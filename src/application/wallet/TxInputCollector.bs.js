// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Address = require("./Address.bs.js");
var Network = require("./Network.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var AccountKeyChain = require("./AccountKeyChain.bs.js");
var PayoutTransaction = require("./PayoutTransaction.bs.js");

function make() {
  return /* record */[
          /* network : Regtest */0,
          /* unused */Network.inputSet(/* () */0),
          /* reserved */Network.inputSet(/* () */0),
          /* keyChains */AccountKeyChain.Collection[/* make */0](/* () */0),
          /* payoutProcesses */PrimitiveTypes.ProcessId[/* makeMap */8](/* () */0)
        ];
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 0 : 
        return /* record */[
                /* network */$$event[0][/* network */6],
                /* unused */state[/* unused */1],
                /* reserved */state[/* reserved */2],
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4]
              ];
    case 21 : 
        var match = $$event[0];
        var payoutTx = match[/* data */5][/* payoutTx */1];
        return /* record */[
                /* network */state[/* network */0],
                /* unused */Belt_Set.removeMany(state[/* unused */1], payoutTx[/* usedInputs */1]),
                /* reserved */Belt_Set.mergeMany(state[/* reserved */2], payoutTx[/* usedInputs */1]),
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */Belt_Map.set(state[/* payoutProcesses */4], match[/* processId */0], payoutTx)
              ];
    case 26 : 
        var match$1 = $$event[0];
        var payoutTx$1 = Belt_Map.getExn(state[/* payoutProcesses */4], match$1[/* processId */0]);
        var match$2 = PayoutTransaction.txInputForChangeAddress(match$1[/* txId */1], state[/* keyChains */3], state[/* network */0], payoutTx$1);
        return /* record */[
                /* network */state[/* network */0],
                /* unused */match$2 ? Belt_Set.add(state[/* unused */1], match$2[0]) : state[/* unused */1],
                /* reserved */Belt_Set.removeMany(state[/* reserved */2], payoutTx$1[/* usedInputs */1]),
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4]
              ];
    case 28 : 
        var payoutTx$2 = Belt_Map.getExn(state[/* payoutProcesses */4], $$event[0][/* processId */0]);
        return /* record */[
                /* network */state[/* network */0],
                /* unused */Belt_Set.mergeMany(state[/* unused */1], payoutTx$2[/* usedInputs */1]),
                /* reserved */Belt_Set.removeMany(state[/* reserved */2], payoutTx$2[/* usedInputs */1]),
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4]
              ];
    case 30 : 
        return /* record */[
                /* network */state[/* network */0],
                /* unused */state[/* unused */1],
                /* reserved */state[/* reserved */2],
                /* keyChains */AccountKeyChain.Collection[/* add */1]($$event[0][/* keyChain */0], state[/* keyChains */3]),
                /* payoutProcesses */state[/* payoutProcesses */4]
              ];
    case 33 : 
        var match$3 = $$event[0];
        var coordinates = match$3[/* coordinates */1];
        var keyChain = AccountKeyChain.Collection[/* lookup */2](Address.Coordinates[/* accountIdx */3](coordinates), Address.Coordinates[/* keyChainIdent */4](coordinates), state[/* keyChains */3]);
        return /* record */[
                /* network */state[/* network */0],
                /* unused */Belt_Set.add(state[/* unused */1], /* record */[
                      /* txId */match$3[/* txId */2],
                      /* txOutputN */match$3[/* txOutputN */3],
                      /* address */match$3[/* address */0],
                      /* value */match$3[/* amount */4],
                      /* nCoSigners */keyChain[/* nCoSigners */2],
                      /* nPubKeys */Belt_List.length(keyChain[/* custodianKeyChains */3]),
                      /* coordinates */coordinates
                    ]),
                /* reserved */state[/* reserved */2],
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4]
              ];
    default:
      return state;
  }
}

exports.make = make;
exports.apply = apply;
/* Address Not a pure module */