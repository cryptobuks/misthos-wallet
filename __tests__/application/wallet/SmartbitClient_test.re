Helpers.enableHttpRequests();

open Jest;

open Expect;

let () =
  describe("getUTXOs", () =>
    testPromise(~timeout=50000, "get stuff", () =>
      Js.Promise.(
        SmartbitClient.getUTXOs(
          {subdomain: "api"},
          ["1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"],
        )
        |> then_(res =>
             expect(res |> List.length) |> toBeGreaterThan(500) |> resolve
           )
      )
    )
  );