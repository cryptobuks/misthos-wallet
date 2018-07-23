// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Icons = require("../Icons.bs.js");
var Theme = require("../Theme.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var ViewCommon = require("../ViewCommon.bs.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var MTypography = require("./MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var PrimitiveTypes = require("../../application/PrimitiveTypes.bs.js");
var MaterialUi_Avatar = require("@jsiebern/bs-material-ui/src/MaterialUi_Avatar.bs.js");
var MaterialUi_ListItem = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItem.bs.js");
var MaterialUi_ListItemText = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItemText.bs.js");
var MaterialUi_ListItemSecondaryAction = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItemSecondaryAction.bs.js");

var component = ReasonReact.statelessComponent("Partner");

var lenght = Theme.space(6);

var avatar = Css.style(/* :: */[
      Css.backgroundImage(Css.url(Icons.asDataUrl(Icons.avatar))),
      /* :: */[
        Css.backgroundSize(/* `size */[
              -866934591,
              /* tuple */[
                Css.px(lenght),
                Css.px(lenght)
              ]
            ]),
        /* :: */[
          Css.width(Css.px(lenght)),
          /* :: */[
            Css.height(Css.px(lenght)),
            /* :: */[
              Css.fontSize(Css.px(24)),
              /* :: */[
                Css.lineHeight(1.0),
                /* :: */[
                  Css.fontWeight(600),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

function primary(ex) {
  return Css.style(/* :: */[
              Css.fontFamily(Theme.oswald),
              /* :: */[
                Css.fontSize(Css.px(16)),
                /* :: */[
                  Css.fontWeight(600),
                  /* :: */[
                    Css.unsafe("letterSpacing", "0.7px"),
                    /* :: */[
                      Css.textTransform(Css.uppercase),
                      /* :: */[
                        Css.whiteSpace(Css.nowrap),
                        /* :: */[
                          Css.overflow(Css.hidden),
                          /* :: */[
                            Css.textOverflow(Css.ellipsis),
                            /* :: */[
                              Css.color(ex ? Css.rgba(0, 0, 0, 0.2) : /* currentColor */292050538),
                              /* [] */0
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

function secondary(ex) {
  return Css.style(/* :: */[
              Css.fontFamily(Theme.sourceSansPro),
              /* :: */[
                Css.fontSize(Css.px(16)),
                /* :: */[
                  Css.fontWeight(300),
                  /* :: */[
                    Css.unsafe("letterSpacing", "0.5px"),
                    /* :: */[
                      Css.color(ex ? Css.rgba(0, 0, 0, 0.2) : Css.rgba(0, 0, 0, 0.87)),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

function secondaryAction(status) {
  if (status) {
    return Css.style(/* :: */[
                Css.paddingRight(Css.px(Theme.space(12))),
                /* [] */0
              ]);
  } else {
    return Css.style(/* :: */[
                Css.paddingRight(Css.px(Theme.space(4))),
                /* [] */0
              ]);
  }
}

var exPartnerStatus = Css.style(/* :: */[
      Css.fontSize(Css.px(12)),
      /* :: */[
        Css.color(Css.rgba(0, 0, 0, 0.87)),
        /* [] */0
      ]
    ]);

var exPartnerPrimary = Css.style(/* [] */0);

var Styles = /* module */[
  /* lenght */lenght,
  /* avatar */avatar,
  /* primary */primary,
  /* secondary */secondary,
  /* secondaryAction */secondaryAction,
  /* exPartnerStatus */exPartnerStatus,
  /* exPartnerPrimary */exPartnerPrimary
];

function make(partnerId, name, button, status, onClick, $staropt$star, _) {
  var ex = $staropt$star ? $staropt$star[0] : false;
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
              var userId = PrimitiveTypes.UserId[/* toString */0](partnerId);
              var match = name ? /* tuple */[
                  ViewCommon.text(name[0]),
                  /* Some */[ViewCommon.text(userId)]
                ] : /* tuple */[
                  ViewCommon.text(userId),
                  /* None */0
                ];
              var tmp;
              var exit = 0;
              if (button || status || ex) {
                exit = 1;
              } else {
                tmp = null;
              }
              if (exit === 1) {
                tmp = ex ? ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[exPartnerStatus], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("EX-PARTNER")])) : (
                    button ? ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItemSecondaryAction.make(/* None */0, /* None */0, /* None */0, /* array */[button[0]])) : ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItemSecondaryAction.make(/* None */0, /* None */0, /* None */0, /* array */[status[0]]))
                  );
              }
              return ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItem.make(/* Some */[onClick !== /* None */0], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* None */0, onClick, /* Some */[/* :: */[
                                /* SecondaryAction */Block.__(9, [secondaryAction(status)]),
                                /* [] */0
                              ]], /* None */0, /* array */[
                              ReasonReact.element(/* None */0, /* None */0, MaterialUi_Avatar.make(/* None */0, /* None */0, /* Some */[avatar], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text($$String.uppercase($$String.make(1, Caml_string.get(userId, 0))))])),
                              ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItemText.make(/* None */0, /* None */0, /* None */0, /* Some */[match[0]], /* None */0, match[1], /* None */0, /* Some */[/* :: */[
                                          /* Primary */Block.__(3, [primary(ex)]),
                                          /* :: */[
                                            /* Secondary */Block.__(4, [secondary(ex)]),
                                            /* [] */0
                                          ]
                                        ]], /* None */0, /* array */[])),
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

exports.text = text;
exports.extractString = extractString;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
