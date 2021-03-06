// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Colors = require("../Colors.bs.js");
var ViewCommon = require("../ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Grid = require("@jsiebern/bs-material-ui/src/MaterialUi_Grid.bs.js");
var MaterialUi_Typography = require("@jsiebern/bs-material-ui/src/MaterialUi_Typography.bs.js");
var MaterialUi_CircularProgress = require("@jsiebern/bs-material-ui/src/MaterialUi_CircularProgress.bs.js");

var component = ReasonReact.statelessComponent("Spinner");

var progress = Css.style(/* :: */[
      Css.color(Colors.misthosTeal),
      /* [] */0
    ]);

var container = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* :: */[
        Css.height(/* `percent */[
              -119887163,
              100.0
            ]),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* progress */progress,
  /* container */container
];

function make(spinnerText, $staropt$star, _children) {
  var className = $staropt$star !== undefined ? $staropt$star : "";
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
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, /* Center */980392437, container + (" " + className), undefined, true, /* Row */4102650, undefined, /* Center */980392437, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, undefined, undefined, undefined, true, /* Row */4102650, undefined, /* Center */980392437, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, undefined, container, undefined, undefined, undefined, true, undefined, /* V2 */1, /* V4 */3, undefined, undefined, undefined, undefined, /* V8 */7, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                  ReasonReact.element(undefined, undefined, MaterialUi_CircularProgress.make(progress, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[])),
                                                  ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Body1 */-904051921, undefined, undefined, /* array */[ViewCommon.text(spinnerText)]))
                                                ]))]))]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
