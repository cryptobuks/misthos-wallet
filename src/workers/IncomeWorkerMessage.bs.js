// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var List = require("bs-platform/lib/js/list.js");

function msgType(param) {
  if (param) {
    return "MonitorAddresses";
  } else {
    return "Wait";
  }
}

function decodeTransactions(transactions) {
  return List.map((function (tx) {
                return /* record */[
                        /* txId */tx[/* txId */0],
                        /* outputs */List.map((function (o) {
                                return /* record */[
                                        /* address */o[/* address */0],
                                        /* amount */BTC.decode(o[/* amount */1])
                                      ];
                              }), tx[/* outputs */1])
                      ];
              }), transactions);
}

exports.msgType = msgType;
exports.decodeTransactions = decodeTransactions;
/* BTC Not a pure module */