open Jest;

open Expect;

open PrimitiveTypes;

open WalletTypes;

module Wallet = Venture__Wallet;

module G = Generators;

module L = G.Log;

module F = Fixtures;

let constructState = log =>
  log |> L.reduce((s, {event}) => s |> Wallet.apply(event), Wallet.make());

let testNextIncomeAddress = (user: SessionData.t, address, wallet) => {
  let exposed =
    wallet
    |> Wallet.exposeNextIncomeAddress(user.userId, AccountIndex.default);
  let description =
    "the next address of '"
    ++ UserId.toString(user.userId)
    ++ "' is '"
    ++ address
    ++ "'";
  test(description, () =>
    expect(exposed.address.displayAddress) |> toEqual(address)
  );
  wallet |> Wallet.apply(IncomeAddressExposed(exposed));
};

let collectNextTwoAddresses = (user: SessionData.t, (wallet, log)) => {
  let exposed1 =
    wallet
    |> Wallet.exposeNextIncomeAddress(user.userId, AccountIndex.default);
  let log = log |> L.appendSystemEvent(IncomeAddressExposed(exposed1));
  let wallet = wallet |> Wallet.apply(IncomeAddressExposed(exposed1));
  let exposed2 =
    wallet
    |> Wallet.exposeNextIncomeAddress(user.userId, AccountIndex.default);
  let log = log |> L.appendSystemEvent(IncomeAddressExposed(exposed2));
  let wallet = wallet |> Wallet.apply(IncomeAddressExposed(exposed2));
  ((exposed1, exposed2), (wallet, log));
};

let getExposedAddresses = ({walletInfoCollector}: Wallet.t) =>
  walletInfoCollector
  |> WalletInfoCollector.exposedCoordinates
  |> List.map(coordinates =>
       walletInfoCollector
       |> WalletInfoCollector.accountKeyChains
       |> Address.find(coordinates)
     )
  |> List.map((a: Address.t) => a.displayAddress);
