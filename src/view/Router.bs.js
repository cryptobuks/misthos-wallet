// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var ReRoute = require("reason-reroute/src/ReRoute.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");

function routeFromUrl(url) {
  var match = url[/* path */0];
  if (match) {
    switch (match[0]) {
      case "typographystack" : 
          if (match[1]) {
            return /* Home */0;
          } else {
            return /* TypographyStack */2;
          }
      case "ventures" : 
          var match$1 = match[1];
          if (match$1) {
            var id = match$1[0];
            var exit = 0;
            if (id === "new" && !match$1[1]) {
              return /* CreateVenture */1;
            } else {
              exit = 1;
            }
            if (exit === 1) {
              var match$2 = match$1[1];
              if (match$2) {
                if (match$2[0] === "joinvia") {
                  var match$3 = match$2[1];
                  if (match$3 && !match$3[1]) {
                    return /* JoinVenture */Block.__(1, [
                              PrimitiveTypes.VentureId[/* fromString */1](id),
                              PrimitiveTypes.UserId[/* fromString */1](match$3[0])
                            ]);
                  } else {
                    return /* Home */0;
                  }
                } else {
                  return /* Home */0;
                }
              } else {
                return /* Venture */Block.__(0, [PrimitiveTypes.VentureId[/* fromString */1](id)]);
              }
            }
            
          } else {
            return /* Home */0;
          }
          break;
      default:
        return /* Home */0;
    }
  } else {
    return /* Home */0;
  }
}

function routeToUrl(route) {
  if (typeof route === "number") {
    switch (route) {
      case 0 : 
          return "/";
      case 1 : 
          return "/ventures/new";
      case 2 : 
          return "/typographystack";
      
    }
  } else if (route.tag) {
    return "/ventures/" + (PrimitiveTypes.VentureId[/* toString */0](route[0]) + ("/joinvia/" + PrimitiveTypes.UserId[/* toString */0](route[1])));
  } else {
    return "/ventures/" + PrimitiveTypes.VentureId[/* toString */0](route[0]);
  }
}

var Config = /* module */[
  /* routeFromUrl */routeFromUrl,
  /* routeToUrl */routeToUrl
];

var include = ReRoute.CreateRouter(Config);

var Container = include[0];

var Link = include[1];

exports.Config = Config;
exports.Container = Container;
exports.Link = Link;
/* include Not a pure module */
