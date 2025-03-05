import { Bank } from "./bank.js";
import { CurrentAccount } from "./current-account.js";
import { SavingsAccount } from "./savings-account.js";

let accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

accounts = accounts.map((obj) =>
  obj.type === "Current" ? new CurrentAccount(obj) : new SavingsAccount(obj)
);
const bank = new Bank(accounts);

console.log(bank.toString());
bank.get("7160dca601").deposit(1_000_000);
console.log(bank.toString());
bank.add(new CurrentAccount());
console.log(bank.toString());

// console.log(JSON.stringify(accounts));
// console.log(accounts);
// console.log(
//   JSON.parse(
//     '[{"id":"08a45dd424","balance":502.3,"type":"Savings"},{"id":"a9e2465841","balance":4100,"type":"Current"},{"id":"7160dca601","balance":34420.55,"type":"Current"},{"id":"2efde49d9d","balance":61023.69,"type":"Savings"}]'
//   )
// );
