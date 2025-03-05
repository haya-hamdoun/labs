export class Bank {
  #accounts = [];

  constructor(accounts) {
    this.#accounts = accounts;
  }

  get accounts() {
    return this.#accounts;
  }

  get(id) {
    return this.#accounts.find((a) => a.id === id);
  }

  add(account) {
    this.#accounts.push(account);
  }

  remove(id) {
    this.#accounts = this.#accounts.filter((a) => a.id !== id);

    // const index = this.#accounts.findIndex((a) => a.id === id);
    // if (index !== -1) {
    //   this.#accounts.splice(index, 1);
    // }
  }

  totalBalance() {
    return this.#accounts.reduce((s, a) => s + a.balance, 0);
  }

  toString() {
    return this.#accounts.join("\n");
  }

  toJSON() {
    return this.#accounts;
  }
}

// JSON.stringify({
//   key: value,
// });

// JSON.parse('{"key": value}');
