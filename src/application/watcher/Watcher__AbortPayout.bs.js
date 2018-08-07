// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../events/Event.bs.js");
var Address = require("../wallet/Address.bs.js");
var Network = require("../wallet/Network.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var EventLog = require("../events/EventLog.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var TxWrapper = require("../wallet/TxWrapper.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var AccountKeyChain = require("../wallet/AccountKeyChain.bs.js");

var class_tables = [
  0,
  0,
  0
];

function make(proposal, log) {
  var match = proposal[/* data */6][/* payoutTx */1];
  var usedInputs = match[/* usedInputs */1];
  var inputs = Belt_Set.mergeMany(Network.inputSet(/* () */0), usedInputs);
  var txWrapper = TxWrapper.make(match[/* txHex */0]);
  var keyChains = Curry._3(EventLog.reduce, (function (res, param) {
          var $$event = param[/* event */0];
          if ($$event.tag === 38) {
            return AccountKeyChain.Collection[/* add */1]($$event[0][/* keyChain */0], res);
          } else {
            return res;
          }
        }), AccountKeyChain.Collection[/* empty */0], log);
  var requiredSigs = /* record */[/* contents */Network.inputMap(/* () */0)];
  Belt_Array.forEachWithIndexU(usedInputs, (function (idx, input) {
          var keyChain = AccountKeyChain.Collection[/* lookup */2](Address.Coordinates[/* accountIdx */3](input[/* coordinates */6]), Address.Coordinates[/* keyChainIdent */4](input[/* coordinates */6]), keyChains);
          var match = Belt_Array.getExn(txWrapper[/* inputs */1], idx)[/* sequence */1] !== BitcoinjsLib.Transaction.DEFAULT_SEQUENCE;
          requiredSigs[0] = Belt_Map.set(requiredSigs[0], input, /* record */[
                /* custodians */Belt_Set.mergeMany(PrimitiveTypes.UserId[/* emptySet */9], Belt_List.toArray(Belt_List.map(keyChain[/* custodianKeyChains */4], (function (prim) {
                                return prim[0];
                              })))),
                /* requiredCoSigners */match ? 1 : keyChain[/* nCoSigners */2]
              ]);
          return /* () */0;
        }));
  var anyInputNotSignable = function (currentCustodians) {
    return Belt_Array.someU(Belt_Map.valuesToArray(requiredSigs[0]), (function (param) {
                  return Belt_Set.size(Belt_Set.intersect(currentCustodians, param[/* custodians */0])) < param[/* requiredCoSigners */1];
                }));
  };
  var getResult = function (systemIssuer, broadcastInputs, inputs) {
    if (Belt_Set.size(Belt_Set.intersect(broadcastInputs, inputs)) > 0) {
      return /* tuple */[
              systemIssuer,
              /* PayoutAborted */Block.__(30, [Curry._1(Event.Payout[/* Aborted */8][/* fromProposal */0], proposal)])
            ];
    }
    
  };
  if (!class_tables[0]) {
    var $$class = CamlinternalOO.create_table([
          "processCompleted",
          "receive",
          "pendingEvent"
        ]);
    var env = CamlinternalOO.new_variable($$class, "");
    var ids = CamlinternalOO.new_methods_variables($$class, [
          "receive",
          "processCompleted",
          "pendingEvent"
        ], [
          "payoutProcesses",
          "completed",
          "result",
          "systemIssuer",
          "custodians",
          "alreadySigned",
          "collidingProcesses"
        ]);
    var receive = ids[0];
    var processCompleted = ids[1];
    var pendingEvent = ids[2];
    var payoutProcesses = ids[3];
    var completed = ids[4];
    var result = ids[5];
    var systemIssuer = ids[6];
    var custodians = ids[7];
    var alreadySigned = ids[8];
    var collidingProcesses = ids[9];
    CamlinternalOO.set_methods($$class, /* array */[
          receive,
          (function (self$1, param) {
              var env$1 = self$1[env];
              var $$event = param[/* event */0];
              switch ($$event.tag | 0) {
                case 0 : 
                    self$1[systemIssuer][0] = $$event[0][/* systemIssuer */7];
                    return /* () */0;
                case 19 : 
                    self$1[custodians][0] = Belt_Set.add(self$1[custodians][0], $$event[0][/* data */2][/* partnerId */0]);
                    return /* () */0;
                case 24 : 
                    self$1[custodians][0] = Belt_Set.remove(self$1[custodians][0], $$event[0][/* data */2][/* custodianId */0]);
                    return /* () */0;
                case 29 : 
                    var match = $$event[0];
                    var acceptedProcess = match[/* processId */0];
                    if (PrimitiveTypes.ProcessId[/* neq */6](env$1[2], acceptedProcess)) {
                      self$1[payoutProcesses][0] = Belt_Map.set(self$1[payoutProcesses][0], acceptedProcess, Belt_Set.mergeMany(Network.inputSet(/* () */0), match[/* data */2][/* payoutTx */1][/* usedInputs */1]));
                      return /* () */0;
                    } else {
                      return /* () */0;
                    }
                case 30 : 
                    var abortedProcess = $$event[0][/* processId */0];
                    if (PrimitiveTypes.ProcessId[/* eq */5](abortedProcess, env$1[2])) {
                      self$1[result][0] = undefined;
                      self$1[completed][0] = true;
                      return /* () */0;
                    } else {
                      self$1[payoutProcesses][0] = Belt_Map.remove(self$1[payoutProcesses][0], abortedProcess);
                      if (Belt_Set.has(self$1[collidingProcesses][0], abortedProcess)) {
                        self$1[collidingProcesses][0] = Belt_Set.remove(self$1[collidingProcesses][0], abortedProcess);
                        self$1[result][0] = undefined;
                        return Belt_Set.forEachU(self$1[collidingProcesses][0], (function (collidingProcessId) {
                                      var broadcastInputs = Belt_Map.getExn(self$1[payoutProcesses][0], collidingProcessId);
                                      var match = Curry._3(env$1[4], self$1[systemIssuer][0], broadcastInputs, env$1[3]);
                                      if (match !== undefined) {
                                        self$1[result][0] = match;
                                        return /* () */0;
                                      } else {
                                        return /* () */0;
                                      }
                                    }));
                      } else {
                        return 0;
                      }
                    }
                case 31 : 
                    var abortedProcess$1 = $$event[0][/* processId */0];
                    if (PrimitiveTypes.ProcessId[/* eq */5](abortedProcess$1, env$1[2])) {
                      self$1[result][0] = undefined;
                      self$1[completed][0] = true;
                      return /* () */0;
                    } else {
                      self$1[payoutProcesses][0] = Belt_Map.remove(self$1[payoutProcesses][0], abortedProcess$1);
                      if (Belt_Set.has(self$1[collidingProcesses][0], abortedProcess$1)) {
                        self$1[collidingProcesses][0] = Belt_Set.remove(self$1[collidingProcesses][0], abortedProcess$1);
                        self$1[result][0] = undefined;
                        return Belt_Set.forEachU(self$1[collidingProcesses][0], (function (collidingProcessId) {
                                      var broadcastInputs = Belt_Map.getExn(self$1[payoutProcesses][0], collidingProcessId);
                                      var match = Curry._3(env$1[4], self$1[systemIssuer][0], broadcastInputs, env$1[3]);
                                      if (match !== undefined) {
                                        self$1[result][0] = match;
                                        return /* () */0;
                                      } else {
                                        return /* () */0;
                                      }
                                    }));
                      } else {
                        return 0;
                      }
                    }
                case 32 : 
                    var match$1 = $$event[0];
                    if (PrimitiveTypes.ProcessId[/* eq */5](match$1[/* processId */0], env$1[2])) {
                      self$1[alreadySigned][0] = Belt_Set.add(self$1[alreadySigned][0], match$1[/* custodianId */1]);
                      return /* () */0;
                    } else {
                      return /* () */0;
                    }
                case 33 : 
                    var broadcastProcess = $$event[0][/* processId */0];
                    if (PrimitiveTypes.ProcessId[/* neq */6](broadcastProcess, env$1[2])) {
                      var broadcastInputs = Belt_Map.getExn(self$1[payoutProcesses][0], broadcastProcess);
                      var match$2 = Curry._3(env$1[4], self$1[systemIssuer][0], broadcastInputs, env$1[3]);
                      if (match$2 !== undefined) {
                        self$1[result][0] = match$2;
                        self$1[collidingProcesses][0] = Belt_Set.add(self$1[collidingProcesses][0], broadcastProcess);
                      }
                      self$1[payoutProcesses][0] = Belt_Map.remove(self$1[payoutProcesses][0], broadcastProcess);
                      return /* () */0;
                    } else {
                      return /* () */0;
                    }
                case 34 : 
                    if (PrimitiveTypes.ProcessId[/* eq */5]($$event[0][/* processId */0], env$1[2])) {
                      self$1[result][0] = undefined;
                      self$1[completed][0] = true;
                      return /* () */0;
                    } else {
                      return /* () */0;
                    }
                case 36 : 
                    var broadcastProcess$1 = $$event[0][/* processId */0];
                    if (PrimitiveTypes.ProcessId[/* eq */5](broadcastProcess$1, env$1[2])) {
                      self$1[result][0] = undefined;
                      self$1[completed][0] = true;
                      return /* () */0;
                    } else {
                      self$1[payoutProcesses][0] = Belt_Map.remove(self$1[payoutProcesses][0], broadcastProcess$1);
                      if (Belt_Set.has(self$1[collidingProcesses][0], broadcastProcess$1)) {
                        self$1[collidingProcesses][0] = Belt_Set.remove(self$1[collidingProcesses][0], broadcastProcess$1);
                        self$1[result][0] = undefined;
                        return Belt_Set.forEachU(self$1[collidingProcesses][0], (function (collidingProcessId) {
                                      var broadcastInputs = Belt_Map.getExn(self$1[payoutProcesses][0], collidingProcessId);
                                      var match = Curry._3(env$1[4], self$1[systemIssuer][0], broadcastInputs, env$1[3]);
                                      if (match !== undefined) {
                                        self$1[result][0] = match;
                                        return /* () */0;
                                      } else {
                                        return /* () */0;
                                      }
                                    }));
                      } else {
                        return 0;
                      }
                    }
                default:
                  return /* () */0;
              }
            }),
          processCompleted,
          (function (self$1, _) {
              return self$1[completed][0];
            }),
          pendingEvent,
          (function (self$1, _) {
              var env$1 = self$1[env];
              var match = Curry._1(env$1[1], Belt_Set.union(self$1[custodians][0], self$1[alreadySigned][0]));
              if (match) {
                return /* tuple */[
                        self$1[systemIssuer][0],
                        /* PayoutAborted */Block.__(30, [Curry._1(Event.Payout[/* Aborted */8][/* fromProposal */0], env$1[0])])
                      ];
              } else {
                return self$1[result][0];
              }
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[payoutProcesses] = /* record */[/* contents */PrimitiveTypes.ProcessId[/* makeMap */8](/* () */0)];
      self[completed] = /* record */[/* contents */false];
      self[result] = /* record */[/* contents */undefined];
      self[systemIssuer] = /* record */[/* contents */BitcoinjsLib.ECPair.makeRandom()];
      self[custodians] = /* record */[/* contents */PrimitiveTypes.UserId[/* emptySet */9]];
      self[alreadySigned] = /* record */[/* contents */PrimitiveTypes.UserId[/* emptySet */9]];
      self[collidingProcesses] = /* record */[/* contents */PrimitiveTypes.ProcessId[/* emptySet */9]];
      self[env] = env$1;
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  var envs_002 = proposal[/* processId */0];
  var envs = [
    proposal,
    anyInputNotSignable,
    envs_002,
    inputs,
    getResult
  ];
  var $$process = Curry._1(class_tables[0], envs);
  Curry._3(EventLog.reduce, (function (_, item) {
          return Caml_oo_curry.js2(710435299, 1, $$process, item);
        }), /* () */0, log);
  return $$process;
}

exports.make = make;
/* Event Not a pure module */
