open WalletTypes;

let text = Utils.text;

type state = {address: option(string)};

type action =
  | UpdateAddress(string)
  | GetIncomeAddress;

let component = ReasonReact.reducerComponent("Receive");

module Styles = {
  open Css;
  let container =
    style([display(`flex), flexDirection(`column), alignItems(`center)]);
};

let make = (~commands: VentureWorkerClient.Cmd.t, _children) => {
  ...component,
  initialState: () => {address: None},
  didMount: ({send}) => send(GetIncomeAddress),
  reducer: (action, _state) =>
    switch (action) {
    | GetIncomeAddress =>
      ReasonReact.UpdateWithSideEffects(
        {address: None},
        (
          ({send}) =>
            commands.exposeIncomeAddress(~accountIdx=AccountIndex.default)
            |> Js.Promise.(
                 then_(address => send(UpdateAddress(address)) |> resolve)
               )
            |> ignore
        ),
      )
    | UpdateAddress(address) => ReasonReact.Update({address: Some(address)})
    },
  render: ({send, state}) =>
    <div>
      <TitleBar titles=["Receive BTC"] />
      <div className=Styles.container>
        (
          switch (state.address) {
          | Some(address) =>
            <img
              src=(
                "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="
                ++ address
              )
            />
          | None => <Spinner text="Generating new address" />
          }
        )
        <MTypography variant=`Body2>
          (state.address |> Js.Option.getWithDefault("") |> text)
        </MTypography>
        <MButton onClick=(_e => send(GetIncomeAddress))>
          (text("Generate new income address"))
        </MButton>
      </div>
    </div>,
};
