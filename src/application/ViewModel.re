open PrimitiveTypes;


type partner = {
  userId,
};

type prospect = {
  processId,
  userId,
  endorsedBy: list(userId)
};

type t = {
  name: string,
  partners: list(partner),
  prospects: list(prospect),
  metaPolicy: Policy.t,
  partnerPolicy: Policy.t,
};

let make = () => {
  name: "",
  partners: [],
  prospects: [],
  metaPolicy: Policy.absolute,
  partnerPolicy: Policy.absolute,
};

let apply = (event: Event.t, state) =>
  switch event {
  | VentureCreated({ventureName, metaPolicy}) => {
      ...state,
      name: ventureName,
      metaPolicy,
      partnerPolicy: metaPolicy,
    }
  | PartnerEndorsed({processId, supporterId}) => {
      ...state,
      prospects:
        state.prospects
        |> List.map((p: prospect) =>
             ProcessId.eq(p.processId, processId) ?
               {...p, endorsedBy: [supporterId, ...p.endorsedBy]} : p
           )
    }
  | PartnerProposed({processId, supporterId, data}) => {
      ...state,
      prospects: [
        {processId, userId: data.id, endorsedBy: [supporterId]},
        ...state.prospects
      ]
    }
  | PartnerAccepted({data}) => {
      ...state,
      partners: [{userId: data.id, }, ...state.partners],
      prospects:
        state.prospects |> List.filter(p => UserId.neq(p.userId, data.id))
    }
  | AccountCreationProposed(_)
  | AccountCreationEndorsed(_)
  | AccountCreationAccepted(_) => state
  | CustodianProposed(_)
  | CustodianEndorsed(_)
  | CustodianAccepted(_) => state
  | CustodianKeyChainUpdated(_) => state
  };

let getPartners = state => state.partners;

let getProspects = state => state.prospects;

let ventureName = state => state.name;
