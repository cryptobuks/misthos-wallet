// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Layout = require("../src/view/Layout.bs.js");
var Session = require("../src/web/Session.bs.js");
var Head = require("next/head");
var PublicHome = require("../src/view/PublicHome.bs.js");
var JssProvider = require("../src/view/JssProvider.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

function make(children) {
  return ReasonReact.wrapJsForReason(Head.default, /* None */0, children);
}

var Head$1 = /* module */[/* make */make];

function $$default() {
  var children = /* array */[
    React.createElement("meta", {
          charSet: "utf-8"
        }),
    React.createElement("meta", {
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
          name: "viewport"
        }),
    React.createElement("meta", {
          content: "#000000",
          name: "theme-color"
        }),
    React.createElement("link", {
          href: "static/apple-touch-icon.png",
          rel: "apple-touch-icon",
          sizes: "180x180"
        }),
    React.createElement("link", {
          href: "static/favicon-32x32.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png"
        }),
    React.createElement("link", {
          href: "static/favicon-16x16.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png"
        }),
    React.createElement("link", {
          href: "static/manifest.json",
          rel: "manifest"
        }),
    React.createElement("meta", {
          content: "#ffffff",
          name: "msapplication-TileColor"
        }),
    React.createElement("meta", {
          content: "#ffffff",
          name: "theme-color"
        }),
    React.createElement("link", {
          href: "https://fonts.googleapis.com/css?family=Oswald:600,700|Source+Sans+Pro:300,600",
          rel: "stylesheet"
        }),
    React.createElement("noscript", {
          id: "jss-insertion-point"
        }),
    React.createElement("title", undefined, "Misthos")
  ];
  return React.createElement("div", {
              id: "root"
            }, ReasonReact.element(/* None */0, /* None */0, ReasonReact.wrapJsForReason(Head.default, /* None */0, children)), ReasonReact.element(/* None */0, /* None */0, JssProvider.make(/* array */[ReasonReact.element(/* None */0, /* None */0, Layout.make(/* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, PublicHome.make((function () {
                                            Session.signIn(/* () */0);
                                            return /* () */0;
                                          }), /* array */[]))]))])));
}

exports.Head = Head$1;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
