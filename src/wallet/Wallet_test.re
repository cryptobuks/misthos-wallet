TestHelpers.enableHttpRequests();

open Jest;

open Expect;

open Bitcoin;

let () = {
  beforeAll(() => TestHelpers.startBitcoind());
  afterAll(() => TestHelpers.stopBitcoind());
  let (keyA, keyB, keyC) = (
    ECPair.fromWIFWithNetwork(
      "cUVTgxrs44T7zVon5dSDicBkBRjyfLwL7RF1RvR7n94ar3HEaLs1",
      Networks.testnet
    ),
    ECPair.fromWIFWithNetwork(
      "cPfdeLvhwvAVRRM5wiEWopWviGG65gbxQCHdtFL56PYUJXsTYixf",
      Networks.testnet
    ),
    ECPair.fromWIFWithNetwork(
      "cPMRPo3fXGehCmFC5QsSFcZmYivsFtLVexxWi22CFwocvndXLqP1",
      Networks.testnet
    )
  );
  let address =
    Wallet.makeAddress(~network=Networks.testnet, 2, [keyA, keyB, keyC]);
  describe("makeAddress", () =>
    test("Correct", () =>
      expect(address)
      |> toEqual(
           Wallet.{
             witnessScript: "522102f80698b64c605f9753306fae1d0af3f4dc27ad5fbb1b1f0241814135952031ad21020bbd38eecfb9aa2a07f36a615ed1b9388e6484adcfebc44dc568edc5c5bfad7d2102140a0f8a0ac89b3694e3834abbebcf246bdc7e59ed70eca9c6098d6fac5986cc53ae",
             redeemScript: "0020157d9de7bf344edb7ea72b4dd76b381cbe95ded25ddbd478293ac5f988cc778f",
             address: "2N8qFbjFX4ZA1jTatE17kYZnS849NB9bN2T"
           }
         )
    )
  );
  describe("preparePayoutTx", () =>
    Bitcoin.(
      testPromise("thing", () =>
        Js.Promise.(
          Wallet.preparePayoutTx(
            address,
            [
              ("mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU", 1061.),
              ("2N1yHtM4yha7QGCzAX1V14Sd4BxE3PqgJzN", 50.)
            ],
            keyA,
            ~network=Networks.testnet
          )
          |> then_((payoutTx: Wallet.payoutTx) => {
               let tx = Tx.fromHex(payoutTx.txHex);
               Js.log(tx);
               /* let nextT: Wallet.payoutTx = */
               /*   Wallet.signPayoutTx(payoutTx, keyB, address, ~network=Network.testnet); */
               /* let tx = Tx.fromHex(nextT.txHex); */
               /* Js.log(tx); */
               /* [%bs.raw {| console.log(tx.ins[0].witness)|}]; */
               /* let txB = TxBuilder.fromTransaction(tx); */
               /* Js.log(txB); */
               /* [%bs.raw {| console.log(txB.inputs[0].signatures)|}]; */
               /* let nextT = Wallet.signPayoutTx(payoutTx, keyA, address); */
               /* let tx2 = Tx.fromHex(nextT.txHex); */
               /* Js.log(tx2); */
               /* [%bs.raw {| console.log(tx2.ins[0].witness)|}]; */
               /* let txB2 = TxBuilder.fromTransaction(tx2); */
               /* Js.log(txB2); */
               /* [%bs.raw {| console.log(txB2.inputs[0].signatures)|}]; */
               resolve(expect(true) |> toBe(true));
             })
        )
      )
    )
  );
};
