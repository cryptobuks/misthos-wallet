// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Body3 = require("./components/Body3.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("../utils/Utils.bs.js");
var React = require("react");
var Payout = require("./components/Payout.bs.js");
var Router = require("./Router.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var ViewModel = require("./ViewModel.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WalletTypes = require("../application/wallet/WalletTypes.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");

function changeNewPartnerId($$event) {
  return /* ChangeNewPartnerId */Block.__(0, [$$event.target.value]);
}

var component = ReasonReact.reducerComponent("SelectedVenture");

function make(initialViewModel, session, commands, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              return /* record */[
                      /* viewModel */initialViewModel,
                      /* selfRemoved */ViewModel.isPartner(session[/* userId */0], initialViewModel) === false,
                      /* prospectId */param[/* state */1][/* prospectId */2],
                      /* balance */ViewModel.balance(initialViewModel)
                    ];
            }),
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var partners = $$Array.of_list(List.map((function (m) {
                          var match = PrimitiveTypes.UserId[/* eq */5](session[/* userId */0], m[/* userId */0]);
                          var match$1 = List.exists((function (p) {
                                  return PrimitiveTypes.UserId[/* eq */5](p[/* userId */1], m[/* userId */0]);
                                }), ViewModel.removalProspects(state[/* viewModel */0]));
                          return React.createElement("li", {
                                      key: PrimitiveTypes.UserId[/* toString */0](m[/* userId */0])
                                    }, React.createElement("div", undefined, Utils.text(PrimitiveTypes.UserId[/* toString */0](m[/* userId */0])), match || match$1 ? null : React.createElement("button", {
                                                onClick: (function () {
                                                    return Curry._1(send, /* RemovePartner */Block.__(2, [m[/* userId */0]]));
                                                  })
                                              }, Utils.text("Propose Removal"))));
                        }), ViewModel.partners(state[/* viewModel */0])));
              var prospects = $$Array.of_list(List.map((function (prospect) {
                          return React.createElement("li", {
                                      key: PrimitiveTypes.UserId[/* toString */0](prospect[/* userId */1])
                                    }, Utils.text("'" + (PrimitiveTypes.UserId[/* toString */0](prospect[/* userId */1]) + ("' endorsed by: " + List.fold_left((function (state, partnerId) {
                                                    return state + (partnerId + " ");
                                                  }), "", List.map(PrimitiveTypes.UserId[/* toString */0], prospect[/* endorsedBy */2]))))), List.mem(session[/* userId */0], prospect[/* endorsedBy */2]) === false ? React.createElement("button", {
                                            onClick: (function () {
                                                return Curry._1(send, /* EndorsePartner */Block.__(1, [prospect[/* processId */0]]));
                                              })
                                          }, Utils.text("Endorse Partner")) : null);
                        }), ViewModel.prospects(state[/* viewModel */0])));
              var removalProspects = $$Array.of_list(List.map((function (prospect) {
                          return React.createElement("li", {
                                      key: PrimitiveTypes.UserId[/* toString */0](prospect[/* userId */1])
                                    }, Utils.text("'" + (PrimitiveTypes.UserId[/* toString */0](prospect[/* userId */1]) + ("' endorsed by: " + List.fold_left((function (state, partnerId) {
                                                    return state + (partnerId + " ");
                                                  }), "", List.map(PrimitiveTypes.UserId[/* toString */0], prospect[/* endorsedBy */2]))))), List.mem(session[/* userId */0], prospect[/* endorsedBy */2]) === false ? React.createElement("button", {
                                            onClick: (function () {
                                                return Curry._1(send, /* EndorsePartnerRemoval */Block.__(3, [prospect[/* processId */0]]));
                                              })
                                          }, Utils.text("Endorse Removal")) : null);
                        }), ViewModel.removalProspects(state[/* viewModel */0])));
              var addresses = $$Array.of_list(List.map((function (address) {
                          return React.createElement("li", {
                                      key: address
                                    }, Utils.text(address));
                        }), ViewModel.incomeAddresses(state[/* viewModel */0])));
              var payouts = $$Array.of_list(List.map((function (payout) {
                          var match = payout[/* status */4];
                          var tmp;
                          tmp = typeof match === "number" ? "pending" : (
                              match.tag ? "failed (error: '" + (match[0] + "')") : "completed (txId: " + (match[0] + ")")
                            );
                          var match$1 = payout[/* status */4];
                          var match$2 = List.mem(session[/* userId */0], payout[/* endorsedBy */2]);
                          var match$3 = payout[/* status */4];
                          var match$4 = List.mem(session[/* userId */0], payout[/* rejectedBy */3]);
                          var match$5 = List.mem(session[/* userId */0], payout[/* endorsedBy */2]);
                          return React.createElement("li", {
                                      key: PrimitiveTypes.ProcessId[/* toString */0](payout[/* processId */0])
                                    }, Utils.text("'" + (PrimitiveTypes.ProcessId[/* toString */0](payout[/* processId */0]) + ("' status: " + (tmp + (" endorsed by: " + (List.fold_left((function (state, partnerId) {
                                                          return state + (partnerId + " ");
                                                        }), "", List.map(PrimitiveTypes.UserId[/* toString */0], payout[/* endorsedBy */2])) + (" rejected by: " + List.fold_left((function (state, partnerId) {
                                                            return state + (partnerId + " ");
                                                          }), "", List.map(PrimitiveTypes.UserId[/* toString */0], payout[/* rejectedBy */3]))))))))), typeof match$1 === "number" && !match$2 ? React.createElement("button", {
                                            onClick: (function () {
                                                return Curry._1(send, /* EndorsePayout */Block.__(6, [payout[/* processId */0]]));
                                              })
                                          }, Utils.text("Endorse Payout")) : null, typeof match$3 === "number" && !(match$4 || match$5) ? React.createElement("button", {
                                            onClick: (function () {
                                                return Curry._1(send, /* RejectPayout */Block.__(5, [payout[/* processId */0]]));
                                              })
                                          }, Utils.text("Reject Payout")) : null);
                        }), ViewModel.payouts(state[/* viewModel */0])));
              var match = state[/* selfRemoved */1];
              return ReasonReact.element(/* None */0, /* None */0, Body3.make(/* Some */[/* :: */[
                                "Partners",
                                /* :: */[
                                  "Transactions",
                                  /* [] */0
                                ]
                              ]], React.createElement("div", undefined, React.createElement("h2", undefined, Utils.text(ViewModel.ventureName(state[/* viewModel */0]))), match ? React.createElement("b", undefined, Utils.text("YOU HAVE BEEN REMOVED FROM THIS VENTURE; VENTURE IS IN READ ONLY")) : null, Utils.text("Join Venture url: " + (window.location.origin + Router.Config[/* routeToUrl */1](/* JoinVenture */Block.__(1, [
                                              initialViewModel[/* ventureId */0],
                                              session[/* userId */0]
                                            ]))))), React.createElement("div", undefined, React.createElement("h3", undefined, Utils.text("Partners:")), React.createElement("ul", undefined, partners), React.createElement("h4", undefined, Utils.text("Prospects:")), React.createElement("ul", undefined, prospects), React.createElement("h4", undefined, Utils.text("To be removed:")), React.createElement("ul", undefined, removalProspects), React.createElement("input", {
                                      autoFocus: false,
                                      placeholder: "BlockstackId",
                                      value: state[/* prospectId */2],
                                      onChange: (function (e) {
                                          return Curry._1(send, /* ChangeNewPartnerId */Block.__(0, [e.target.value]));
                                        })
                                    }), React.createElement("button", {
                                      onClick: (function () {
                                          return Curry._1(send, /* ProposePartner */0);
                                        })
                                    }, Utils.text("Propose Partner"))), React.createElement("div", undefined, React.createElement("h3", undefined, Utils.text("Wallet:")), React.createElement("h4", undefined, Utils.text("blance: ")), Utils.text("income: " + (BTC.format(state[/* balance */3][/* income */0]) + (" spent: " + (BTC.format(state[/* balance */3][/* spent */1]) + (" reserved: " + BTC.format(state[/* balance */3][/* reserved */2])))))), React.createElement("h4", undefined, Utils.text("Income Addresses:")), React.createElement("ul", undefined, addresses), React.createElement("button", {
                                      onClick: (function () {
                                          return Curry._1(send, /* GetIncomeAddress */1);
                                        })
                                    }, Utils.text("Get New Income Address")), ReasonReact.element(/* None */0, /* None */0, Payout.make((function (destinations) {
                                            return Curry._1(send, /* ProposePayout */Block.__(4, [destinations]));
                                          }), /* array */[])), React.createElement("h4", undefined, Utils.text("Payouts:")), React.createElement("ul", undefined, payouts)), /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* viewModel */initialViewModel,
                      /* selfRemoved */ViewModel.isPartner(session[/* userId */0], initialViewModel) === false,
                      /* prospectId */"",
                      /* balance */ViewModel.balance(initialViewModel)
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              var match = state[/* selfRemoved */1];
              var exit = 0;
              if (typeof action === "number" || action.tag) {
                exit = 1;
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* viewModel */state[/* viewModel */0],
                            /* selfRemoved */state[/* selfRemoved */1],
                            /* prospectId */action[0],
                            /* balance */state[/* balance */3]
                          ]]);
              }
              if (exit === 1) {
                if (match) {
                  return /* NoUpdate */0;
                } else if (typeof action === "number") {
                  if (action === 0) {
                    var prospectId = $$String.trim(state[/* prospectId */2]);
                    if (prospectId === "") {
                      return /* NoUpdate */0;
                    } else {
                      Curry._1(commands[/* proposePartner */0], PrimitiveTypes.UserId[/* fromString */1](prospectId));
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewModel */state[/* viewModel */0],
                                  /* selfRemoved */state[/* selfRemoved */1],
                                  /* prospectId */"",
                                  /* balance */state[/* balance */3]
                                ]]);
                    }
                  } else {
                    Curry._1(commands[/* exposeIncomeAddress */9], WalletTypes.AccountIndex[/* default */9]);
                    return /* NoUpdate */0;
                  }
                } else {
                  switch (action.tag | 0) {
                    case 1 : 
                        Curry._1(commands[/* endorsePartner */1], action[0]);
                        return /* NoUpdate */0;
                    case 2 : 
                        Curry._1(commands[/* proposePartnerRemoval */3], action[0]);
                        return /* NoUpdate */0;
                    case 3 : 
                        Curry._1(commands[/* endorsePartnerRemoval */5], action[0]);
                        return /* NoUpdate */0;
                    case 4 : 
                        Curry._3(commands[/* proposePayout */6], WalletTypes.AccountIndex[/* default */9], action[0], BTC.fromSatoshis(/* int64 */[
                                  /* hi */0,
                                  /* lo */5
                                ]));
                        return /* NoUpdate */0;
                    case 5 : 
                        Curry._1(commands[/* rejectPayout */8], action[0]);
                        return /* NoUpdate */0;
                    case 6 : 
                        Curry._1(commands[/* endorsePayout */7], action[0]);
                        return /* NoUpdate */0;
                    
                  }
                }
              }
              
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = Utils.text;

exports.text = text;
exports.changeNewPartnerId = changeNewPartnerId;
exports.component = component;
exports.make = make;
/* component Not a pure module */
