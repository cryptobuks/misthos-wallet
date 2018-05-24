// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");

function testWatcherHasCompleted(watcher) {
  return Jest.test("the watcher has completed", (function () {
                return Jest.Expect[/* toEqual */12](true, Jest.Expect[/* expect */0](Caml_oo_curry.js2(111581468, 1, watcher, /* () */0)));
              }));
}

function testWatcherHasNotCompleted(watcher) {
  return Jest.test("the watcher has not completed", (function () {
                return Jest.Expect[/* toEqual */12](false, Jest.Expect[/* expect */0](Caml_oo_curry.js2(111581468, 2, watcher, /* () */0)));
              }));
}

function testWatcherHasNoEventPending(watcher) {
  testWatcherHasNotCompleted(watcher);
  return Jest.test("and has no event pending", (function () {
                return Jest.Expect[/* toEqual */12](true, Jest.Expect[/* expect */0](Js_option.isNone(Caml_oo_curry.js2(761988163, 3, watcher, /* () */0))));
              }));
}

function testWatcherHasEventPending(eventName, watcher, expectedIssuer, eventTest) {
  testWatcherHasNotCompleted(watcher);
  return Jest.testPromise(/* None */0, "and has " + (eventName + " pending"), (function () {
                return Js_option.getExn(Caml_oo_curry.js2(761988163, 4, watcher, /* () */0)).then((function (param) {
                              return Promise.resolve(Jest.Expect[/* toEqual */12](/* tuple */[
                                              expectedIssuer,
                                              true
                                            ], Jest.Expect[/* expect */0](/* tuple */[
                                                  param[0],
                                                  Curry._1(eventTest, param[1])
                                                ])));
                            }));
              }));
}

var G = 0;

var E = 0;

var L = 0;

var F = 0;

exports.G = G;
exports.E = E;
exports.L = L;
exports.F = F;
exports.testWatcherHasCompleted = testWatcherHasCompleted;
exports.testWatcherHasNotCompleted = testWatcherHasNotCompleted;
exports.testWatcherHasNoEventPending = testWatcherHasNoEventPending;
exports.testWatcherHasEventPending = testWatcherHasEventPending;
/* Jest Not a pure module */
