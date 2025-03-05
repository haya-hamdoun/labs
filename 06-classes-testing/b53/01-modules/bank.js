let accounts = [
  { id: "08a45dd424", balance: 502.3, type: "Savings" },
  { id: "a9e2465841", balance: 4100.0, type: "Current" },
  { id: "7160dca601", balance: 34420.55, type: "Current" },
  { id: "2efde49d9d", balance: 61023.69, type: "Savings" },
];

export function add(account) {}

export function getAll() {
  return accounts;
}

export function get(id) {
  return accounts.find((a) => a.id === id);
}

export function remove(id) {
  accounts = accounts.filter((a) => a.id !== id);
}

export function deposit(id, amount) {
  let account = accounts.find((a) => a.id === id);
  account.balance += amount;
}

export function withdraw(id, amount) {}

export function totalBalance() {
  return accounts.reduce((total, account) => total + account.balance, 0);
}

export function deductFee(fee) {}

export function distributeBenefit(percentage) {}

function toJSON() {
  return JSON.stringify(accounts);
}

function fromJSON(json) {
  accounts = JSON.parse(json);
}

// export default [1, 2, 3, 4];

export { toJSON, fromJSON };
