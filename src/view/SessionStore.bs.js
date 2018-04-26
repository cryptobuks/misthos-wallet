// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Session = require("../application/Session.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("SessionStore");

function make(children) {
  var newrecord = component.slice();
  newrecord[/* didMount */4] = (function () {
      return /* SideEffects */Block.__(2, [(function (param) {
                    var send = param[/* send */4];
                    Session.getCurrentSession(/* () */0).then((function (session) {
                            return Promise.resolve(Curry._1(send, /* UpdateSession */[session]));
                          }));
                    return /* () */0;
                  })]);
    });
  newrecord[/* render */9] = (function (param) {
      return Curry._2(children, param[/* state */2][/* session */0], param[/* send */4]);
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[/* session : Unknown */0];
    });
  newrecord[/* reducer */12] = (function (action, _) {
      if (typeof action === "number") {
        if (action !== 0) {
          return /* Update */Block.__(0, [/* record */[/* session */Session.signOut(/* () */0)]]);
        } else {
          return /* Update */Block.__(0, [/* record */[/* session */Session.signIn(/* () */0)]]);
        }
      } else {
        return /* Update */Block.__(0, [/* record */[/* session */action[0]]]);
      }
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
