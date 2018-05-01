// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../../src/application/events/Event.bs.js");
var Utils = require("../../src/utils/Utils.bs.js");
var Policy = require("../../src/application/Policy.bs.js");
var Generators = require("../helpers/Generators.bs.js");
var WalletTypes = require("../../src/application/wallet/WalletTypes.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var PrimitiveTypes = require("../../src/application/PrimitiveTypes.bs.js");
var AccountKeyChain = require("../../src/application/wallet/AccountKeyChain.bs.js");
var CustodianKeyChain = require("../../src/application/wallet/CustodianKeyChain.bs.js");
var Venture__Validation = require("../../src/application/Venture__Validation.bs.js");

function constructState(log) {
  return Generators.Log[/* reduce */0]((function (s, param) {
                return Venture__Validation.apply(param[/* event */0], s);
              }), Venture__Validation.makeState(/* () */0), log);
}

function testValidationResult(state, item, expected) {
  var description = Venture__Validation.resultToString(expected);
  return Jest.test("valdation should return '" + (description + "'"), (function () {
                return Jest.Expect[/* toEqual */12](description, Jest.Expect[/* expect */0](Venture__Validation.resultToString(Venture__Validation.validate(state, item))));
              }));
}

describe("CreateVenture", (function () {
        describe("as first event", (function () {
                var user1 = Generators.userSession(PrimitiveTypes.UserId[/* fromString */1]("user1"));
                var log = Generators.Log[/* createVenture */7](user1);
                return testValidationResult(Venture__Validation.makeState(/* () */0), Generators.Log[/* lastItem */2](log), /* Ok */0);
              }));
        describe("not as first event", (function () {
                var user1 = Generators.userSession(PrimitiveTypes.UserId[/* fromString */1]("user1"));
                var log = Generators.Log[/* createVenture */7](user1);
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */2](log), /* BadData */["Venture is already created"]);
              }));
        return /* () */0;
      }));

describe("PartnerProposal", (function () {
        describe("when proposing another partner", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1));
                var func = Generators.Log[/* withPartnerProposed */8];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */2](Curry._1((function (param, param$1) {
                                        return Curry._4(func, param, param$1, user1, user2);
                                      })(/* None */0, /* None */0), log)), /* Ok */0);
              }));
        describe("with the wrong policy", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1));
                var func = Generators.Log[/* withPartnerProposed */8];
                var arg = /* Some */[Policy.unanimousMinusOne];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */2](Curry._1((function (param) {
                                        return Curry._4(func, param, arg, user1, user2);
                                      })(/* None */0), log)), /* PolicyMissmatch */4);
              }));
        describe("when the supporter is a non-partner", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1));
                var func = Generators.Log[/* withPartnerProposed */8];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */2](Curry._1((function (param, param$1) {
                                        return Curry._4(func, param, param$1, user2, user3);
                                      })(/* None */0, /* None */0), log)), /* InvalidIssuer */2);
              }));
        describe("when the supporter is not the signer", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1));
                var func = Generators.Log[/* withPartnerProposed */8];
                var arg = function (param) {
                  return Curry._4(func, /* Some */[user1[/* issuerKeyPair */2]], param, user2, user3);
                };
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */2]((function (eta) {
                                    return Curry._1(arg(/* None */0), eta);
                                  })(log)), /* InvalidIssuer */2);
              }));
        describe("when the prospect already exists", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withPartner */11](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1)));
                var func = Generators.Log[/* withPartnerProposed */8];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */2](Curry._1((function (param, param$1) {
                                        return Curry._4(func, param, param$1, user1, user2);
                                      })(/* None */0, /* None */0), log)), /* Ignore */1);
              }));
        describe("when the prospect was already proposed", (function () {
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
                var func$1 = Generators.Log[/* withPartnerProposed */8];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */2](Curry._1((function (param, param$1) {
                                        return Curry._4(func$1, param, param$1, user2, user3);
                                      })(/* None */0, /* None */0), log)), /* Ok */0);
              }));
        describe("when the creator proposes themselves", (function () {
                var user1 = Generators.userSession(PrimitiveTypes.UserId[/* fromString */1]("user1"));
                var log = Generators.Log[/* createVenture */7](user1);
                var func = Generators.Log[/* withPartnerProposed */8];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */2](Curry._1((function (param, param$1) {
                                        return Curry._4(func, param, param$1, user1, user1);
                                      })(/* None */0, /* None */0), log)), /* Ok */0);
              }));
        describe("when proposing a partner that was removed", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withPartnerRemoved */16](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withPartner */11](user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */12](user1)(Generators.Log[/* createVenture */7](user1))));
                var func = Generators.Log[/* withPartnerProposed */8];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */2](Curry._1((function (param, param$1) {
                                        return Curry._4(func, param, param$1, user1, user2);
                                      })(/* None */0, /* None */0), log)), /* Ok */0);
              }));
        return /* () */0;
      }));

