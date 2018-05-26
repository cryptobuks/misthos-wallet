// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../events/Event.bs.js");
var Network = require("../wallet/Network.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var EventLog = require("../events/EventLog.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");

var class_tables = [
  0,
  0,
  0
];

function make(proposal, log) {
  var inputs = Belt_Set.mergeMany(Network.inputSet(/* () */0), proposal[/* data */6][/* payoutTx */1][/* usedInputs */1]);
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
          "systemIssuer"
        ]);
    var receive = ids[0];
    var processCompleted = ids[1];
    var pendingEvent = ids[2];
    var payoutProcesses = ids[3];
    var completed = ids[4];
    var result = ids[5];
    var systemIssuer = ids[6];
    CamlinternalOO.set_methods($$class, /* array */[
          receive,
          (function (self$1, param) {
              var env$1 = self$1[env];
              var $$event = param[/* event */0];
              var exit = 0;
              switch ($$event.tag | 0) {
                case 0 : 
                    self$1[systemIssuer][0] = $$event[0][/* systemIssuer */5];
                    return /* () */0;
                case 28 : 
                    var match = $$event[0];
                    self$1[payoutProcesses][0] = Belt_Map.set(self$1[payoutProcesses][0], match[/* processId */0], Belt_Set.mergeMany(Network.inputSet(/* () */0), match[/* data */2][/* payoutTx */1][/* usedInputs */1]));
                    return /* () */0;
                case 32 : 
                    var broadcastProcess = $$event[0][/* processId */0];
                    var broadcastInputs = Belt_Map.getExn(self$1[payoutProcesses][0], broadcastProcess);
                    if (Belt_Set.size(Belt_Set.intersect(broadcastInputs, env$1[2])) > 0) {
                      self$1[result][0] = /* Some */[/* tuple */[
                          self$1[systemIssuer][0],
                          /* PayoutAborted */Block.__(29, [Curry._1(Event.Payout[/* Aborted */8][/* fromProposal */0], env$1[1])])
                        ]];
                    }
                    self$1[payoutProcesses][0] = Belt_Map.remove(self$1[payoutProcesses][0], broadcastProcess);
                    return /* () */0;
                case 29 : 
                case 33 : 
                    exit = 1;
                    break;
                case 35 : 
                    self$1[payoutProcesses][0] = Belt_Map.remove(self$1[payoutProcesses][0], $$event[0][/* processId */0]);
                    return /* () */0;
                default:
                  return /* () */0;
              }
              if (exit === 1) {
                if (PrimitiveTypes.ProcessId[/* eq */5]($$event[0][/* processId */0], env$1[0])) {
                  self$1[result][0] = /* None */0;
                  self$1[completed][0] = true;
                  return /* () */0;
                } else {
                  return /* () */0;
                }
              }
              
            }),
          processCompleted,
          (function (self$1, _) {
              return self$1[completed][0];
            }),
          pendingEvent,
          (function (self$1, _) {
              return self$1[result][0];
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[payoutProcesses] = [PrimitiveTypes.ProcessId[/* makeMap */8](/* () */0)];
      self[completed] = [false];
      self[result] = [/* None */0];
      self[systemIssuer] = [BitcoinjsLib.ECPair.makeRandom()];
      self[env] = env$1;
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  var envs_000 = proposal[/* processId */0];
  var envs = [
    envs_000,
    proposal,
    inputs
  ];
  var $$process = Curry._1(class_tables[0], envs);
  Curry._3(EventLog.reduce, (function (_, item) {
          return Caml_oo_curry.js2(710435299, 1, $$process, item);
        }), /* () */0, log);
  return $$process;
}

exports.make = make;
/* Event Not a pure module */
