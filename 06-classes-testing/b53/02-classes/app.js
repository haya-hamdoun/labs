import { Bank } from "./bank.js";
import { BankAccount } from "./bank-account.js";
import { CurrentAccount } from "./current-account.js";
import { SavingsAccount } from "./savings-account.js";

CurrentAccount.fee = 10;
SavingsAccount.benefit = 0.05;

let accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

accounts = accounts.map((acc) =>
  acc.type === "Current" ? new CurrentAccount(acc) : new SavingsAccount(acc)
);

let bank = new Bank(accounts);

console.log(bank);
console.log(bank.toString());

bank.get("a9e2465841").deposit(1_000_000);

console.log(bank.toString());

// let acc = new BankAccount();
// let acc2 = new CurrentAccount();
