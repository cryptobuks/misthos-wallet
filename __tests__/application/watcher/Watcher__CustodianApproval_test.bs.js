// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../../../src/application/events/Event.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Generators = require("../../helpers/Generators.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var WatcherHelpers = require("../../helpers/WatcherHelpers.bs.js");
var Watcher__CustodianApproval = require("../../../src/application/watcher/Watcher__CustodianApproval.bs.js");

describe("Watcher__CustodianApproval", (function () {
        describe("With 1 partner and a proposal", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user1, Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianEndorsed */29](user1, proposal)(log);
                var watcher = Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("CustodianAccepted", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 19) {
                                return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        describe("Completes when the custodian is accepted", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user1, Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianEndorsed */29](user1, proposal)(log);
                var watcher = Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                var log$2 = Generators.Log[/* withCustodianAccepted */31](proposal)(log$1);
                Caml_oo_curry.js2(710435299, 1, watcher, Generators.Log[/* lastItem */4](log$2));
                return WatcherHelpers.testWatcherHasCompleted(watcher);
              }));
        describe("Completes when the partner is removed", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user2, Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerRemoved */23](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withCustodianEndorsed */29](user1, proposal)(log));
                return WatcherHelpers.testWatcherHasCompleted(Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log$1)));
              }));
        describe("Only completes if the partner process has completed", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user3, Curry._1((function (param, param$1, param$2, param$3) {
                              return Curry._6(func, param, param$1, param$2, param$3, user1, user3);
                            })(undefined, undefined, undefined, undefined), Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                              user1,
                              /* [] */0
                            ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)))));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerRemoved */23](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withCustodianEndorsed */29](user1, proposal)(log));
                return WatcherHelpers.testWatcherHasNoEventPending(Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log$1)));
              }));
        describe("With 2 users and a proposal", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user2, Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                return WatcherHelpers.testWatcherHasNoEventPending(Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log)));
              }));
        describe("With 2 users and a proposal and 2 endorsements", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user2, Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianEndorsed */29](user2, proposal)(Generators.Log[/* withCustodianEndorsed */29](user1, proposal)(log));
                var watcher = Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("CustodianAccepted", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 19) {
                                return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        describe("With 2 users and a removal and a proposal", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user1, Generators.Log[/* withPartnerRemoved */23](user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                              user1,
                              /* [] */0
                            ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)))));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianEndorsed */29](user1, proposal)(log);
                var watcher = Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("CustodianAccepted", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 19) {
                                return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        describe("With 2 users and a proposal and a removal", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user1, Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianEndorsed */29](user1, proposal)(log);
                var watcher = Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                var log$2 = Generators.Log[/* withPartnerRemoved */23](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], log$1);
                Caml_oo_curry.js2(710435299, 2, watcher, Generators.Log[/* lastItem */4](log$2));
                return WatcherHelpers.testWatcherHasEventPending("CustodianAccepted", watcher, Generators.Log[/* systemIssuer */3](log$2), (function (param) {
                              if (param.tag === 19) {
                                return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        describe("Process gets denied when it has been rejected", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user3, Generators.Log[/* withPartner */17](undefined, user3, /* :: */[
                          user1,
                          /* :: */[
                            user2,
                            /* [] */0
                          ]
                        ], Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                              user1,
                              /* [] */0
                            ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)))));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianRejected */30](user2, proposal)(log);
                var watcher = Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("CustodianDenied", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 20) {
                                return true;
                              } else {
                                return false;
                              }
                            }));
              }));
        describe("Completes when the custodian is denied", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withCustodianProposed */28](user1, user3, Generators.Log[/* withPartner */17](undefined, user3, /* :: */[
                          user1,
                          /* :: */[
                            user2,
                            /* [] */0
                          ]
                        ], Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                              user1,
                              /* [] */0
                            ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)))));
                var proposal = Event.getCustodianProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianRejected */30](user2, proposal)(log);
                var watcher = Watcher__CustodianApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                var log$2 = Generators.Log[/* withCustodianDenied */32](proposal)(log$1);
                Caml_oo_curry.js2(710435299, 3, watcher, Generators.Log[/* lastItem */4](log$2));
                return WatcherHelpers.testWatcherHasCompleted(watcher);
              }));
        return /* () */0;
      }));

var CustodianApproval = 0;

exports.CustodianApproval = CustodianApproval;
/*  Not a pure module */
