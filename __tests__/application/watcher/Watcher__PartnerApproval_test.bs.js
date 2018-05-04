// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../../../src/application/events/Event.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Generators = require("../../helpers/Generators.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var PrimitiveTypes = require("../../../src/application/PrimitiveTypes.bs.js");
var WatcherHelpers = require("../../helpers/WatcherHelpers.bs.js");
var Watcher__PartnerApproval = require("../../../src/application/watcher/Watcher__PartnerApproval.bs.js");

describe("Will approve the creator", (function () {
        var user1 = Generators.userSession(PrimitiveTypes.UserId[/* fromString */1]("creator.id"));
        var eta = Generators.Log[/* createVenture */7](user1);
        var func = Generators.Log[/* withPartnerProposed */8];
        var log = Curry._1((function (param, param$1) {
                  return Curry._4(func, param, param$1, user1, user1);
                })(/* None */0, /* None */0), eta);
        var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */3](log));
        var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */4](log));
        return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */1](log), (function (param) {
                      if (param.tag === 3) {
                        return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */5]);
                      } else {
                        return false;
                      }
                    }));
      }));

describe("With 1 partner and a proposal", (function () {
        var match = Generators.twoUserSessions(/* () */0);
        var user2 = match[1];
        var user1 = match[0];
        var eta = Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1));
        var func = Generators.Log[/* withPartnerProposed */8];
        var log = Curry._1((function (param, param$1) {
                  return Curry._4(func, param, param$1, user1, user2);
                })(/* None */0, /* None */0), eta);
        var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */3](log));
        var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */4](log));
        return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */1](log), (function (param) {
                      if (param.tag === 3) {
                        return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */5]);
                      } else {
                        return false;
                      }
                    }));
      }));

describe("Completes when the partner is accepted", (function () {
        var match = Generators.twoUserSessions(/* () */0);
        var user2 = match[1];
        var user1 = match[0];
        var eta = Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1));
        var func = Generators.Log[/* withPartnerProposed */8];
        var log = Curry._1((function (param, param$1) {
                  return Curry._4(func, param, param$1, user1, user2);
                })(/* None */0, /* None */0), eta);
        var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */3](log));
        var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */4](log));
        var log$1 = Generators.Log[/* withPartnerAccepted */10](proposal)(log);
        Caml_oo_curry.js2(710435299, 1, watcher, Generators.Log[/* lastItem */2](log$1));
        return WatcherHelpers.testWatcherHasCompleted(watcher);
      }));

describe("With 2 users and a proposal", (function () {
        var match = Generators.threeUserSessions(/* () */0);
        var user3 = match[2];
        var user1 = match[0];
        var eta = Generators.Log[/* withPartner */11](match[1], /* :: */[
              user1,
              /* [] */0
            ], Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1)));
        var func = Generators.Log[/* withPartnerProposed */8];
        var log = Curry._1((function (param, param$1) {
                  return Curry._4(func, param, param$1, user1, user3);
                })(/* None */0, /* None */0), eta);
        var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */3](log));
        return WatcherHelpers.testWatcherHasNoEventPending(Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */4](log)));
      }));

describe("With 2 users and a proposal and endorsement", (function () {
        var match = Generators.threeUserSessions(/* () */0);
        var user3 = match[2];
        var user2 = match[1];
        var user1 = match[0];
        var eta = Generators.Log[/* withPartner */11](user2, /* :: */[
              user1,
              /* [] */0
            ], Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1)));
        var func = Generators.Log[/* withPartnerProposed */8];
        var log = Curry._1((function (param, param$1) {
                  return Curry._4(func, param, param$1, user1, user3);
                })(/* None */0, /* None */0), eta);
        var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */3](log));
        var log$1 = Generators.Log[/* withPartnerEndorsed */9](user2, proposal)(log);
        var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */4](log$1));
        return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */1](log$1), (function (param) {
                      if (param.tag === 3) {
                        return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */5]);
                      } else {
                        return false;
                      }
                    }));
      }));

describe("With 2 users and a removal and a proposal", (function () {
        var match = Generators.threeUserSessions(/* () */0);
        var user3 = match[2];
        var user2 = match[1];
        var user1 = match[0];
        var eta = Generators.Log[/* withPartnerRemoved */16](user2, /* :: */[
              user1,
              /* [] */0
            ], Generators.Log[/* withPartner */11](user2, /* :: */[
                  user1,
                  /* [] */0
                ], Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1))));
        var func = Generators.Log[/* withPartnerProposed */8];
        var log = Curry._1((function (param, param$1) {
                  return Curry._4(func, param, param$1, user1, user3);
                })(/* None */0, /* None */0), eta);
        var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */3](log));
        var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */4](log));
        return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */1](log), (function (param) {
                      if (param.tag === 3) {
                        return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */5]);
                      } else {
                        return false;
                      }
                    }));
      }));

var PartnerApproval = 0;

var G = 0;

var E = 0;

var L = 0;

exports.PartnerApproval = PartnerApproval;
exports.G = G;
exports.E = E;
exports.L = L;
/*  Not a pure module */
