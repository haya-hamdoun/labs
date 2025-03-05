// import { accounts as a } from "./bank.js";
// import anything from "./bank.js";
// import { getAll, totalBalance } from "./bank.js";
// import * as bank from "./bank.js";

// bank.getAll();

// console.log("JS is cool!");
// console.log(a);
// console.log(anything);

let accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

console.log(JSON.stringify(accounts));
console.log(accounts);
console.log(
  JSON.parse(
    '[{"id":"08a45dd424","balance":502.3,"type":"Savings"},{"id":"a9e2465841","balance":4100,"type":"Current"},{"id":"7160dca601","balance":34420.55,"type":"Current"},{"id":"2efde49d9d","balance":61023.69,"type":"Savings"}]'
  )
);
