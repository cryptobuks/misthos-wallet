let inputCost: (~withDms: bool, ~unlocked: bool, int, int, BTC.t) => BTC.t;

let canPayForItself: (BTC.t, Network.txInput) => bool;

let outputCost: (string, BTC.t, Bitcoin.Networks.t) => BTC.t;

let minChange: (~withDms: bool, ~unlocked: bool, int, int, BTC.t) => BTC.t;

let estimate:
  (list(string), list(Network.txInput), BTC.t, Bitcoin.Networks.t) => BTC.t;
