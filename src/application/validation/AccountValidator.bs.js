// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");

function make() {
  return /* record */[
          /* accounts : [] */0,
          /* exists */(function () {
              return false;
            })
        ];
}

function update($$event, param) {
  var accounts = param[/* accounts */0];
  var accounts$1;
  accounts$1 = $$event.tag === 15 ? /* :: */[
      $$event[0][/* data */2][/* accountIdx */0],
      accounts
    ] : accounts;
  return /* record */[
          /* accounts */accounts$1,
          /* exists */(function (accountIdx) {
              return List.mem(accountIdx, accounts$1);
            })
        ];
}

exports.make = make;
exports.update = update;
/* No side effect */
