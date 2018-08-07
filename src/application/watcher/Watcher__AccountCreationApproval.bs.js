// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../events/Event.bs.js");
var Policy = require("../Policy.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var EventLog = require("../events/EventLog.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var EligibilityCollector = require("./EligibilityCollector.bs.js");

var class_tables = [
  0,
  0,
  0
];

function make(proposal, log) {
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
          "state",
          "completed",
          "result"
        ]);
    var receive = ids[0];
    var processCompleted = ids[1];
    var pendingEvent = ids[2];
    var state = ids[3];
    var completed = ids[4];
    var result = ids[5];
    CamlinternalOO.set_methods($$class, /* array */[
          receive,
          (function (self$1, param) {
              var env$1 = self$1[env];
              var $$event = param[/* event */0];
              var init = self$1[state][0];
              self$1[state][0] = /* record */[
                /* eligibilityCollector */EligibilityCollector.apply($$event, self$1[state][0][/* eligibilityCollector */0]),
                /* endorsements */init[/* endorsements */1],
                /* policy */init[/* policy */2],
                /* systemIssuer */init[/* systemIssuer */3]
              ];
              var tmp;
              switch ($$event.tag | 0) {
                case 0 : 
                    var init$1 = self$1[state][0];
                    tmp = /* record */[
                      /* eligibilityCollector */init$1[/* eligibilityCollector */0],
                      /* endorsements */init$1[/* endorsements */1],
                      /* policy */init$1[/* policy */2],
                      /* systemIssuer */$$event[0][/* systemIssuer */7]
                    ];
                    break;
                case 14 : 
                    var $$event$1 = $$event[0];
                    if (PrimitiveTypes.ProcessId[/* eq */5]($$event$1[/* processId */0], env$1[0][/* processId */0])) {
                      var init$2 = self$1[state][0];
                      tmp = /* record */[
                        /* eligibilityCollector */init$2[/* eligibilityCollector */0],
                        /* endorsements */Belt_Set.add(self$1[state][0][/* endorsements */1], $$event$1[/* supporterId */1]),
                        /* policy */init$2[/* policy */2],
                        /* systemIssuer */init$2[/* systemIssuer */3]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 15 : 
                    if (PrimitiveTypes.ProcessId[/* eq */5]($$event[0][/* processId */0], env$1[0][/* processId */0])) {
                      self$1[completed][0] = true;
                      tmp = self$1[state][0];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                default:
                  tmp = self$1[state][0];
              }
              self$1[state][0] = tmp;
              self$1[result][0] = undefined;
              var tmp$1 = false;
              if (self$1[completed][0] === false) {
                var arg = EligibilityCollector.currentEligible(self$1[state][0][/* eligibilityCollector */0]);
                var arg$1 = self$1[state][0][/* endorsements */1];
                tmp$1 = (function (param) {
                      return Policy.fulfilled(param)(arg, arg$1);
                    })(self$1[state][0][/* policy */2]);
              }
              if (tmp$1) {
                self$1[result][0] = /* tuple */[
                  self$1[state][0][/* systemIssuer */3],
                  /* AccountCreationAccepted */Block.__(15, [Curry._1(Event.AccountCreation[/* Accepted */6][/* fromProposal */0], env$1[0])])
                ];
                return /* () */0;
              } else {
                return 0;
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
      self[state] = /* record */[/* contents : record */[
          /* eligibilityCollector */EligibilityCollector.make(env$1[1][/* eligibleWhenProposing */3]),
          /* endorsements */PrimitiveTypes.UserId[/* emptySet */9],
          /* policy */env$1[1][/* policy */5],
          /* systemIssuer */BitcoinjsLib.ECPair.makeRandom()
        ]];
      self[completed] = /* record */[/* contents */false];
      self[result] = /* record */[/* contents */undefined];
      self[env] = env$1[0];
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  var envs_000 = [proposal];
  var envs = [
    envs_000,
    proposal
  ];
  var $$process = Curry._1(class_tables[0], envs);
  Curry._3(EventLog.reduce, (function (_, item) {
          return Caml_oo_curry.js2(710435299, 1, $$process, item);
        }), /* () */0, log);
  return $$process;
}

exports.make = make;
/* Event Not a pure module */
