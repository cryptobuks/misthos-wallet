// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var Theme = require("./Theme.bs.js");
var React = require("react");
var Colors = require("./Colors.bs.js");
var Router = require("./Router.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var Partner = require("./components/Partner.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Transaction = require("./components/Transaction.bs.js");
var WarningsText = require("./text/WarningsText.bs.js");
var WarningBanner = require("./components/WarningBanner.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var MaterialUi_List = require("@jsiebern/bs-material-ui/src/MaterialUi_List.bs.js");
var MaterialUi_Collapse = require("@jsiebern/bs-material-ui/src/MaterialUi_Collapse.bs.js");
var MaterialUi_ListItem = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItem.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");
var MaterialUi_ListItemText = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItemText.bs.js");

function statusToColor(param) {
  switch (param) {
    case 0 : 
    case 1 : 
        return Colors.success;
    case 3 : 
    case 4 : 
    case 5 : 
        return Colors.error;
    case 2 : 
    case 6 : 
    case 7 : 
        return Colors.warning;
    
  }
}

function statusToString(param) {
  switch (param) {
    case 0 : 
        return "";
    case 1 : 
        return "Accessible";
    case 2 : 
        return "At Risk";
    case 3 : 
        return "Temporarily Inaccessible";
    case 4 : 
        return "Permanently Inaccessible";
    case 5 : 
        return "Partially Unlocked";
    case 6 : 
        return "Unlocked";
    case 7 : 
        return "Old Address";
    
  }
}

function statusToLabel($staropt$star, status) {
  var className = $staropt$star ? $staropt$star[0] : "";
  var match = status === /* None */0;
  if (match) {
    return null;
  } else {
    return ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[Css.style(/* :: */[
                          Css.color(statusToColor(status)),
                          /* [] */0
                        ]) + (" " + className)], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text($$String.uppercase(statusToString(status)))]));
  }
}

function calcAddressStatus(status, balance, unlocked) {
  switch (status) {
    case 0 : 
        return /* Accessible */1;
    case 1 : 
        if (balance.gt(BTC.zero)) {
          return /* AtRisk */2;
        } else {
          return /* OldAddress */7;
        }
    case 2 : 
        return /* OldAddress */7;
    case 3 : 
        if (Belt_List.some(unlocked, (function (b) {
                  return b;
                }))) {
          return /* PartiallyUnlocked */5;
        } else {
          return /* TemporarilyInaccessible */3;
        }
    case 4 : 
        return /* PermanentlyInaccessible */4;
    
  }
}

function calcTransactionStatus(status, unlocked) {
  if (status !== 3) {
    return /* None */0;
  } else if (unlocked) {
    return /* Unlocked */6;
  } else {
    return /* TemporarilyInaccessible */3;
  }
}

var component = ReasonReact.reducerComponent("AddressesModal");

function chevron(rotate) {
  return Css.style(/* :: */[
              Css.unsafe("transition", "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"),
              /* :: */[
                Css.transform(Css.rotateZ(Css.deg(rotate ? 180 : 0))),
                /* [] */0
              ]
            ]);
}

var grid = Css.style(/* :: */[
      Css.display(Css.grid),
      /* :: */[
        Css.unsafe("gridTemplateColumns", "[begin] 1fr 1fr 1fr min-content [end]"),
        /* [] */0
      ]
    ]);

