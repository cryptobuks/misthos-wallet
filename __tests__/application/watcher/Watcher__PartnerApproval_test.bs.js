// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../../../src/application/events/Event.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Fixtures = require("../../helpers/Fixtures.bs.js");
var Generators = require("../../helpers/Generators.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var WatcherHelpers = require("../../helpers/WatcherHelpers.bs.js");
var Watcher__PartnerApproval = require("../../../src/application/watcher/Watcher__PartnerApproval.bs.js");

describe("Watcher__PartnerApproval", (function () {
        Fixtures.withCached(/* None */0, "Watcher__PartnerApproval", "Will approve the creator", (function () {
                return Generators.withUserSessions(2);
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                var func = Generators.Log[/* withPartnerProposed */12];
                return Curry._1((function (param, param$1, param$2) {
                                return Curry._5(func, param, param$1, param$2, user1, user1);
                              })(/* None */0, /* None */0, /* None */0), Generators.Log[/* createVenture */11](user1));
              }), (function (_, log) {
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log));
                return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */3](log), (function (param) {
                              if (param.tag === 4) {
                                return Caml_obj.caml_equal(param[0][/* data */3], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        Fixtures.withCached(/* None */0, "Watcher__PartnerApproval", "With 1 partner and a proposal", (function () {
                return Generators.withUserSessions(2);
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user2 = match[1];
                var user1 = match[0];
                var func = Generators.Log[/* withPartnerProposed */12];
                return Curry._1((function (param, param$1, param$2) {
                                return Curry._5(func, param, param$1, param$2, user1, user2);
                              })(/* None */0, /* None */0, /* None */0), Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1)));
              }), (function (_, log) {
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log));
                return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */3](log), (function (param) {
                              if (param.tag === 4) {
                                return Caml_obj.caml_equal(param[0][/* data */3], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        Fixtures.withCached(/* None */0, "Watcher__PartnerApproval", "Completes when the partner is accepted", (function () {
                return Generators.withUserSessions(2);
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user2 = match[1];
                var user1 = match[0];
                var func = Generators.Log[/* withPartnerProposed */12];
                return Curry._1((function (param, param$1, param$2) {
                                return Curry._5(func, param, param$1, param$2, user1, user2);
                              })(/* None */0, /* None */0, /* None */0), Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1)));
              }), (function (_, log) {
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log));
                var log$1 = Generators.Log[/* withPartnerAccepted */15](proposal)(log);
                Caml_oo_curry.js2(710435299, 1, watcher, Generators.Log[/* lastItem */4](log$1));
                return WatcherHelpers.testWatcherHasCompleted(watcher);
              }));
        Fixtures.withCached(/* None */0, "Watcher__PartnerApproval", "With 2 users and a proposal", (function () {
                return Generators.withUserSessions(3);
              }), (function (sessions) {
                var match = Generators.threeUserSessionsFromArray(sessions);
                var user3 = match[2];
                var user1 = match[0];
                var func = Generators.Log[/* withPartnerProposed */12];
                return Curry._1((function (param, param$1, param$2) {
                                return Curry._5(func, param, param$1, param$2, user1, user3);
                              })(/* None */0, /* None */0, /* None */0), Generators.Log[/* withPartner */16](match[1], /* :: */[
                                user1,
                                /* [] */0
                              ], Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1))));
              }), (function (_, log) {
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                return WatcherHelpers.testWatcherHasNoEventPending(Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log)));
              }));
        Fixtures.withCached(/* None */0, "Watcher__PartnerApproval", "With 2 users and a proposal and endorsement", (function () {
                return Generators.withUserSessions(3);
              }), (function (sessions) {
                var match = Generators.threeUserSessionsFromArray(sessions);
                var user3 = match[2];
                var user1 = match[0];
                var func = Generators.Log[/* withPartnerProposed */12];
                return Curry._1((function (param, param$1, param$2) {
                                return Curry._5(func, param, param$1, param$2, user1, user3);
                              })(/* None */0, /* None */0, /* None */0), Generators.Log[/* withPartner */16](match[1], /* :: */[
                                user1,
                                /* [] */0
                              ], Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1))));
              }), (function (sessions, log) {
                var match = Generators.threeUserSessionsFromArray(sessions);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](/* None */0, match[1], proposal)(log);
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 4) {
                                return Caml_obj.caml_equal(param[0][/* data */3], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        return Fixtures.withCached(/* None */0, "Watcher__PartnerApproval", "With 2 users and a removal and a proposal", (function () {
                      return Generators.withUserSessions(3);
                    }), (function (sessions) {
                      var match = Generators.threeUserSessionsFromArray(sessions);
                      var user3 = match[2];
                      var user2 = match[1];
                      var user1 = match[0];
                      var func = Generators.Log[/* withPartnerProposed */12];
                      return Curry._1((function (param, param$1, param$2) {
                                      return Curry._5(func, param, param$1, param$2, user1, user3);
                                    })(/* None */0, /* None */0, /* None */0), Generators.Log[/* withPartnerRemoved */21](user2, /* :: */[
                                      user1,
                                      /* [] */0
                                    ], Generators.Log[/* withPartner */16](user2, /* :: */[
                                          user1,
                                          /* [] */0
                                        ], Generators.Log[/* withFirstPartner */17](user1)(Generators.Log[/* createVenture */11](user1)))));
                    }), (function (_, log) {
                      var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                      var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log));
                      return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */3](log), (function (param) {
                                    if (param.tag === 4) {
                                      return Caml_obj.caml_equal(param[0][/* data */3], proposal[/* data */6]);
                                    } else {
                                      return false;
                                    }
                                  }));
                    }));
      }));

var PartnerApproval = 0;

exports.PartnerApproval = PartnerApproval;
/*  Not a pure module */
