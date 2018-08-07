// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var Grid = require("./components/Grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var MInput = require("./components/MInput.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var MButton = require("./components/MButton.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var VentureInfoBox = require("./components/VentureInfoBox.bs.js");
var AccountSettings = require("../application/wallet/AccountSettings.bs.js");
var CommandExecutor = require("./components/CommandExecutor.bs.js");
var ContactUsShoutOut = require("./components/ContactUsShoutOut.bs.js");

var component = ReasonReact.reducerComponent("VentureCreate");

function make(onCreateVenture, cmdStatus, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              return /* record */[
                      /* newVenture */param[/* state */1][/* newVenture */0],
                      /* cmdStatus */cmdStatus
                    ];
            }),
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var onSubmit = function (param) {
                return ViewCommon.ignoreEvent((function () {
                              return Curry._1(send, /* CreateVenture */0);
                            }), param);
              };
              var onClick = function (param) {
                return ViewCommon.ignoreEvent((function () {
                              return Curry._1(send, /* CreateVenture */0);
                            }), param);
              };
              return ReasonReact.element(undefined, undefined, Grid.make(Js_primitive.some(ViewCommon.text("Create a Venture")), undefined, undefined, undefined, Js_primitive.some(React.createElement("form", {
                                      onSubmit: onSubmit
                                    }, ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("\n                 Set up a new Venture with yourself as the initial Partner.\n                 You can add and remove Partners once the Venture is created.\n                 But first, let’s start with a name.\n                ")])), ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, undefined, true, undefined, undefined, /* array */[ViewCommon.text("Venture Name")])), ReasonReact.element(undefined, undefined, MInput.make("Enter a Venture Name", /* `String */[
                                              -976970511,
                                              param[/* state */1][/* newVenture */0]
                                            ], (function (e) {
                                                return Curry._1(send, /* ChangeNewVenture */[ViewCommon.extractString(e)]);
                                              }), true, true, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[])), ReasonReact.element(undefined, undefined, MButton.make(undefined, onClick, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, true, /* array */[ViewCommon.text("create venture")])), ReasonReact.element(undefined, undefined, ContactUsShoutOut.make(/* array */[])), ReasonReact.element(undefined, undefined, CommandExecutor.Status[/* make */2](cmdStatus, /* CreateVenture */0, /* array */[])))), Js_primitive.some(ReasonReact.element(undefined, undefined, VentureInfoBox.make(/* array */[]))), undefined, undefined, /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* newVenture */"",
                      /* cmdStatus */cmdStatus
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              var match = state[/* cmdStatus */1];
              var exit = 0;
              if (typeof match === "number" || match.tag) {
                exit = 1;
              } else {
                return /* NoUpdate */0;
              }
              if (exit === 1) {
                if (action) {
                  return /* Update */Block.__(0, [/* record */[
                              /* newVenture */action[0],
                              /* cmdStatus */state[/* cmdStatus */1]
                            ]]);
                } else {
                  var name = $$String.trim(state[/* newVenture */0]);
                  if (name === "") {
                    return /* NoUpdate */0;
                  } else {
                    Curry._2(onCreateVenture, name, AccountSettings.$$default);
                    return /* NoUpdate */0;
                  }
                }
              }
              
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.component = component;
exports.make = make;
/* component Not a pure module */
