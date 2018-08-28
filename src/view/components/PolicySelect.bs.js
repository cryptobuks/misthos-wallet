// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Policy = require("../../application/Policy.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ViewCommon = require("../ViewCommon.bs.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Grid = require("@jsiebern/bs-material-ui/src/MaterialUi_Grid.bs.js");
var MaterialUi_Input = require("@jsiebern/bs-material-ui/src/MaterialUi_Input.bs.js");
var MaterialUi_Select = require("@jsiebern/bs-material-ui/src/MaterialUi_Select.bs.js");
var MaterialUi_MenuItem = require("@jsiebern/bs-material-ui/src/MaterialUi_MenuItem.bs.js");
var MaterialUi_InputLabel = require("@jsiebern/bs-material-ui/src/MaterialUi_InputLabel.bs.js");
var MaterialUi_FormControl = require("@jsiebern/bs-material-ui/src/MaterialUi_FormControl.bs.js");

var component = ReasonReact.statelessComponent("PolicySelect");

function policyTypeToString(param) {
  if (typeof param === "number") {
    if (param === 0) {
      return "Unanimous";
    } else {
      return "Unanimous minus 1";
    }
  } else if (param.tag) {
    return "At least";
  } else {
    return "Percentage";
  }
}

function stringToPolicy(param) {
  switch (param) {
    case "At least" : 
        return Policy.atLeast(1);
    case "Percentage" : 
        return Policy.percentage(50);
    case "Unanimous" : 
        return Policy.unanimous;
    case "Unanimous minus 1" : 
        return Policy.unanimousMinusOne;
    default:
      return Policy.unanimous;
  }
}

var policyOptions = /* array */[
  Policy.atLeast(1),
  Policy.percentage(50),
  Policy.unanimousMinusOne,
  Policy.unanimous
];

function updatePolicyWithN(n, policy) {
  if (typeof policy === "number") {
    return policy;
  } else if (policy.tag) {
    var match = n < 0;
    return Policy.atLeast(match ? 1 : n);
  } else {
    var match$1 = n < 0;
    var tmp;
    if (match$1) {
      tmp = 0;
    } else {
      var match$2 = n > 100;
      tmp = match$2 ? 100 : n;
    }
    return Policy.percentage(tmp);
  }
}

function make(value, onChange, _) {
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
              var policyMenuItems = Belt_Array.mapU(policyOptions, (function (p) {
                      return ReasonReact.element(undefined, undefined, MaterialUi_MenuItem.make(undefined, undefined, undefined, undefined, /* `String */[
                                      -976970511,
                                      policyTypeToString(p)
                                    ], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(policyTypeToString(p))]));
                    }));
              var tmp;
              tmp = typeof value === "number" ? null : (
                  value.tag ? ReasonReact.element(undefined, undefined, MaterialUi_FormControl.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                              ReasonReact.element(undefined, undefined, MaterialUi_InputLabel.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["N ="])),
                              ReasonReact.element(undefined, undefined, MaterialUi_Input.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* `Int */[
                                        3654863,
                                        value[0][/* n */0]
                                      ], undefined, undefined, /* array */[]))
                            ])) : ReasonReact.element(undefined, undefined, MaterialUi_FormControl.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                              ReasonReact.element(undefined, undefined, MaterialUi_InputLabel.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["N ="])),
                              ReasonReact.element(undefined, undefined, MaterialUi_Input.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (function (e) {
                                          return Curry._1(onChange, /* Percentage */Block.__(0, [/* record */[/* percentage */Caml_format.caml_int_of_string(ViewCommon.extractString(e))]]));
                                        }), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* `Int */[
                                        3654863,
                                        value[0][/* percentage */0]
                                      ], undefined, undefined, /* array */[]))
                            ]))
                );
              return ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                              ReasonReact.element(undefined, undefined, MaterialUi_Select.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, (function (e, _) {
                                          return Curry._1(onChange, stringToPolicy(ViewCommon.extractString(e)));
                                        }), undefined, undefined, undefined, undefined, undefined, /* `String */[
                                        -976970511,
                                        policyTypeToString(value)
                                      ], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[policyMenuItems])),
                              tmp
                            ]));
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

var ignoreEvent = ViewCommon.ignoreEvent;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.component = component;
exports.policyTypeToString = policyTypeToString;
exports.stringToPolicy = stringToPolicy;
exports.policyOptions = policyOptions;
exports.updatePolicyWithN = updatePolicyWithN;
exports.make = make;
/* component Not a pure module */
