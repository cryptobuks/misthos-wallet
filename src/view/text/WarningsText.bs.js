// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var Router = require("../Router.bs.js");
var ViewCommon = require("../ViewCommon.bs.js");

var testnet = /* array */[
  ViewCommon.text("Warning! This is the testnet version of Misthos.  Get Testnet coins "),
  React.createElement("a", {
        href: "https://testnet.coinfaucet.eu/en/",
        target: "_blank"
      }, ViewCommon.text("here")),
  ViewCommon.text(" and get notified of our Mainnet release "),
  React.createElement("a", {
        href: "https://misthos.us17.list-manage.com/subscribe/post?u=1696fffacc1f8609ca14818f3&id=e0d336cc53",
        target: "_blank"
      }, ViewCommon.text("here")),
  ViewCommon.text(".")
];

function atRiskFunds(ventureId) {
  var route = /* Venture */Block.__(0, [
      ventureId,
      /* CreatePayout */3
    ]);
  return /* array */[
          ViewCommon.text("Some of your addresses contain at-risk funds. Please "),
          React.createElement("a", {
                href: Router.Config[/* routeToUrl */1](route),
                onClick: (function (param) {
                    return Router.clickToRoute(route, param);
                  })
              }, ViewCommon.text("Make a payout")),
          ViewCommon.text(" To avoid your funds becoming inaccessible.")
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

var partnerRemovalRisk = "ALERT: This user is currently critical to access certain funds. By removing this user, you accept that these funds will become temporarily or permanently inaccessible. Are you sure you want to endorse this removal?";

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.testnet = testnet;
exports.atRiskFunds = atRiskFunds;
exports.partnerRemovalRisk = partnerRemovalRisk;
/* testnet Not a pure module */
