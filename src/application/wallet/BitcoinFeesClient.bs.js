// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("./BTC.bs.js");
var Utils = require("../../utils/Utils.bs.js");
var Json_decode = require("bs-json/src/Json_decode.js");

var feesUrl = "https://bitcoinfees.earn.com/api/v1/fees/recommended";

function fetchFees() {
  return fetch(feesUrl).then((function (prim) {
                  return prim.json();
                })).then((function (res) {
                return Promise.resolve(/* record */[
                            /* fastestFee */BTC.fromSatoshisFloat(Json_decode.field("fastestFee", Utils.decodeFloat, res)),
                            /* halfHourFee */BTC.fromSatoshisFloat(Json_decode.field("halfHourFee", Utils.decodeFloat, res)),
                            /* hourFee */BTC.fromSatoshisFloat(Json_decode.field("hourFee", Utils.decodeFloat, res))
                          ]);
              }));
}

exports.feesUrl = feesUrl;
exports.fetchFees = fetchFees;
/* BTC Not a pure module */
