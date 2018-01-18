module Partner = {
  type t = {blockstackId: string};
};

module Prospect = {
  type t = {
    blockstackId: string,
    approvedBy: list(string)
  };
};

type t = {
  name: string,
  prospects: list(Prospect.t)
};

let make = () => {name: "", prospects: []};

let apply = (event: Event.t, state) =>
  switch event {
  | DealCreated(event) => {...state, name: event.dealName}
  | ProspectSuggested(event) => {
      ...state,
      prospects: [
        {blockstackId: event.prospectId, approvedBy: [event.supporterId]},
        ...state.prospects
      ]
    }
  | _ => state
  };

let getPartners = state => [];

let getProspects = state => state.prospects;

let dealName = state => state.name;
