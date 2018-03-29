type watcher = {
  .
  receive: EventLog.item => unit,
  pendingEvent: unit => option((Bitcoin.ECPair.t, Event.t)),
  processCompleted: unit => bool
};

type t = list(watcher);

module Initialize = Watcher__InitializeVenture;

module PartnerApproval = Watcher__PartnerApproval;

module AccountCreationApproval = Watcher__AccountCreationApproval;

module CustodianApproval = Watcher__CustodianApproval;

module CustodianKeyChain = Watcher__CustodianKeyChain;

module AccountKeyChain = Watcher__AccountKeyChain;

let initWatcherFor = (session, {event}: EventLog.item, log) =>
  switch event {
  | VentureCreated(event) => Some(Initialize.make(session, event, log))
  | PartnerProposed(proposal) => Some(PartnerApproval.make(proposal, log))
  | AccountCreationProposed(proposal) =>
    Some(AccountCreationApproval.make(proposal, log))
  | AccountCreationAccepted(acceptance) =>
    Some(AccountKeyChain.make(acceptance, log))
  | CustodianProposed(proposal) => Some(CustodianApproval.make(proposal, log))
  | CustodianAccepted(acceptance) =>
    Some(CustodianKeyChain.make(session, acceptance, log))
  | _ => None
  };

let apply = (~reconstruct=false, session, item, log, watchers) => {
  /* To prevent watchers receiving items twice on reconstruction */
  if (reconstruct == false) {
    watchers |> List.iter(w => w#receive(item));
  };
  (
    switch (initWatcherFor(session, item, log)) {
    | Some(w) => [w, ...watchers]
    | None => watchers
    }
  )
  |> List.filter(w => w#processCompleted() == false);
};

let rec processPending = (session, log, eventFound, state, watchers) => {
  let nextEvent =
    (
      try (
        Some(
          watchers
          |> List.rev
          |> List.find(w => w#pendingEvent() |> Js.Option.isSome)
        )
      ) {
      | Not_found => None
      }
    )
    |> (
      watcher =>
        switch watcher {
        | Some(watcher) => watcher#pendingEvent()
        | None => None
        }
    );
  switch nextEvent {
  | None => (log, state, watchers)
  | Some((issuer, event)) =>
    let (item, log, state) = state |> eventFound(issuer, event, log);
    watchers
    |> apply(session, item, log)
    |> processPending(session, log, eventFound, state);
  };
};

let applyAndProcessPending = (session, item, log, eventFound, state, watchers) =>
  watchers
  |> apply(session, item, log)
  |> processPending(session, log, eventFound, state);