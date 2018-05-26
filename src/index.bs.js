// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var EventLog = require("./application/events/EventLog.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var IncomeVenture = require("./repro/IncomeVenture.bs.js");
var ReproWalletCollector = require("./repro/ReproWalletCollector.bs.js");

function text(prim) {
  return prim;
}

var reproWalletCollector = Curry._3(EventLog.reduce, (function (res, param) {
        return ReproWalletCollector.apply(param[/* event */0], res);
      }), ReproWalletCollector.make(/* () */0), IncomeVenture.eventLog);

var match = ReproWalletCollector.nonReservedOldInputs(reproWalletCollector);

var inputs = match[1];

var unused = match[0];

function keepTx(param) {
  return param[/* txId */0] !== "514ec6088ef79a9c56b1530b6d0e1a47fc5e61ab74993861e315d1430de2c407";
}

var before = Belt_Set.eq(unused, inputs);

console.log(unused, inputs);

var afterUnused = Belt_Set.keep(unused, keepTx);

var afterInputs = Belt_Set.keep(inputs, keepTx);

console.log(unused, inputs);

function countInputs(set) {
  return Belt_Array.reduce(Belt_Set.toArray(set), 0, (function (res, param) {
                var match = param[/* txId */0] === "b0478fed46339ffd2d0d36b0355d782be269b0452f452d7532b8f6e1dfa8e06b";
                if (match) {
                  return res + 1 | 0;
                } else {
                  return res;
                }
              }));
}

var middle = Belt_Set.eq(unused, inputs);

var after = Belt_Set.eq(afterUnused, afterInputs);

console.log(before, middle, after);

console.log(countInputs(afterUnused), countInputs(afterInputs));

ReactDOMRe.renderToElementWithId("simpler change output" + (String(countInputs(afterUnused)) + " identical things"), "root");

exports.text = text;
exports.reproWalletCollector = reproWalletCollector;
exports.unused = unused;
exports.inputs = inputs;
exports.keepTx = keepTx;
exports.before = before;
exports.afterUnused = afterUnused;
exports.afterInputs = afterInputs;
exports.countInputs = countInputs;
exports.middle = middle;
exports.after = after;
/* reproWalletCollector Not a pure module */