describe("Validate CustodianData", (function () {
        var creatorId = PrimitiveTypes.UserId[/* fromString */1]("creator.id");
        var creatorKeyPair = BitcoinjsLib.ECPair.makeRandom();
        var creatorPubKey = Utils.publicKeyFromKeyPair(creatorKeyPair);
        var createdEvent = Event.VentureCreated[/* make */0]("test", creatorId, creatorPubKey, Policy.unanimous, /* Regtest */0);
        var partnerProposal = Event.getPartnerProposedExn(Event.makePartnerProposed(creatorId, creatorId, creatorPubKey, Policy.unanimous));
        var state = Venture__Validation.apply(/* PartnerAccepted */Block.__(3, [Curry._1(Event.Partner[/* Accepted */4][/* fromProposal */0], partnerProposal)]), Venture__Validation.apply(/* PartnerProposed */Block.__(1, [partnerProposal]), Venture__Validation.apply(/* VentureCreated */Block.__(0, [createdEvent]), Venture__Validation.makeState(/* () */0))));
        var accountIdx = WalletTypes.AccountIndex[/* default */8];
        var custodianId = PrimitiveTypes.UserId[/* fromString */1]("custodian.id");
        var custodianKeyPair = BitcoinjsLib.ECPair.makeRandom();
        var custodianPubKey = Utils.publicKeyFromKeyPair(custodianKeyPair);
        Jest.test("Fails if partner doesn't exist", (function () {
                return Jest.Expect[/* toEqual */12](/* BadData */["Partner with Id 'custodian.id' doesn't exist"], Jest.Expect[/* expect */0](Venture__Validation.validateCustodianData(/* record */[
                                    /* partnerId */custodianId,
                                    /* partnerApprovalProcess */PrimitiveTypes.ProcessId[/* make */7](/* () */0),
                                    /* accountIdx */accountIdx
                                  ], state)));
              }));
        var custodianPartnerProposal = Event.getPartnerProposedExn(Event.makePartnerProposed(creatorId, custodianId, custodianPubKey, Policy.unanimous));
        return Jest.test("Succeeds if partner was proposed", (function () {
                      return Jest.Expect[/* toEqual */12](/* Ok */0, Jest.Expect[/* expect */0](Venture__Validation.validateCustodianData(/* record */[
                                          /* partnerId */custodianId,
                                          /* partnerApprovalProcess */custodianPartnerProposal[/* processId */0],
                                          /* accountIdx */accountIdx
                                        ], Venture__Validation.apply(/* PartnerProposed */Block.__(1, [custodianPartnerProposal]), state))));
                    }));
      }));

