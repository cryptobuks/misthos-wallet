// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Policy = require("../application/Policy.bs.js");
var WalletTypes = require("../application/wallet/WalletTypes.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var AccountKeyChain = require("../application/wallet/AccountKeyChain.bs.js");

function make() {
  return /* record */[
          /* ventureId */PrimitiveTypes.VentureId[/* fromString */1](""),
          /* name */"",
          /* partners : [] */0,
          /* prospects : [] */0,
          /* removalProspects : [] */0,
          /* metaPolicy */Policy.unanimous,
          /* partnerPolicy */Policy.unanimous,
          /* incomeAddresses : [] */0,
          /* payouts : [] */0
        ];
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 0 : 
        var match = $$event[0];
        var metaPolicy = match[/* metaPolicy */4];
        return /* record */[
                /* ventureId */match[/* ventureId */0],
                /* name */match[/* ventureName */1],
                /* partners */state[/* partners */2],
                /* prospects */state[/* prospects */3],
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */metaPolicy,
                /* partnerPolicy */metaPolicy,
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */state[/* payouts */8]
              ];
    case 1 : 
        var match$1 = $$event[0];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects : :: */[
                  /* record */[
                    /* processId */match$1[/* processId */0],
                    /* userId */match$1[/* data */4][/* id */0],
                    /* endorsedBy : :: */[
                      match$1[/* supporterId */2],
                      /* [] */0
                    ]
                  ],
                  state[/* prospects */3]
                ],
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */state[/* payouts */8]
              ];
    case 2 : 
        var match$2 = $$event[0];
        var supporterId = match$2[/* supporterId */1];
        var processId = match$2[/* processId */0];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* userId */p[/* userId */1],
                                  /* endorsedBy : :: */[
                                    supporterId,
                                    p[/* endorsedBy */2]
                                  ]
                                ];
                        } else {
                          return p;
                        }
                      }), state[/* prospects */3]),
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */state[/* payouts */8]
              ];
    case 3 : 
        var data = $$event[0][/* data */2];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners : :: */[
                  /* record */[/* userId */data[/* id */0]],
                  state[/* partners */2]
                ],
                /* prospects */List.filter((function (p) {
                          return PrimitiveTypes.UserId[/* neq */6](p[/* userId */1], data[/* id */0]);
                        }))(state[/* prospects */3]),
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */state[/* payouts */8]
              ];
    case 4 : 
        var match$3 = $$event[0];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects */state[/* prospects */3],
                /* removalProspects : :: */[
                  /* record */[
                    /* processId */match$3[/* processId */0],
                    /* userId */match$3[/* data */4][/* id */0],
                    /* endorsedBy : :: */[
                      match$3[/* supporterId */2],
                      /* [] */0
                    ]
                  ],
                  state[/* removalProspects */4]
                ],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */state[/* payouts */8]
              ];
    case 5 : 
        var match$4 = $$event[0];
        var supporterId$1 = match$4[/* supporterId */1];
        var processId$1 = match$4[/* processId */0];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects */state[/* prospects */3],
                /* removalProspects */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId$1);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* userId */p[/* userId */1],
                                  /* endorsedBy : :: */[
                                    supporterId$1,
                                    p[/* endorsedBy */2]
                                  ]
                                ];
                        } else {
                          return p;
                        }
                      }), state[/* removalProspects */4]),
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */state[/* payouts */8]
              ];
    case 6 : 
        var match$5 = $$event[0];
        var id = match$5[/* data */2][/* id */0];
        var processId$2 = match$5[/* processId */0];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */List.filter((function (p) {
                          return PrimitiveTypes.UserId[/* neq */6](p[/* userId */0], id);
                        }))(state[/* partners */2]),
                /* prospects */state[/* prospects */3],
                /* removalProspects */List.filter((function (p) {
                          return PrimitiveTypes.ProcessId[/* neq */6](p[/* processId */0], processId$2);
                        }))(state[/* removalProspects */4]),
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */state[/* payouts */8]
              ];
    case 9 : 
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects */state[/* prospects */3],
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses : :: */[
                  /* tuple */[
                    $$event[0][/* data */2][/* accountIdx */0],
                    /* [] */0
                  ],
                  /* [] */0
                ],
                /* payouts */state[/* payouts */8]
              ];
    case 16 : 
        var match$6 = $$event[0];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects */state[/* prospects */3],
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts : :: */[
                  /* record */[
                    /* processId */match$6[/* processId */0],
                    /* payoutTx */match$6[/* data */4][/* payoutTx */1],
                    /* endorsedBy : :: */[
                      match$6[/* supporterId */2],
                      /* [] */0
                    ],
                    /* status : PayoutPending */0
                  ],
                  state[/* payouts */8]
                ]
              ];
    case 17 : 
        var match$7 = $$event[0];
        var supporterId$2 = match$7[/* supporterId */1];
        var processId$3 = match$7[/* processId */0];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects */state[/* prospects */3],
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId$3);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* payoutTx */p[/* payoutTx */1],
                                  /* endorsedBy : :: */[
                                    supporterId$2,
                                    p[/* endorsedBy */2]
                                  ],
                                  /* status */p[/* status */3]
                                ];
                        } else {
                          return p;
                        }
                      }), state[/* payouts */8])
              ];
    case 20 : 
        var match$8 = $$event[0];
        var transactionId = match$8[/* transactionId */1];
        var processId$4 = match$8[/* processId */0];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects */state[/* prospects */3],
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId$4);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* payoutTx */p[/* payoutTx */1],
                                  /* endorsedBy */p[/* endorsedBy */2],
                                  /* status : PayoutCompleted */Block.__(0, [transactionId])
                                ];
                        } else {
                          return p;
                        }
                      }), state[/* payouts */8])
              ];
    case 22 : 
        var match$9 = $$event[0];
        var errorMessage = match$9[/* errorMessage */1];
        var processId$5 = match$9[/* processId */0];
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects */state[/* prospects */3],
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses */state[/* incomeAddresses */7],
                /* payouts */List.map((function (p) {
                        var match = PrimitiveTypes.ProcessId[/* eq */5](p[/* processId */0], processId$5);
                        if (match) {
                          return /* record */[
                                  /* processId */p[/* processId */0],
                                  /* payoutTx */p[/* payoutTx */1],
                                  /* endorsedBy */p[/* endorsedBy */2],
                                  /* status : PayoutFailed */Block.__(1, [errorMessage])
                                ];
                        } else {
                          return p;
                        }
                      }), state[/* payouts */8])
              ];
    case 25 : 
        var match$10 = $$event[0];
        var accountIdx = Curry._1(AccountKeyChain.Address[/* Coordinates */0][/* accountIdx */6], match$10[/* coordinates */0]);
        return /* record */[
                /* ventureId */state[/* ventureId */0],
                /* name */state[/* name */1],
                /* partners */state[/* partners */2],
                /* prospects */state[/* prospects */3],
                /* removalProspects */state[/* removalProspects */4],
                /* metaPolicy */state[/* metaPolicy */5],
                /* partnerPolicy */state[/* partnerPolicy */6],
                /* incomeAddresses : :: */[
                  /* tuple */[
                    accountIdx,
                    /* :: */[
                      match$10[/* address */1],
                      List.assoc(accountIdx, state[/* incomeAddresses */7])
                    ]
                  ],
                  state[/* incomeAddresses */7]
                ],
                /* payouts */state[/* payouts */8]
              ];
    default:
      return state;
  }
}

var partial_arg = make(/* () */0);

function init(param) {
  return List.fold_left((function (m, e) {
                return apply(e, m);
              }), partial_arg, param);
}

function partners(state) {
  return state[/* partners */2];
}

function prospects(state) {
  return state[/* prospects */3];
}

function removalProspects(state) {
  return state[/* removalProspects */4];
}

function ventureName(state) {
  return state[/* name */1];
}

function incomeAddresses(state) {
  return List.assoc(WalletTypes.AccountIndex[/* default */8], state[/* incomeAddresses */7]);
}

function payouts(state) {
  return state[/* payouts */8];
}

exports.make = make;
exports.apply = apply;
exports.init = init;
exports.partners = partners;
exports.prospects = prospects;
exports.removalProspects = removalProspects;
exports.ventureName = ventureName;
exports.incomeAddresses = incomeAddresses;
exports.payouts = payouts;
/* partial_arg Not a pure module */
