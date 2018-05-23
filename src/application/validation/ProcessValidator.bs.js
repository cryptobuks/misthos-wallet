// Generated by BUCKLESCRIPT VERSION 3.1.1, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../../utils/Utils.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");

function make() {
  return /* record */[
          /* processes */PrimitiveTypes.ProcessId[/* makeMap */8](/* () */0),
          /* exists */(function () {
              return false;
            }),
          /* isEligible */(function (_, _$1) {
              return false;
            }),
          /* didVote */(function (_, _$1) {
              return false;
            })
        ];
}

function addProposal(param, map) {
  return Belt_Map.set(map, param[/* processId */0], /* record */[
              /* status : InProgress */0,
              /* voterIds */Belt_Set.mergeMany(PrimitiveTypes.UserId[/* emptySet */9], /* array */[param[/* supporterId */4]]),
              /* eligibleWhenProposing */param[/* eligibleWhenProposing */3],
              /* policy */param[/* policy */5]
            ]);
}

function addEndorsement(param, map) {
  var supporterId = param[/* supporterId */1];
  return Belt_Map.update(map, param[/* processId */0], (function (param) {
                return Utils.mapOption((function ($$process) {
                              return /* record */[
                                      /* status */$$process[/* status */0],
                                      /* voterIds */Belt_Set.add($$process[/* voterIds */1], supporterId),
                                      /* eligibleWhenProposing */$$process[/* eligibleWhenProposing */2],
                                      /* policy */$$process[/* policy */3]
                                    ];
                            }), param);
              }));
}

function addRejection(param, map) {
  var rejectorId = param[/* rejectorId */1];
  return Belt_Map.update(map, param[/* processId */0], (function (param) {
                return Utils.mapOption((function ($$process) {
                              return /* record */[
                                      /* status */$$process[/* status */0],
                                      /* voterIds */Belt_Set.add($$process[/* voterIds */1], rejectorId),
                                      /* eligibleWhenProposing */$$process[/* eligibleWhenProposing */2],
                                      /* policy */$$process[/* policy */3]
                                    ];
                            }), param);
              }));
}

function addAcceptance(param, map) {
  return Belt_Map.update(map, param[/* processId */0], (function (param) {
                return Utils.mapOption((function ($$process) {
                              return /* record */[
                                      /* status : Accepted */1,
                                      /* voterIds */$$process[/* voterIds */1],
                                      /* eligibleWhenProposing */$$process[/* eligibleWhenProposing */2],
                                      /* policy */$$process[/* policy */3]
                                    ];
                            }), param);
              }));
}

function update($$event, param) {
  var processes = param[/* processes */0];
  var processes$1;
  switch ($$event.tag | 0) {
    case 1 : 
    case 5 : 
    case 9 : 
    case 13 : 
    case 17 : 
    case 21 : 
        processes$1 = addProposal($$event[0], processes);
        break;
    case 2 : 
    case 6 : 
    case 10 : 
    case 14 : 
    case 18 : 
    case 22 : 
        processes$1 = addRejection($$event[0], processes);
        break;
    case 3 : 
    case 7 : 
    case 11 : 
    case 15 : 
    case 19 : 
    case 23 : 
        processes$1 = addEndorsement($$event[0], processes);
        break;
    case 4 : 
    case 8 : 
    case 12 : 
    case 16 : 
    case 20 : 
    case 24 : 
        processes$1 = addAcceptance($$event[0], processes);
        break;
    default:
      processes$1 = processes;
  }
  return /* record */[
          /* processes */processes$1,
          /* exists */(function (param) {
              return Belt_Map.has(processes$1, param);
            }),
          /* isEligible */(function (processId, partnerId) {
              return Belt_Set.has(Belt_Map.getExn(processes$1, processId)[/* eligibleWhenProposing */2], partnerId);
            }),
          /* didVote */(function (processId, partnerId) {
              return Belt_Set.has(Belt_Map.getExn(processes$1, processId)[/* voterIds */1], partnerId);
            })
        ];
}

exports.make = make;
exports.addProposal = addProposal;
exports.addEndorsement = addEndorsement;
exports.addRejection = addRejection;
exports.addAcceptance = addAcceptance;
exports.update = update;
/* Utils Not a pure module */
