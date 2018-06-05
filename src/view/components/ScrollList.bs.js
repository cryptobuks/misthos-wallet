// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ViewCommon = require("../ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var ReactCustomScrollbars = require("react-custom-scrollbars");

var view = Css.style(/* :: */[
      Css.position(Css.relative),
      /* :: */[
        Css.overflow(Css.hidden),
        /* :: */[
          Css.width(/* `percent */[
                -119887163,
                100.0
              ]),
          /* :: */[
            Css.height(Css.auto),
            /* :: */[
              Css.minHeight(/* `percent */[
                    -119887163,
                    100.0
                  ]),
              /* :: */[
                Css.maxHeight(/* `percent */[
                      -119887163,
                      100.0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var flexContainer = Css.style(/* :: */[
      Css.flex(1),
      /* :: */[
        Css.minHeight(Css.px(0)),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* view */view,
  /* flexContainer */flexContainer
];

var containerStyles = Css.style(/* :: */[
      Css.height(/* `percent */[
            -119887163,
            100.0
          ]),
      /* :: */[
        Css.display(/* flex */-1010954439),
        /* :: */[
          Css.flexDirection(Css.column),
          /* [] */0
        ]
      ]
    ]);

var class_tables = [
  0,
  0,
  0
];

function make(children) {
  if (!class_tables[0]) {
    var $$class = CamlinternalOO.create_table(0);
    var env_init = function () {
      return CamlinternalOO.create_object_opt(0, $$class);
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  return ReasonReact.wrapJsForReason(ReactCustomScrollbars.default, Curry._1(class_tables[0], 0), children);
}

var CustomScrollbar = /* module */[/* make */make];

var component = ReasonReact.statelessComponent("ScrollList");

function make$1(children) {
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
              return React.createElement("div", {
                          className: flexContainer
                        }, ReasonReact.element(/* None */0, /* None */0, make(/* array */[children])));
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

exports.text = text;
exports.extractString = extractString;
exports.Styles = Styles;
exports.containerStyles = containerStyles;
exports.CustomScrollbar = CustomScrollbar;
exports.component = component;
exports.make = make$1;
/* view Not a pure module */