function header(warning) {
  return Css.style(/* :: */[
              Css.borderBottom(Css.px(1), /* solid */12956715, Css.hex("979797")),
              /* :: */[
                Css.padding2(Css.px(Theme.space(2)), Css.px(Theme.space(3))),
                /* :: */[
                  Css.position(Css.sticky),
                  /* :: */[
                    Css.zIndex(1),
                    /* :: */[
                      Css.top(Css.px(warning ? Theme.space(4) : 0)),
                      /* :: */[
                        Css.backgroundColor(Colors.white),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var summary = Css.style(/* :: */[
      Css.padding2(Css.px(Theme.space(2)), Css.px(Theme.space(3))),
      /* [] */0
    ]);

var details = Css.style(/* :: */[
      Css.unsafe("gridColumn", "begin / end"),
      /* :: */[
        Css.borderBottom(Css.px(1), /* solid */12956715, Css.hex("979797")),
        /* [] */0
      ]
    ]);

var detailsGrid = Css.style(/* :: */[
      Css.display(Css.grid),
      /* :: */[
        Css.gridGap(Css.px(Theme.space(3))),
        /* :: */[
          Css.unsafe("gridTemplateColumns", "[begin] 1fr 1fr [end]"),
          /* :: */[
            Css.padding4(Css.px(Theme.space(4)), Css.px(Theme.space(3)), Css.px(Theme.space(5)), Css.px(Theme.space(3))),
            /* [] */0
          ]
        ]
      ]
    ]);

var changeAddress = Css.style(/* :: */[
      Css.color(Css.rgba(0, 0, 0, 0.5)),
      /* :: */[
        Css.textTransform(Css.uppercase),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* chevron */chevron,
  /* grid */grid,
  /* header */header,
  /* summary */summary,
  /* details */details,
  /* detailsGrid */detailsGrid,
  /* changeAddress */changeAddress
];

function make(viewData, _) {
  var renderTx = function (addressStatus, txList, txTypeString) {
    return Belt_List.mapWithIndex(txList, (function (iter, tx) {
                  var match = tx[/* status */0];
                  var primary = match ? txTypeString : "unconfirmed " + txTypeString;
                  var label = statusToLabel(/* Some */[Css.style(/* :: */[
                              Css.$$float(/* right */-379319332),
                              /* [] */0
                            ])], calcTransactionStatus(addressStatus, tx[/* unlocked */1]));
                  var partial_arg = tx[/* detailsLink */5];
                  return ReasonReact.element(/* Some */[String(iter)], /* None */0, Transaction.make(/* Income */0, primary, tx[/* amount */4], tx[/* date */2], /* Some */[label], /* Some */[(function (param) {
                                      return Router.clickToRoute(partial_arg, param);
                                    })], /* array */[]));
                }));
  };
  var renderExpandedInfo = function (details) {
    var match = details[/* addressType */3];
    var txLabel = match ? "income" : "change";
    var param = details[/* addressType */3];
    return React.createElement("div", {
                className: detailsGrid
              }, React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("Custodians")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("This is a " + (String(details[/* nCoSigners */1]) + ("-of-" + (String(details[/* nCustodians */2]) + " address with the following custodians:"))))])), ReasonReact.element(/* None */0, /* None */0, MaterialUi_List.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[Belt_Array.map(Belt_Set.toArray(details[/* custodians */0]), (function (partnerId) {
                                    return ReasonReact.element(/* None */0, /* None */0, Partner.make(partnerId, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[!Curry._1(details[/* isPartner */7], partnerId)], /* array */[]));
                                  }))]))), React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("OVERVIEW")])), ReasonReact.element(/* None */0, /* None */0, MaterialUi_List.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[Belt_List.toArray(Belt_List.concat(Belt_List.concat(renderTx(details[/* addressStatus */4], details[/* unspentIncome */5], txLabel), renderTx(details[/* addressStatus */4], details[/* spentIncome */6], txLabel + " - transferred")), param ? /* :: */[
                                        ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItem.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[true], /* Some */[true], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* :: */[
                                                    /* Divider */Block.__(6, [Transaction.Styles[/* divider */1]]),
                                                    /* [] */0
                                                  ]], /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItemText.make(/* None */0, /* None */0, /* None */0, /* Some */[ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text($$String.uppercase("address exposed by " + PrimitiveTypes.UserId[/* toString */0](param[0])))]))], /* None */0, /* None */0, /* None */0, /* Some */[/* :: */[
                                                              /* Root */Block.__(0, [Transaction.Styles[/* root */0]]),
                                                              /* [] */0
                                                            ]], /* None */0, /* array */[]))])),
                                        /* [] */0
                                      ] : /* [] */0))]))));
  };
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
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var infos = Belt_List.toArray(Belt_List.keepMapU(viewData[/* infos */0], (function (info) {
                          if (info[/* addressType */0] !== /* Change */0 || info[/* balance */5].gt(BTC.zero)) {
                            var details$1 = Curry._1(viewData[/* addressDetails */3], info);
                            var expand = Caml_obj.caml_equal(state[/* expandedAddress */0], /* Some */[info]);
                            var match = info[/* addressType */0];
                            return /* Some */[/* array */[
                                      ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[summary], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[match ? ViewCommon.text(info[/* address */2]) : React.createElement("span", {
                                                        className: changeAddress
                                                      }, ViewCommon.text("(hidden change address)"))])),
                                      ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[summary], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(BTC.format(info[/* balance */5]) + " BTC")])),
                                      statusToLabel(/* Some */[summary], calcAddressStatus(info[/* addressStatus */4], info[/* balance */5], Belt_List.map(details$1[/* unspentIncome */5], (function (i) {
                                                      return i[/* unlocked */1];
                                                    })))),
                                      ReasonReact.element(/* None */0, /* None */0, MaterialUi_IconButton.make(/* Some */[chevron(expand)], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[(function () {
                                                    return Curry._1(send, /* ToggleAddress */[info]);
                                                  })], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[Icons.chevronDown])),
                                      ReasonReact.element(/* None */0, /* None */0, MaterialUi_Collapse.make(/* Some */[details], /* None */0, /* None */0, /* Some */[expand], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[renderExpandedInfo(details$1)]))
                                    ]];
                          } else {
                            return /* None */0;
                          }
                        })));
              var match = viewData[/* atRiskWarning */2];
              var warning = match ? ReasonReact.element(/* Some */["warning"], /* None */0, WarningBanner.make(WarningsText.atRiskFunds(viewData[/* ventureId */1]))) : null;
              var className = header(viewData[/* atRiskWarning */2]);
              return ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("Wallet Address History")], /* None */0, /* None */0, /* None */0, /* Some */[React.createElement("div", {
                                    className: ScrollList.containerStyles
                                  }, ReasonReact.element(/* None */0, /* None */0, ScrollList.make(/* array */[
                                            warning,
                                            React.createElement("div", {
                                                  className: grid
                                                }, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[className], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("WALLET ADDRESS")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[className], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("ADDRESS BALANCE")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[className], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("STATUS")])), React.createElement("span", {
                                                      className: className
                                                    }), infos)
                                          ])))], /* None */0, /* None */0, /* None */0, /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[/* expandedAddress : None */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, param) {
              var address = action[0];
              var match = Caml_obj.caml_equal(param[/* expandedAddress */0], /* Some */[address]);
              return /* Update */Block.__(0, [/* record */[/* expandedAddress */match ? /* None */0 : /* Some */[address]]]);
            }),
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
exports.statusToColor = statusToColor;
exports.statusToString = statusToString;
exports.statusToLabel = statusToLabel;
exports.calcAddressStatus = calcAddressStatus;
exports.calcTransactionStatus = calcTransactionStatus;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
