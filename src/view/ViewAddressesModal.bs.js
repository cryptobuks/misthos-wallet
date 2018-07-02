// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ViewCommon = require("./ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

function statusToString(param) {
  switch (param) {
    case 0 : 
        return "Accessible";
    case 1 : 
        return "AtRisk";
    case 2 : 
        return "OutdatedCustodians";
    case 3 : 
        return "TemporarilyInaccessible";
    case 4 : 
        return "Inaccessible";
    
  }
}

var component = ReasonReact.statelessComponent("AddressesModal");

function renderExpandedInfo() {
  return React.createElement("div", undefined, ViewCommon.text("expanded"));
}

function make(viewData, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var infos = Belt_List.toArray(Belt_List.keepMapU(viewData[/* infos */0], (function (info) {
                          if (info[/* addressType */0] === /* Income */0 || info[/* balance */5].gt(BTC.zero)) {
                            var expandedInfo = Curry._1(viewData[/* addressDetails */1], info);
                            return /* Some */[React.createElement("li", undefined, React.createElement("div", undefined, ViewCommon.text(info[/* address */2] + (" " + (BTC.format(info[/* balance */5]) + (" " + statusToString(info[/* addressStatus */4])))))), renderExpandedInfo(expandedInfo))];
                          } else {
                            return /* None */0;
                          }
                        })));
              return React.createElement("div", undefined, React.createElement("ul", undefined, infos));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ViewData = 0;

exports.text = text;
exports.extractString = extractString;
exports.ViewData = ViewData;
exports.statusToString = statusToString;
exports.component = component;
exports.renderExpandedInfo = renderExpandedInfo;
exports.make = make;
/* component Not a pure module */
