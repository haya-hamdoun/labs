export class Bank {
  // #accounts = [];

  // constructor(accounts) {
  //   if (accounts) {
  //     this.#accounts = accounts;
  //   }
  // }

  // field1 = 1;
  // field2 = 2;

  #accounts;

  constructor(accounts) {
    this.#accounts = accounts ?? []; // provide a default value
  }

  // constructor(accounts = []) {
  //   this.#accounts = accounts;
  // }

  get accounts() {
    // return this.#accounts;
    return [...this.#accounts];
  }

  get(id) {
    return this.#accounts.find((acc) => acc.id === id);
  }

  add(account) {
    this.#accounts.push(account); // assuming account is defined and is a bank account. can be tested using instanceof
  }

  remove(id) {
    // filter
    this.#accounts = this.#accounts.filter((acc) => acc.id !== id);

    // findIndex and splice
    const index = this.#accounts.findIndex((acc) => acc.id === id);
    if (index !== -1) {
      this.#accounts.splice(index, 1);
    }

    this.#accounts.splice(
      this.#accounts.findIndex((acc) => acc.id === id),
      1
    );
  }

  totalBalance() {
    return this.#accounts.reduce((s, a) => s + a.balance, 0);
  }

  toString() {
    // return this.#accounts.reduce((s, a) => s + a.toString() + "\n", "");

    return this.#accounts.join("\n");
  }

  toJSON() {
    return this.#accounts;
  }

  // method(anotherObject) {
  //   anotherObject.#accounts;
  // }
}

// const bank1 = new Bank();
// const bank2 = new Bank(accounts);

// export { Bank };
