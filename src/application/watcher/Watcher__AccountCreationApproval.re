open Event;

open PrimitiveTypes;

type state = {
  eligable: list(userId),
  endorsements: list(userId),
  policy: Policy.t,
  systemIssuer: Bitcoin.ECPair.t,
};

let make = (proposal: AccountCreation.Proposed.t, log) => {
  let process = {
    val state =
      ref({
        eligable: [],
        endorsements: [proposal.supporterId],
        policy: proposal.policy,
        systemIssuer: Bitcoin.ECPair.makeRandom(),
      });
    val completed = ref(false);
    val result = ref(None);
    pub receive = ({event}: EventLog.item) => {
      let _ignoreThisWarning = this;
      state :=
        (
          switch (event) {
          | VentureCreated(event) => {
              ...state^,
              systemIssuer: event.systemIssuer,
            }
          | PartnerAccepted({data}) => {
              ...state^,
              eligable: [data.id, ...state^.eligable],
            }
          | AccountCreationEndorsed(event)
              when ProcessId.eq(event.processId, proposal.processId) => {
              ...state^,
              endorsements: [event.supporterId, ...state^.endorsements],
            }
          | AccountCreationAccepted(event)
              when ProcessId.eq(event.processId, proposal.processId) =>
            completed := true;
            state^;
          | _ => state^
          }
        );
      result := None;
      if (completed^ == false
          && state^.policy
          |> Policy.fulfilled(
               ~eligable=state^.eligable,
               ~endorsed=state^.endorsements,
             )) {
        result :=
          Some((
            state^.systemIssuer,
            AccountCreationAccepted(
              AccountCreation.Accepted.fromProposal(proposal),
            ),
          ));
      };
    };
    pub processCompleted = () => completed^;
    pub pendingEvent = () => result^ |> Utils.mapOption(Js.Promise.resolve)
  };
  log |> EventLog.reduce((_, item) => process#receive(item), ());
  process;
};
