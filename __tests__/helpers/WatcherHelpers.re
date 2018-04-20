open Jest;

open Expect;

let testWatcherHasCompleted = watcher =>
  test("the watcher has completed", () =>
    expect(watcher#processCompleted()) |> toEqual(true)
  );

let testWatcherHasNotCompleted = watcher =>
  test("the watcher has not completed", () =>
    expect(watcher#processCompleted()) |> toEqual(false)
  );

let testWatcherHasNoEventPending = watcher => {
  testWatcherHasNotCompleted(watcher);
  test("and has no event pending", () =>
    watcher#pendingEvent() |> Js.Option.isNone |> expect |> toEqual(true)
  );
};

let testWatcherHasEventPending =
    (eventName, watcher, expectedIssuer, eventTest) => {
  testWatcherHasNotCompleted(watcher);
  testPromise("and has " ++ eventName ++ " pending", () =>
    watcher#pendingEvent()
    |> Js.Option.getExn
    |> Js.Promise.(
         then_(((issuer, event)) =>
           expect((issuer, eventTest(event)))
           |> toEqual((expectedIssuer, true))
           |> resolve
         )
       )
  );
};
