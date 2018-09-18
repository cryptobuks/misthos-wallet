// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var Theme = require("../Theme.bs.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Button = require("@jsiebern/bs-material-ui/src/MaterialUi_Button.bs.js");

var component = ReasonReact.statelessComponent("MButton");

function button(fullWidth, variant, gutterTop, gutterBottom) {
  var baseRules_000 = Css.width(fullWidth ? /* `percent */[
          -119887163,
          100.0
        ] : Css.auto);
  var baseRules_001 = /* :: */[
    Css.marginTop(Css.px(Theme.space(gutterTop ? 5 : 0))),
    /* :: */[
      Css.marginBottom(Css.px(Theme.space(gutterBottom ? 5 : 0))),
      /* [] */0
    ]
  ];
  var baseRules = /* :: */[
    baseRules_000,
    baseRules_001
  ];
  var variantRules = variant ? /* :: */[
      Css.borderRadius(Css.px(25)),
      /* :: */[
        Css.border(Css.px(2), /* solid */12956715, Css.black),
        /* :: */[
          Css.paddingLeft(Css.px(25)),
          /* :: */[
            Css.paddingRight(Css.px(25)),
            /* :: */[
              Css.minHeight(Css.px(45)),
              /* :: */[
                Css.maxHeight(Css.px(45)),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ] : /* :: */[
      Css.textDecoration(Css.underline),
      /* :: */[
        Css.hover(/* :: */[
              Css.textDecoration(Css.underline),
              /* [] */0
            ]),
        /* :: */[
          Css.paddingLeft(Css.px(Theme.space(1))),
          /* :: */[
            Css.paddingRight(Css.px(Theme.space(1))),
            /* :: */[
              Css.unsafe("minWidth", "min-content"),
              /* [] */0
            ]
          ]
        ]
      ]
    ];
  return Css.style(List.flatten(/* :: */[
                  baseRules,
                  /* :: */[
                    variantRules,
                    /* [] */0
                  ]
                ]));
}

var Styles = /* module */[/* button */button];

function make(color, onClick, size, $staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, $staropt$star$4, href, $staropt$star$5, $staropt$star$6, children) {
  var fullWidth = $staropt$star !== undefined ? $staropt$star : false;
  var variant = $staropt$star$1 !== undefined ? $staropt$star$1 : /* Outlined */1;
  var className = $staropt$star$2 !== undefined ? $staropt$star$2 : "";
  var gutterTop = $staropt$star$3 !== undefined ? $staropt$star$3 : true;
  var gutterBottom = $staropt$star$4 !== undefined ? $staropt$star$4 : false;
  var targetBlank = $staropt$star$5 !== undefined ? $staropt$star$5 : false;
  var submitBtn = $staropt$star$6 !== undefined ? $staropt$star$6 : false;
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
              var callback = function (props) {
                return React.cloneElement(React.createElement("a", {
                                target: "_blank"
                              }), props);
              };
              var component = targetBlank ? /* `Callback */[
                  -659008027,
                  callback
                ] : undefined;
              var button$1 = ReasonReact.element(undefined, undefined, MaterialUi_Button.make(button(fullWidth, variant, gutterTop, gutterBottom) + (" " + className), color, component, undefined, undefined, undefined, undefined, undefined, href, undefined, size, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, onClick, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, children));
              if (submitBtn) {
                return React.cloneElement(button$1, {
                            type: "submit"
                          });
              } else {
                return button$1;
              }
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
