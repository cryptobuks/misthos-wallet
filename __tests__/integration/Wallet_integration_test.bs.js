// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../../src/application/wallet/BTC.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../../src/application/events/Event.bs.js");
var Helpers = require("../helpers/Helpers.bs.js");
var Generators = require("../helpers/Generators.bs.js");
var WalletTypes = require("../../src/application/wallet/WalletTypes.bs.js");
var WalletHelpers = require("../helpers/WalletHelpers.bs.js");
var Venture__Wallet = require("../../src/application/Venture__Wallet.bs.js");
var PayoutTransaction = require("../../src/application/wallet/PayoutTransaction.bs.js");

Helpers.enableHttpRequests(/* () */0);

describe("integration", (function () {
        var match = Generators.threeUserSessions(/* () */0);
        var userC = match[2];
        var userB = match[1];
        var userA = match[0];
        var log = Generators.Log[/* withAccountKeyChainActivated */34](/* None */0, userB, Generators.Log[/* withAccountKeyChainActivated */34](/* None */0, userA, Generators.Log[/* withAccountKeyChainIdentified */33](Generators.Log[/* withCustodianKeyChain */32](/* None */0, /* None */0, userB, Generators.Log[/* withCustodianKeyChain */32](/* None */0, /* None */0, userA, Generators.Log[/* withCustodian */27](userB, /* :: */[
                                  userA,
                                  /* :: */[
                                    userB,
                                    /* [] */0
                                  ]
                                ], Generators.Log[/* withPartner */15](userB, /* :: */[
                                      userA,
                                      /* [] */0
                                    ], Generators.Log[/* withCustodian */27](userA, /* :: */[
                                          userA,
                                          /* [] */0
                                        ], Generators.Log[/* withAccount */23](userA, Generators.Log[/* withFirstPartner */16](userA)(Generators.Log[/* createVenture */10](userA)))))))))));
        var accountIdx = WalletTypes.AccountIndex[/* default */9];
        var ventureId = Generators.Log[/* ventureId */1](log);
        var wallet = WalletHelpers.constructState(log);
        var match$1 = WalletHelpers.collectNextTwoAddresses(userA, /* tuple */[
              wallet,
              log
            ]);
        var match$2 = match$1[1];
        var match$3 = match$1[0];
        var address2 = match$3[1];
        var address1 = match$3[0];
        var log$1 = Generators.Log[/* withAccountKeyChainActivated */34](/* None */0, userC, Generators.Log[/* withAccountKeyChainActivated */34](/* None */0, userB, Generators.Log[/* withAccountKeyChainActivated */34](/* None */0, userA, Generators.Log[/* withAccountKeyChainIdentified */33](Generators.Log[/* withCustodianKeyChain */32](/* None */0, /* None */0, userC, Generators.Log[/* withCustodian */27](userC, /* :: */[
                                  userA,
                                  /* :: */[
                                    userB,
                                    /* [] */0
                                  ]
                                ], Generators.Log[/* withPartner */15](userC, /* :: */[
                                      userA,
                                      /* :: */[
                                        userB,
                                        /* [] */0
                                      ]
                                    ], match$2[1])))))));
        var oneKeyChainWallet = [match$2[0]];
        var wallet$1 = WalletHelpers.constructState(log$1);
        var match$4 = WalletHelpers.collectNextTwoAddresses(userC, /* tuple */[
              wallet$1,
              log$1
            ]);
        var wallet$2 = match$4[1][0];
        var match$5 = match$4[0];
        var address4 = match$5[1];
        var address3 = match$5[0];
        var twoKeyChainWallet = [wallet$2];
        var address1Satoshis = BTC.fromSatoshis(/* int64 */[
              /* hi */0,
              /* lo */10000
            ]);
        var address2Satoshis = BTC.fromSatoshis(/* int64 */[
              /* hi */0,
              /* lo */10000
            ]);
        var address3Satoshis = BTC.fromSatoshis(/* int64 */[
              /* hi */0,
              /* lo */10000
            ]);
        var address4Satoshis = BTC.fromSatoshis(/* int64 */[
              /* hi */0,
              /* lo */15000
            ]);
        var oneKeyChainWalletTotal = address1Satoshis.plus(address2Satoshis);
        var oneKeyChainSpendAmount = BTC.fromSatoshis(/* int64 */[
              /* hi */0,
              /* lo */6000
            ]);
        var oneKeyChainExpectedFee = BTC.fromSatoshis(/* int64 */[
                /* hi */0,
                /* lo */1892
              ]).plus(BTC.timesRounded(2.9 / 100, oneKeyChainSpendAmount));
        var twoKeyChainWalletTotal = oneKeyChainWalletTotal.plus(address3Satoshis).plus(address4Satoshis).minus(oneKeyChainSpendAmount).minus(oneKeyChainExpectedFee);
        var twoKeyChainSpendAmount = BTC.fromSatoshis(/* int64 */[
              /* hi */0,
              /* lo */25000
            ]);
        Jest.beforeAllPromise(/* Some */[40000], (function () {
                return Helpers.faucet(/* :: */[
                                /* tuple */[
                                  address1[/* address */1][/* displayAddress */5],
                                  address1Satoshis
                                ],
                                /* :: */[
                                  /* tuple */[
                                    address2[/* address */1][/* displayAddress */5],
                                    address2Satoshis
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      address3[/* address */1][/* displayAddress */5],
                                      address3Satoshis
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        address4[/* address */1][/* displayAddress */5],
                                        address4Satoshis
                                      ],
                                      /* [] */0
                                    ]
                                  ]
                                ]
                              ]).then((function (utxos) {
                                var walletOneAddresses_000 = /* tuple */[
                                  address1[/* address */1][/* displayAddress */5],
                                  address1
                                ];
                                var walletOneAddresses_001 = /* :: */[
                                  /* tuple */[
                                    address2[/* address */1][/* displayAddress */5],
                                    address2
                                  ],
                                  /* [] */0
                                ];
                                var walletOneAddresses = /* :: */[
                                  walletOneAddresses_000,
                                  walletOneAddresses_001
                                ];
                                var walletTwoAddresses_000 = /* tuple */[
                                  address1[/* address */1][/* displayAddress */5],
                                  address1
                                ];
                                var walletTwoAddresses_001 = /* :: */[
                                  /* tuple */[
                                    address2[/* address */1][/* displayAddress */5],
                                    address2
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      address3[/* address */1][/* displayAddress */5],
                                      address3
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        address4[/* address */1][/* displayAddress */5],
                                        address4
                                      ],
                                      /* [] */0
                                    ]
                                  ]
                                ];
                                var walletTwoAddresses = /* :: */[
                                  walletTwoAddresses_000,
                                  walletTwoAddresses_001
                                ];
                                List.iter((function (param) {
                                        var address = param[/* address */2];
                                        var incomeEvent = Event.IncomeDetected[/* make */0](param[/* txOutputN */1], List.assoc(address, walletTwoAddresses)[/* address */1][/* coordinates */2], address, param[/* txId */0], param[/* amount */3]);
                                        var match = List.mem_assoc(address, walletOneAddresses);
                                        if (match) {
                                          oneKeyChainWallet[0] = Venture__Wallet.apply(/* IncomeDetected */Block.__(33, [incomeEvent]), oneKeyChainWallet[0]);
                                          twoKeyChainWallet[0] = Venture__Wallet.apply(/* IncomeDetected */Block.__(33, [incomeEvent]), twoKeyChainWallet[0]);
                                          return /* () */0;
                                        } else {
                                          twoKeyChainWallet[0] = Venture__Wallet.apply(/* IncomeDetected */Block.__(33, [incomeEvent]), twoKeyChainWallet[0]);
                                          return /* () */0;
                                        }
                                      }), utxos);
                                var param = Venture__Wallet.preparePayoutTx(userA, accountIdx, /* :: */[
                                      /* tuple */[
                                        Helpers.faucetAddress,
                                        oneKeyChainSpendAmount
                                      ],
                                      /* [] */0
                                    ], BTC.fromSatoshis(/* int64 */[
                                          /* hi */0,
                                          /* lo */10
                                        ]), oneKeyChainWallet[0]);
                                if (param) {
                                  var $$event = param[0];
                                  oneKeyChainWallet[0] = Venture__Wallet.apply(/* PayoutProposed */Block.__(21, [$$event]), oneKeyChainWallet[0]);
                                  twoKeyChainWallet[0] = Venture__Wallet.apply(/* PayoutProposed */Block.__(21, [$$event]), twoKeyChainWallet[0]);
                                  return Promise.all(/* tuple */[
                                              Promise.resolve($$event[/* processId */0]),
                                              Helpers.broadcastTransaction(PayoutTransaction.finalize(/* :: */[
                                                        $$event[/* data */5][/* payoutTx */1],
                                                        /* [] */0
                                                      ], /* Regtest */0))
                                            ]);
                                } else {
                                  throw PayoutTransaction.NotEnoughFunds;
                                }
                              })).then((function (param) {
                              var txId = param[1];
                              var processId = param[0];
                              oneKeyChainWallet[0] = Venture__Wallet.apply(/* PayoutBroadcast */Block.__(26, [Curry._2(Event.Payout[/* Broadcast */8][/* make */0], processId, txId)]), oneKeyChainWallet[0]);
                              twoKeyChainWallet[0] = Venture__Wallet.apply(/* PayoutBroadcast */Block.__(26, [Curry._2(Event.Payout[/* Broadcast */8][/* make */0], processId, txId)]), twoKeyChainWallet[0]);
                              return Promise.resolve(/* () */0);
                            }));
              }));
        Jest.testPromise(/* None */0, "1 of 2 wallet", (function () {
                return Helpers.getUTXOs(WalletHelpers.getExposedAddresses(oneKeyChainWallet[0])).then((function (utxos) {
                              return Promise.resolve(Jest.Expect[/* toEqual */12](oneKeyChainWalletTotal.minus(oneKeyChainSpendAmount).minus(oneKeyChainExpectedFee), Jest.Expect[/* expect */0](List.fold_left((function (total, utxo) {
                                                        return total.plus(utxo[/* amount */3]);
                                                      }), BTC.zero, utxos))));
                            }));
              }));
        return Jest.testPromise(/* Some */[80000], "2 of 3 wallet", (function () {
                      var param = Venture__Wallet.preparePayoutTx(userA, accountIdx, /* :: */[
                            /* tuple */[
                              Helpers.faucetAddress,
                              twoKeyChainSpendAmount
                            ],
                            /* [] */0
                          ], BTC.fromSatoshis(/* int64 */[
                                /* hi */0,
                                /* lo */10
                              ]), twoKeyChainWallet[0]);
                      var tmp;
                      if (param) {
                        var $$event = param[0];
                        var data = $$event[/* data */5];
                        var payoutTx = PayoutTransaction.getSignedExn(PayoutTransaction.signPayout(ventureId, userB[/* userId */0], userB[/* masterKeyChain */4], wallet$2[/* walletInfoCollector */3][/* keyChains */3], data[/* payoutTx */1], /* Regtest */0));
                        tmp = Promise.all(/* tuple */[
                              Promise.resolve(Venture__Wallet.apply(/* PayoutProposed */Block.__(21, [$$event]), twoKeyChainWallet[0])),
                              Helpers.broadcastTransaction(PayoutTransaction.finalize(/* :: */[
                                        data[/* payoutTx */1],
                                        /* :: */[
                                          payoutTx,
                                          /* [] */0
                                        ]
                                      ], /* Regtest */0))
                            ]);
                      } else {
                        throw PayoutTransaction.NotEnoughFunds;
                      }
                      return tmp.then((function (param) {
                                    var expectedFee = BTC.fromSatoshis(/* int64 */[
                                            /* hi */0,
                                            /* lo */5810
                                          ]).plus(BTC.timesRounded(2.9 / 100, twoKeyChainSpendAmount));
                                    return Helpers.getUTXOs(WalletHelpers.getExposedAddresses(param[0])).then((function (utxos) {
                                                  return Promise.resolve(Jest.Expect[/* toEqual */12](twoKeyChainWalletTotal.minus(twoKeyChainSpendAmount).minus(expectedFee), Jest.Expect[/* expect */0](List.fold_left((function (total, utxo) {
                                                                            return total.plus(utxo[/* amount */3]);
                                                                          }), BTC.zero, utxos))));
                                                }));
                                  }));
                    }));
      }));

/*  Not a pure module */
