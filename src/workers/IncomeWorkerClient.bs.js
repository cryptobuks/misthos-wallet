// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var WebWorker = require("../ffi/WebWorker.bs.js");
var IncomeWorkerMessage = require("./IncomeWorkerMessage.bs.js");
var Income_workerBsJs = require("./Income_worker.bs.js");

var Config = /* module */[
  /* msgType */IncomeWorkerMessage.msgType,
  /* decodeTransactions */IncomeWorkerMessage.decodeTransactions
];

var include = WebWorker.MakeClient([(function () {
          return new Income_workerBsJs();
        })]);

var make = include[0];

exports.Config = Config;
exports.make = make;
/* include Not a pure module */