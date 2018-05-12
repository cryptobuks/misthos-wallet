// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function make() {
  return /* record */[
          /* identified : [] */0,
          /* activations : [] */0,
          /* exists */(function (_, _$1) {
              return false;
            }),
          /* inOrder */(function (_, _$1, _$2) {
              return false;
            })
        ];
}

function getOrEmpty(item, theList) {
  try {
    return List.assoc(item, theList);
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return /* [] */0;
    } else {
      throw exn;
    }
  }
}

function update($$event, param) {
  var activations = param[/* activations */1];
  var identified = param[/* identified */0];
  var match;
  switch ($$event.tag | 0) {
    case 12 : 
        match = /* tuple */[
          /* :: */[
            /* tuple */[
              $$event[0][/* data */2][/* accountIdx */0],
              /* [] */0
            ],
            identified
          ],
          activations
        ];
        break;
    case 30 : 
        var match$1 = $$event[0][/* keyChain */0];
        var accountIdx = match$1[/* accountIdx */0];
        match = /* tuple */[
          /* :: */[
            /* tuple */[
              accountIdx,
              /* :: */[
                match$1[/* identifier */1],
                List.assoc(accountIdx, identified)
              ]
            ],
            List.remove_assoc(accountIdx, identified)
          ],
          activations
        ];
        break;
    case 31 : 
        var match$2 = $$event[0];
        var identifier = match$2[/* identifier */2];
        var custodianId = match$2[/* custodianId */1];
        match = /* tuple */[
          identified,
          /* :: */[
            /* tuple */[
              custodianId,
              /* :: */[
                /* tuple */[
                  identifier,
                  /* :: */[
                    match$2[/* sequence */3],
                    getOrEmpty(identifier, getOrEmpty(custodianId, activations))
                  ]
                ],
                /* [] */0
              ]
            ],
            /* [] */0
          ]
        ];
        break;
    default:
      match = /* tuple */[
        identified,
        activations
      ];
  }
  var activations$1 = match[1];
  var identified$1 = match[0];
  return /* record */[
          /* identified */identified$1,
          /* activations */activations$1,
          /* exists */(function (accountIdx, identifier) {
              return List.mem(identifier, List.assoc(accountIdx, identified$1));
            }),
          /* inOrder */(function (custodianId, identifier, sequence) {
              return List.length(getOrEmpty(identifier, getOrEmpty(custodianId, activations$1))) === sequence;
            })
        ];
}

exports.make = make;
exports.getOrEmpty = getOrEmpty;
exports.update = update;
/* No side effect */