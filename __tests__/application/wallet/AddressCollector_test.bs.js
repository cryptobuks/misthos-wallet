// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Fixtures = require("../../helpers/Fixtures.bs.js");
var Generators = require("../../helpers/Generators.bs.js");
var WalletTypes = require("../../../src/application/wallet/WalletTypes.bs.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var AddressCollector = require("../../../src/application/wallet/AddressCollector.bs.js");

function constructState(log) {
  return Generators.Log[/* reduce */1]((function (state, param) {
                return AddressCollector.apply(param[/* event */0], state);
              }), AddressCollector.make(/* () */0), log);
}

describe("AddressCollector", (function () {
        return Fixtures.withCached(/* None */0, "AddressCollector", "collects addresses", (function () {
                      return Fixtures.threeUserSessionsArray;
                    }), (function (sessions) {
                      var match = Generators.twoUserSessionsFromArray(sessions);
                      var user1 = match[0];
                      return Generators.Log[/* withIncomeAddressExposed */41](user1, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */33](user1, /* :: */[
                                                  user1,
                                                  /* [] */0
                                                ], Generators.Log[/* withAccount */27](user1, Generators.Log[/* withFirstPartner */18](user1)(Fixtures.createVenture(user1))))))));
                    }), (function (_, log) {
                      return Jest.test("has the address", (function () {
                                    return Jest.Expect[/* toEqual */12](/* record */[
                                                /* nCoSigners */1,
                                                /* nPubKeys */1,
                                                /* coordinates : tuple */[
                                                  WalletTypes.AccountIndex[/* fromInt */1](0),
                                                  "8974ad69910afdca42d4c7c08c094c8d2a9d454d0f02b5b101eb7abd30a06d30",
                                                  WalletTypes.CoSignerIndex[/* fromInt */1](0),
                                                  WalletTypes.ChainIndex[/* externalChain */9],
                                                  WalletTypes.AddressIndex[/* fromInt */1](0)
                                                ],
                                                /* witnessScript */"51210309995c255526c59ac6a6563832a838fbb9917305d84d3c11393e575238b4e9aa51ae",
                                                /* redeemScript */"0020f9a067ba831974aef9e6e8363e437d2660ca5120ab23c0c1acf32aa1605894c8",
                                                /* displayAddress */"2N7bomZmWhymdGttGbZZRYZ5QBS2TLnoMMJ",
                                                /* sequence : None */0
                                              ], Jest.Expect[/* expect */0](Belt_MapString.getExn(constructState(log)[/* exposedAddresses */2], "2N7bomZmWhymdGttGbZZRYZ5QBS2TLnoMMJ")));
                                  }));
                    }));
      }));

var G = 0;

var L = 0;

var F = 0;

exports.G = G;
exports.L = L;
exports.F = F;
exports.constructState = constructState;
/*  Not a pure module */
