// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("./BTC.bs.js");
var Utils = require("../../utils/Utils.bs.js");
var Address = require("./Address.bs.js");
var Network = require("./Network.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var WalletTypes = require("./WalletTypes.bs.js");
var Belt_SetString = require("bs-platform/lib/js/belt_SetString.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var AccountKeyChain = require("./AccountKeyChain.bs.js");
var PayoutTransaction = require("./PayoutTransaction.bs.js");

function collidingProcesses(processId, param) {
  var reserved = param[/* reserved */2];
  var inputs = Js_option.getWithDefault(/* array */[], Utils.mapOption((function (param) {
              return param[/* usedInputs */1];
            }), Belt_Map.get(param[/* payoutProcesses */4], processId)));
  return Belt_Set.remove(Belt_Array.reduceU(inputs, PrimitiveTypes.ProcessId[/* emptySet */9], (function (res, input) {
                    return Belt_Set.union(Belt_Map.getWithDefault(reserved, input, PrimitiveTypes.ProcessId[/* emptySet */9]), res);
                  })), processId);
}

function totalUnusedBTC(param) {
  return Belt_Set.reduceU(param[/* unused */1], BTC.zero, (function (res, param) {
                return res.plus(param[/* value */3]);
              }));
}

function totalReservedBTC(param) {
  return Belt_Array.reduceU(Belt_Map.keysToArray(param[/* reserved */2]), BTC.zero, (function (res, param) {
                return res.plus(param[/* value */3]);
              }));
}

function currentKeyChainIdent(accountIdx, userId, param) {
  return Js_option.getExn(Belt_List.getAssoc(Js_option.getExn(Belt_List.getAssoc(param[/* activatedKeyChain */5], accountIdx, WalletTypes.AccountIndex[/* eq */7])), userId, PrimitiveTypes.UserId[/* eq */5]));
}

function currentKeyChain(accountIdx, userId, state) {
  var currentIdent = currentKeyChainIdent(accountIdx, userId, state);
  return AccountKeyChain.Collection[/* lookup */2](accountIdx, currentIdent, state[/* keyChains */3]);
}

function exposedCoordinates(param) {
  return param[/* exposedCoordinates */6];
}

function accountKeyChains(param) {
  return param[/* keyChains */3];
}

function unusedInputs(param) {
  return Belt_Set.diff(param[/* unused */1], Belt_Set.mergeMany(Network.inputSet(/* () */0), Belt_Map.keysToArray(param[/* reserved */2])));
}

function nonReservedOldInputs(accountIdx, userId, collector) {
  var keyChains = collector[/* keyChains */3];
  var keyChainIdent = currentKeyChainIdent(accountIdx, userId, collector);
  var currentKeyChain = AccountKeyChain.Collection[/* lookup */2](accountIdx, keyChainIdent, keyChains);
  var custodians = AccountKeyChain.custodians(currentKeyChain);
  var currentKeyChainIdents = AccountKeyChain.Collection[/* withCustodians */3](custodians, keyChains);
  return Belt_Set.keepU(unusedInputs(collector), (function (i) {
                return Belt_SetString.has(currentKeyChainIdents, Address.Coordinates[/* keyChainIdent */4](i[/* coordinates */6])) === false;
              }));
}

function network(param) {
  return param[/* network */0];
}

function nextChangeAddress(accountIdx, userId, collector) {
  var keyChainIdent = currentKeyChainIdent(accountIdx, userId, collector);
  var accountKeyChain = AccountKeyChain.Collection[/* lookup */2](accountIdx, keyChainIdent, collector[/* keyChains */3]);
  var coordinates = Address.Coordinates[/* allForAccount */8](accountIdx)(collector[/* exposedCoordinates */6]);
  var nextChangeCoordinates = Address.Coordinates[/* nextInternal */1](userId, coordinates, accountKeyChain);
  return Address.find(nextChangeCoordinates, collector[/* keyChains */3]);
}

function make() {
  return /* record */[
          /* network : Regtest */0,
          /* unused */Network.inputSet(/* () */0),
          /* reserved */Network.inputMap(/* () */0),
          /* keyChains */AccountKeyChain.Collection[/* empty */0],
          /* payoutProcesses */PrimitiveTypes.ProcessId[/* makeMap */8](/* () */0),
          /* activatedKeyChain : [] */0,
          /* exposedCoordinates : [] */0
        ];
}

function removeInputsFromReserved(processId, inputs, reserved) {
  return Belt_Array.reduceU(inputs, reserved, (function (lookup, input) {
                return Belt_Map.updateU(lookup, input, (function (processes) {
                              var processes$1 = Belt_Set.remove(Js_option.getWithDefault(PrimitiveTypes.ProcessId[/* emptySet */9], processes), processId);
                              var match = Belt_Set.isEmpty(processes$1);
                              if (match) {
                                return /* None */0;
                              } else {
                                return /* Some */[processes$1];
                              }
                            }));
              }));
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 0 : 
        return /* record */[
                /* network */$$event[0][/* network */6],
                /* unused */state[/* unused */1],
                /* reserved */state[/* reserved */2],
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain */state[/* activatedKeyChain */5],
                /* exposedCoordinates */state[/* exposedCoordinates */6]
              ];
    case 14 : 
        return /* record */[
                /* network */state[/* network */0],
                /* unused */state[/* unused */1],
                /* reserved */state[/* reserved */2],
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain : :: */[
                  /* tuple */[
                    $$event[0][/* data */2][/* accountIdx */0],
                    /* [] */0
                  ],
                  state[/* activatedKeyChain */5]
                ],
                /* exposedCoordinates */state[/* exposedCoordinates */6]
              ];
    case 25 : 
        var match = $$event[0];
        var payoutTx = match[/* data */6][/* payoutTx */1];
        var changeAddress = payoutTx[/* changeAddress */3];
        var processId = match[/* processId */0];
        return /* record */[
                /* network */state[/* network */0],
                /* unused */state[/* unused */1],
                /* reserved */Belt_Array.reduceU(payoutTx[/* usedInputs */1], state[/* reserved */2], (function (lookup, input) {
                        return Belt_Map.updateU(lookup, input, (function (processes) {
                                      return /* Some */[Belt_Set.add(Js_option.getWithDefault(PrimitiveTypes.ProcessId[/* emptySet */9], processes), processId)];
                                    }));
                      })),
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */Belt_Map.set(state[/* payoutProcesses */4], processId, payoutTx),
                /* activatedKeyChain */state[/* activatedKeyChain */5],
                /* exposedCoordinates */changeAddress ? /* :: */[
                    changeAddress[0][/* coordinates */2],
                    state[/* exposedCoordinates */6]
                  ] : state[/* exposedCoordinates */6]
              ];
    case 29 : 
        var processId$1 = $$event[0][/* processId */0];
        var payoutTx$1 = Belt_Map.getExn(state[/* payoutProcesses */4], processId$1);
        var reserved = removeInputsFromReserved(processId$1, payoutTx$1[/* usedInputs */1], state[/* reserved */2]);
        return /* record */[
                /* network */state[/* network */0],
                /* unused */state[/* unused */1],
                /* reserved */reserved,
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain */state[/* activatedKeyChain */5],
                /* exposedCoordinates */state[/* exposedCoordinates */6]
              ];
    case 30 : 
        var processId$2 = $$event[0][/* processId */0];
        var payoutTx$2 = Belt_Map.getExn(state[/* payoutProcesses */4], processId$2);
        var reserved$1 = removeInputsFromReserved(processId$2, payoutTx$2[/* usedInputs */1], state[/* reserved */2]);
        return /* record */[
                /* network */state[/* network */0],
                /* unused */state[/* unused */1],
                /* reserved */reserved$1,
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain */state[/* activatedKeyChain */5],
                /* exposedCoordinates */state[/* exposedCoordinates */6]
              ];
    case 33 : 
        var match$1 = $$event[0];
        var processId$3 = match$1[/* processId */0];
        var payoutTx$3 = Belt_Map.getExn(state[/* payoutProcesses */4], processId$3);
        var reserved$2 = removeInputsFromReserved(processId$3, payoutTx$3[/* usedInputs */1], state[/* reserved */2]);
        var match$2 = PayoutTransaction.txInputForChangeAddress(match$1[/* txId */1], state[/* network */0], payoutTx$3);
        return /* record */[
                /* network */state[/* network */0],
                /* unused */Belt_Set.removeMany(match$2 ? Belt_Set.add(state[/* unused */1], match$2[0]) : state[/* unused */1], payoutTx$3[/* usedInputs */1]),
                /* reserved */reserved$2,
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain */state[/* activatedKeyChain */5],
                /* exposedCoordinates */state[/* exposedCoordinates */6]
              ];
    case 35 : 
        var processId$4 = $$event[0][/* processId */0];
        var payoutTx$4 = Belt_Map.getExn(state[/* payoutProcesses */4], processId$4);
        var reserved$3 = removeInputsFromReserved(processId$4, payoutTx$4[/* usedInputs */1], state[/* reserved */2]);
        return /* record */[
                /* network */state[/* network */0],
                /* unused */state[/* unused */1],
                /* reserved */reserved$3,
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain */state[/* activatedKeyChain */5],
                /* exposedCoordinates */state[/* exposedCoordinates */6]
              ];
    case 37 : 
        return /* record */[
                /* network */state[/* network */0],
                /* unused */state[/* unused */1],
                /* reserved */state[/* reserved */2],
                /* keyChains */AccountKeyChain.Collection[/* add */1]($$event[0][/* keyChain */0], state[/* keyChains */3]),
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain */state[/* activatedKeyChain */5],
                /* exposedCoordinates */state[/* exposedCoordinates */6]
              ];
    case 38 : 
        var match$3 = $$event[0];
        var accountIdx = match$3[/* accountIdx */0];
        return /* record */[
                /* network */state[/* network */0],
                /* unused */state[/* unused */1],
                /* reserved */state[/* reserved */2],
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain : :: */[
                  /* tuple */[
                    accountIdx,
                    /* :: */[
                      /* tuple */[
                        match$3[/* custodianId */1],
                        match$3[/* identifier */2]
                      ],
                      Js_option.getExn(Belt_List.getAssoc(state[/* activatedKeyChain */5], accountIdx, WalletTypes.AccountIndex[/* eq */7]))
                    ]
                  ],
                  Belt_List.removeAssoc(state[/* activatedKeyChain */5], accountIdx, WalletTypes.AccountIndex[/* eq */7])
                ],
                /* exposedCoordinates */state[/* exposedCoordinates */6]
              ];
    case 39 : 
        return /* record */[
                /* network */state[/* network */0],
                /* unused */state[/* unused */1],
                /* reserved */state[/* reserved */2],
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain */state[/* activatedKeyChain */5],
                /* exposedCoordinates : :: */[
                  $$event[0][/* address */1][/* coordinates */2],
                  state[/* exposedCoordinates */6]
                ]
              ];
    case 40 : 
        var match$4 = $$event[0];
        var coordinates = match$4[/* coordinates */1];
        var keyChain = AccountKeyChain.Collection[/* lookup */2](Address.Coordinates[/* accountIdx */3](coordinates), Address.Coordinates[/* keyChainIdent */4](coordinates), state[/* keyChains */3]);
        return /* record */[
                /* network */state[/* network */0],
                /* unused */Belt_Set.add(state[/* unused */1], /* record */[
                      /* txId */match$4[/* txId */2],
                      /* txOutputN */match$4[/* txOutputN */3],
                      /* address */match$4[/* address */0],
                      /* value */match$4[/* amount */4],
                      /* nCoSigners */keyChain[/* nCoSigners */2],
                      /* nPubKeys */Belt_List.length(keyChain[/* custodianKeyChains */3]),
                      /* coordinates */coordinates
                    ]),
                /* reserved */state[/* reserved */2],
                /* keyChains */state[/* keyChains */3],
                /* payoutProcesses */state[/* payoutProcesses */4],
                /* activatedKeyChain */state[/* activatedKeyChain */5],
                /* exposedCoordinates */state[/* exposedCoordinates */6]
              ];
    default:
      return state;
  }
}

exports.make = make;
exports.collidingProcesses = collidingProcesses;
exports.exposedCoordinates = exposedCoordinates;
exports.accountKeyChains = accountKeyChains;
exports.network = network;
exports.apply = apply;
exports.totalUnusedBTC = totalUnusedBTC;
exports.totalReservedBTC = totalReservedBTC;
exports.currentKeyChainIdent = currentKeyChainIdent;
exports.currentKeyChain = currentKeyChain;
exports.nonReservedOldInputs = nonReservedOldInputs;
exports.unusedInputs = unusedInputs;
exports.nextChangeAddress = nextChangeAddress;
/* BTC Not a pure module */
