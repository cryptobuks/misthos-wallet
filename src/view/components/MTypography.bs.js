// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Theme = require("../Theme.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Typography = require("@jsiebern/bs-material-ui/src/MaterialUi_Typography.bs.js");

var statelessComponent = ReasonReact.statelessComponent("MTypography");

function margin(top) {
  return Css.style(/* :: */[
              Css.marginTop(Css.px(Theme.space(top))),
              /* [] */0
            ]);
}

var Styles = /* module */[/* margin */margin];

function make(variant, $staropt$star, $staropt$star$1, $staropt$star$2, component, color, children) {
  var className = $staropt$star !== undefined ? $staropt$star : "";
  var gutterBottom = $staropt$star$1 !== undefined ? $staropt$star$1 : false;
  var gutterTop = $staropt$star$2 !== undefined ? $staropt$star$2 : false;
  return /* record */[
          /* debugName */statelessComponent[/* debugName */0],
          /* reactClassInternal */statelessComponent[/* reactClassInternal */1],
          /* handedOffState */statelessComponent[/* handedOffState */2],
          /* willReceiveProps */statelessComponent[/* willReceiveProps */3],
          /* didMount */statelessComponent[/* didMount */4],
          /* didUpdate */statelessComponent[/* didUpdate */5],
          /* willUnmount */statelessComponent[/* willUnmount */6],
          /* willUpdate */statelessComponent[/* willUpdate */7],
          /* shouldUpdate */statelessComponent[/* shouldUpdate */8],
          /* render */(function () {
              var style;
              var exit = 0;
              if (variant !== -904051920 && variant !== 579538228 && variant !== 594052472) {
                style = margin(0);
              } else {
                exit = 1;
              }
              if (exit === 1) {
                style = gutterTop ? margin(4) : margin(0);
              }
              return ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, style + (" " + className), color, component, gutterBottom, undefined, undefined, undefined, variant, undefined, undefined, children));
            }),
          /* initialState */statelessComponent[/* initialState */10],
          /* retainedProps */statelessComponent[/* retainedProps */11],
          /* reducer */statelessComponent[/* reducer */12],
          /* jsElementWrapped */statelessComponent[/* jsElementWrapped */13]
        ];
}

exports.statelessComponent = statelessComponent;
exports.Styles = Styles;
exports.make = make;
/* statelessComponent Not a pure module */
