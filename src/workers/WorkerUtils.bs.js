// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Json = require("bs-json/src/Json.js");
var Curry = require("bs-platform/lib/js/curry.js");
var EventLog = require("../application/events/EventLog.bs.js");
var Blockstack = require("blockstack");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var CouldNotLoadVenture = Caml_exceptions.create("WorkerUtils.CouldNotLoadVenture");

function loadVenture(ventureId) {
  return Blockstack.getFile(PrimitiveTypes.VentureId[/* toString */0](ventureId) + "/log.json").then((function (nullLog) {
                if (nullLog == null) {
                  throw CouldNotLoadVenture;
                } else {
                  return Promise.resolve(Curry._1(EventLog.decode, Json.parseOrRaise(nullLog)));
                }
              }));
}

function logMessage(label, msg) {
  console.log(label + (" - " + msg));
  return /* () */0;
}

function logError(label, error) {
  console.error(label + " - Encountered an unhandled exception");
  console.error(error);
  return /* () */0;
}

function catchAndLogError(label, promise) {
  promise.catch((function (err) {
          logError(label, err);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

exports.CouldNotLoadVenture = CouldNotLoadVenture;
exports.loadVenture = loadVenture;
exports.logMessage = logMessage;
exports.logError = logError;
exports.catchAndLogError = catchAndLogError;
/* EventLog Not a pure module */