describe("Validate AccountKeyChainUpdated", (function () {
        var supporterId = PrimitiveTypes.UserId[/* fromString */1]("supporter");
        var systemIssuer = BitcoinjsLib.ECPair.makeRandom();
        var emptyState = Venture__Validation.makeState(/* () */0);
        var keyChain0 = Event.AccountKeyChainUpdated[/* make */0](AccountKeyChain.make(WalletTypes.AccountIndex[/* first */1], WalletTypes.AccountKeyChainIndex[/* first */1], 0, /* [] */0));
        var accountProposed = Curry._4(Event.AccountCreation[/* Proposed */2][/* make */0], /* None */0, supporterId, Policy.unanimous, /* record */[
              /* accountIdx */WalletTypes.AccountIndex[/* default */8],
              /* name */"Account"
            ]);
        var accountCreation = Curry._1(Event.AccountCreation[/* Accepted */4][/* fromProposal */0], accountProposed);
        var validateWithState = function ($staropt$star, state) {
          var keyChain = $staropt$star ? $staropt$star[0] : keyChain0;
          return Venture__Validation.validateAccountKeyChainUpdated(keyChain, state, systemIssuer);
        };
        Jest.test("The Account Exists", (function () {
                return Jest.Expect[/* toEqual */12](/* tuple */[
                            /* BadData */["Account doesn't exist"],
                            /* Ok */0
                          ], Jest.Expect[/* expect */0](/* tuple */[
                                validateWithState(/* None */0, emptyState),
                                validateWithState(/* None */0, Venture__Validation.apply(/* AccountCreationAccepted */Block.__(9, [accountCreation]), Venture__Validation.apply(/* AccountCreationProposed */Block.__(7, [accountProposed]), emptyState)))
                              ]));
              }));
        Jest.test("The KeyChainIndex is in order", (function () {
                var keyChain1 = Event.AccountKeyChainUpdated[/* make */0](AccountKeyChain.make(WalletTypes.AccountIndex[/* default */8], WalletTypes.AccountKeyChainIndex[/* next */2](WalletTypes.AccountKeyChainIndex[/* first */1]), 0, /* [] */0));
                var keyChain2 = Event.AccountKeyChainUpdated[/* make */0](AccountKeyChain.make(WalletTypes.AccountIndex[/* default */8], WalletTypes.AccountKeyChainIndex[/* next */2](WalletTypes.AccountKeyChainIndex[/* next */2](WalletTypes.AccountKeyChainIndex[/* first */1])), 0, /* [] */0));
                var stateWithAccountAndKeyChain = Venture__Validation.apply(/* AccountKeyChainUpdated */Block.__(24, [keyChain0]), Venture__Validation.apply(/* AccountCreationAccepted */Block.__(9, [accountCreation]), Venture__Validation.apply(/* AccountCreationProposed */Block.__(7, [accountProposed]), emptyState)));
                return Jest.Expect[/* toEqual */12](/* tuple */[
                            /* BadData */["Bad KeyChainIndex"],
                            /* Ok */0
                          ], Jest.Expect[/* expect */0](/* tuple */[
                                validateWithState(/* Some */[keyChain2], stateWithAccountAndKeyChain),
                                validateWithState(/* Some */[keyChain1], stateWithAccountAndKeyChain)
                              ]));
              }));
        return Jest.test("The CustodianKeyChains are the latest", (function () {
                      var masterKeyChain = new BitcoinjsLib.HDNode(systemIssuer, Utils.bufFromHex("c8bce5e6dac6f931af17863878cce2ca3b704c61b3d775fe56881cc8ff3ab1cb"));
                      var custodianKeyChain0 = CustodianKeyChain.toPublicKeyChain(CustodianKeyChain.make(PrimitiveTypes.VentureId[/* fromString */1]("venture"), WalletTypes.AccountIndex[/* default */8], WalletTypes.CustodianKeyChainIndex[/* first */7], masterKeyChain));
                      var custodianKeyChain1 = CustodianKeyChain.toPublicKeyChain(CustodianKeyChain.make(PrimitiveTypes.VentureId[/* fromString */1]("venture"), WalletTypes.AccountIndex[/* default */8], WalletTypes.CustodianKeyChainIndex[/* next */1](WalletTypes.CustodianKeyChainIndex[/* first */7]), masterKeyChain));
                      var custodianId = PrimitiveTypes.UserId[/* fromString */1]("custodian");
                      var stateWithAccountAndCustodianKeyChain = Venture__Validation.apply(/* CustodianKeyChainUpdated */Block.__(23, [Event.CustodianKeyChainUpdated[/* make */0](PrimitiveTypes.ProcessId[/* make */7](/* () */0), custodianId, custodianKeyChain1)]), Venture__Validation.apply(/* CustodianKeyChainUpdated */Block.__(23, [Event.CustodianKeyChainUpdated[/* make */0](PrimitiveTypes.ProcessId[/* make */7](/* () */0), custodianId, custodianKeyChain0)]), Venture__Validation.apply(/* AccountCreationAccepted */Block.__(9, [accountCreation]), Venture__Validation.apply(/* AccountCreationProposed */Block.__(7, [accountProposed]), emptyState))));
                      var keyChain = Event.AccountKeyChainUpdated[/* make */0](AccountKeyChain.make(WalletTypes.AccountIndex[/* default */8], WalletTypes.AccountKeyChainIndex[/* first */1], 1, /* :: */[
                                /* tuple */[
                                  custodianId,
                                  custodianKeyChain0
                                ],
                                /* [] */0
                              ]));
                      var keyChain1 = Event.AccountKeyChainUpdated[/* make */0](AccountKeyChain.make(WalletTypes.AccountIndex[/* default */8], WalletTypes.AccountKeyChainIndex[/* first */1], 1, /* :: */[
                                /* tuple */[
                                  custodianId,
                                  custodianKeyChain1
                                ],
                                /* [] */0
                              ]));
                      return Jest.Expect[/* toEqual */12](/* tuple */[
                                  /* BadData */["Bad CustodianKeyChain"],
                                  /* Ok */0
                                ], Jest.Expect[/* expect */0](/* tuple */[
                                      validateWithState(/* Some */[keyChain], stateWithAccountAndCustodianKeyChain),
                                      validateWithState(/* Some */[keyChain1], stateWithAccountAndCustodianKeyChain)
                                    ]));
                    }));
      }));

var G = 0;

var E = 0;

var L = 0;

var Validation = 0;

exports.G = G;
exports.E = E;
exports.L = L;
exports.Validation = Validation;
exports.constructState = constructState;
exports.testValidationResult = testValidationResult;
/*  Not a pure module */
