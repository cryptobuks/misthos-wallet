// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Colors = require("../Colors.bs.js");
var MaterialUi = require("@jsiebern/bs-material-ui/src/MaterialUi.bs.js");
var ViewCommon = require("../ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("TitleBar");

function bar(titlesCount, gap) {
  return Css.style(/* :: */[
              Css.display(Css.grid),
              /* :: */[
                Css.unsafe("gridGap", gap ? "0 20px" : "0"),
                /* :: */[
                  Css.unsafe("gridTemplateAreas", titlesCount !== 1 ? "\". title1 . title2 .\" \"line line line line line\"" : "\". title1 title1 title1 .\" \"line line line line line\""),
                  /* :: */[
                    Css.unsafe("gridTemplateColumns", "minmax(0, 1fr) minmax(min-content, 4fr) 1fr minmax(min-content, 4fr) minmax(0, 1fr)"),
                    /* :: */[
                      Css.unsafe("gridTemplateRows", "auto 4px"),
                      /* :: */[
                        Css.width(/* `percent */[
                              -119887163,
                              100.0
                            ]),
                        /* :: */[
                          Css.backgroundColor(Colors.black),
                          /* :: */[
                            Css.display(Css.grid),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var title = Css.style(/* :: */[
      Css.padding2(Css.px(7), Css.px(0)),
      /* [] */0
    ]);

var gradient = Css.style(/* :: */[
      Css.height(Css.px(4)),
      /* :: */[
        Css.backgroundImage(Colors.gradient),
        /* [] */0
      ]
    ]);

function area(area$1) {
  return Css.style(/* :: */[
              Css.unsafe("gridArea", area$1),
              /* [] */0
            ]);
}

var Styles = /* module */[
  /* bar */bar,
  /* title */title,
  /* gradient */gradient,
  /* area */area
];

function make($staropt$star, $staropt$star$1, $staropt$star$2, _) {
  var className = $staropt$star ? $staropt$star[0] : "";
  var titles = $staropt$star$1 ? $staropt$star$1[0] : /* [] */0;
  var gap = $staropt$star$2 ? $staropt$star$2[0] : true;
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
                          className: bar(List.length(titles), gap) + (" " + className)
                        }, $$Array.of_list(List.mapi((function (i, title$1) {
                                    var si = String(i + 1 | 0);
                                    return React.createElement("div", {
                                                key: si,
                                                className: area("title" + si) + (" " + title)
                                              }, ReasonReact.element(/* None */0, /* None */0, MaterialUi.Typography[/* make */7](/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* Headline */579538228], /* None */0, /* array */[ViewCommon.text(title$1)])));
                                  }), titles)), React.createElement("div", {
                              key: "line",
                              className: gradient + (" " + area("line"))
                            }));
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
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
