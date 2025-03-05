import { Bank } from "./bank.js";
import { CurrentAccount } from "./current-account.js";
import { SavingsAccount } from "./savings-account.js";

CurrentAccount.fee = 10;
SavingsAccount.benefit = 0.05;

const ca = new CurrentAccount();
const sa = new SavingsAccount();

console.log([1, 2, 3].join("\n"));

// const bank = new Bank();
// console.log(bank);
// bank.add([{ id: "123123", balance: 123 }]);
// console.log(bank.toString());

console.log(JSON.stringify("1"));
console.log(JSON.parse('"1"'));

console.log(JSON.stringify({ keys: [1, 2, 3] }));
const config = JSON.parse(`{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "nanoid": "^5.1.2"
  }
}
`);
console.log(config);

// create a bank based on the table and print the account information:
let accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

accounts = accounts.map((acc) =>
  acc.type === "Current" ? new CurrentAccount(acc) : new SavingsAccount(acc)
);

const obj = { id: "08a45dd424", balance: 502.3, type: "Savings" };
const acc = new SavingsAccount(obj);
acc.toString();
obj.toString();

const bank = new Bank(accounts);
console.log(bank.toString());
console.log(JSON.stringify(bank));

bank.get("a9e2465841").deposit(10_000_000_000);
console.log(bank.toString());
