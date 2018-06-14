// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Theme = require("../Theme.bs.js");
var Colors = require("../Colors.bs.js");
var Router = require("../Router.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Button = require("@jsiebern/bs-material-ui/src/MaterialUi_Button.bs.js");

var component = ReasonReact.statelessComponent("MFabButton");

function button(variant) {
  return Css.style(/* :: */[
              Css.marginTop(Css.px(Theme.space(3))),
              /* :: */[
                Css.marginBottom(Css.px(Theme.space(3))),
                /* :: */[
                  Css.width(Css.px(Theme.space(19))),
                  /* :: */[
                    Css.height(Css.px(Theme.space(19))),
                    /* :: */[
                      Css.borderRadius(Css.px(Theme.space(19))),
                      /* :: */[
                        Css.fontSize(Css.px(16)),
                        /* :: */[
                          Css.unsafe("boxShadow", "none"),
                          /* :: */[
                            Css.unsafe("border", "double 4px transparent"),
                            /* :: */[
                              Css.unsafe("borderImageSlice", "1"),
                              /* :: */[
                                Css.unsafe("backgroundImage", "linear-gradient(white, white), " + (
                                      variant ? Colors.uGradientOrange : Colors.uGradientAqua
                                    )),
                                /* :: */[
                                  Css.unsafe("backgroundOrigin", "border-box"),
                                  /* :: */[
                                    Css.unsafe("backgroundClip", "content-box, border-box"),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var Styles = /* module */[/* button */button];

function make(variant, route, children) {
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
              var href = Router.Config[/* routeToUrl */1](route);
              return ReasonReact.element(/* None */0, /* None */0, MaterialUi_Button.make(/* Some */[button(variant)], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* Fab */3502759], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[(function ($$event) {
                                  $$event.preventDefault();
                                  return ReasonReact.Router[/* push */0](href);
                                })], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[children]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
