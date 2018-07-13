// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var PrimitiveTypes = require("../../application/PrimitiveTypes.bs.js");
var ProcessCollector = require("./ProcessCollector.bs.js");

function getProspect(processId, param) {
  return Belt_Map.get(param[/* prospects */2], processId);
}

function prospectsPendingApproval(param) {
  return Belt_List.keepU(Belt_List.fromArray(Belt_Map.valuesToArray(param[/* prospects */2])), (function (prospect) {
                var match = prospect[/* status */1];
                return match === 0;
              }));
}

function make(localUser) {
  return /* record */[
          /* localUser */localUser,
          /* partners : [] */0,
          /* prospects */PrimitiveTypes.ProcessId[/* makeMap */8](/* () */0),
          /* partnerPolicy : Unanimous */0
        ];
}

function apply($$event, state) {
  var exit = 0;
  switch ($$event.tag | 0) {
    case 0 : 
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners */state[/* partners */1],
                /* prospects */state[/* prospects */2],
                /* partnerPolicy */$$event[0][/* metaPolicy */4]
              ];
    case 1 : 
        var proposal = $$event[0];
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners */state[/* partners */1],
                /* prospects */ProcessCollector.addProposal(state[/* localUser */0], proposal, (function (data) {
                        return /* record */[
                                /* userId */data[/* id */1],
                                /* processType : Addition */1,
                                /* encryptionPubKeyKnown */Js_option.isSome(proposal[/* data */6][/* pubKey */2])
                              ];
                      }), state[/* prospects */2]),
                /* partnerPolicy */state[/* partnerPolicy */3]
              ];
    case 4 : 
        var acceptance = $$event[0];
        var data = acceptance[/* data */2];
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners : :: */[
                  /* record */[
                    /* userId */data[/* id */1],
                    /* name : None */0,
                    /* canProposeRemoval */PrimitiveTypes.UserId[/* neq */6](data[/* id */1], state[/* localUser */0]),
                    /* encryptionPubKeyKnown */Js_option.isSome(data[/* pubKey */2]),
                    /* submittedXPub */false
                  ],
                  Belt_List.keepU(state[/* partners */1], (function (param) {
                          return PrimitiveTypes.UserId[/* neq */6](param[/* userId */0], data[/* id */1]);
                        }))
                ],
                /* prospects */ProcessCollector.addAcceptance(acceptance, state[/* prospects */2]),
                /* partnerPolicy */state[/* partnerPolicy */3]
              ];
    case 6 : 
        var partnerId = $$event[0][/* partnerId */0];
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners */Belt_List.mapU(state[/* partners */1], (function (partner) {
                        return /* record */[
                                /* userId */partner[/* userId */0],
                                /* name */partner[/* name */1],
                                /* canProposeRemoval */partner[/* canProposeRemoval */2],
                                /* encryptionPubKeyKnown */partner[/* encryptionPubKeyKnown */3] || PrimitiveTypes.UserId[/* eq */5](partner[/* userId */0], partnerId),
                                /* submittedXPub */partner[/* submittedXPub */4]
                              ];
                      })),
                /* prospects */state[/* prospects */2],
                /* partnerPolicy */state[/* partnerPolicy */3]
              ];
    case 7 : 
        var proposal$1 = $$event[0];
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners */Belt_List.map(state[/* partners */1], (function (p) {
                        var match = PrimitiveTypes.UserId[/* eq */5](p[/* userId */0], proposal$1[/* data */6][/* id */0]);
                        if (match) {
                          return /* record */[
                                  /* userId */p[/* userId */0],
                                  /* name */p[/* name */1],
                                  /* canProposeRemoval */false,
                                  /* encryptionPubKeyKnown */p[/* encryptionPubKeyKnown */3],
                                  /* submittedXPub */p[/* submittedXPub */4]
                                ];
                        } else {
                          return p;
                        }
                      })),
                /* prospects */ProcessCollector.addProposal(state[/* localUser */0], proposal$1, (function (data) {
                        return /* record */[
                                /* userId */data[/* id */0],
                                /* processType : Removal */0,
                                /* encryptionPubKeyKnown */false
                              ];
                      }), state[/* prospects */2]),
                /* partnerPolicy */state[/* partnerPolicy */3]
              ];
    case 2 : 
    case 8 : 
        exit = 1;
        break;
    case 3 : 
    case 9 : 
        exit = 2;
        break;
    case 10 : 
        var acceptance$1 = $$event[0];
        var id = acceptance$1[/* data */2][/* id */0];
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners */Belt_List.keep(state[/* partners */1], (function (p) {
                        return PrimitiveTypes.UserId[/* neq */6](p[/* userId */0], id);
                      })),
                /* prospects */ProcessCollector.addAcceptance(acceptance$1, state[/* prospects */2]),
                /* partnerPolicy */state[/* partnerPolicy */3]
              ];
    case 5 : 
    case 11 : 
        exit = 3;
        break;
    case 37 : 
        var custodianId = $$event[0][/* custodianId */1];
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners */Belt_List.mapU(state[/* partners */1], (function (partner) {
                        return /* record */[
                                /* userId */partner[/* userId */0],
                                /* name */partner[/* name */1],
                                /* canProposeRemoval */partner[/* canProposeRemoval */2],
                                /* encryptionPubKeyKnown */partner[/* encryptionPubKeyKnown */3],
                                /* submittedXPub */partner[/* submittedXPub */4] || PrimitiveTypes.UserId[/* eq */5](partner[/* userId */0], custodianId)
                              ];
                      })),
                /* prospects */state[/* prospects */2],
                /* partnerPolicy */state[/* partnerPolicy */3]
              ];
    default:
      return state;
  }
  switch (exit) {
    case 1 : 
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners */state[/* partners */1],
                /* prospects */ProcessCollector.addRejection(state[/* localUser */0], $$event[0], state[/* prospects */2]),
                /* partnerPolicy */state[/* partnerPolicy */3]
              ];
    case 2 : 
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners */state[/* partners */1],
                /* prospects */ProcessCollector.addEndorsement(state[/* localUser */0], $$event[0], state[/* prospects */2]),
                /* partnerPolicy */state[/* partnerPolicy */3]
              ];
    case 3 : 
        return /* record */[
                /* localUser */state[/* localUser */0],
                /* partners */state[/* partners */1],
                /* prospects */ProcessCollector.addDenial($$event[0], state[/* prospects */2]),
                /* partnerPolicy */state[/* partnerPolicy */3]
              ];
    
  }
}

function isPartner(id, param) {
  return Belt_List.some(param[/* partners */1], (function (param) {
                return PrimitiveTypes.UserId[/* eq */5](param[/* userId */0], id);
              }));
}

exports.getProspect = getProspect;
exports.prospectsPendingApproval = prospectsPendingApproval;
exports.make = make;
exports.apply = apply;
exports.isPartner = isPartner;
/* PrimitiveTypes Not a pure module */
