// export function add(account) {}

// export function getAll() {}
// // export { accounts };

// export default "random string";

export class Bank {
  #accounts = [];

  constructor(accounts) {
    // this.#accounts = [...accounts];
    this.#accounts = accounts;
  }

  get accounts() {
    return this.#accounts;
  }

  get(id) {
    return this.#accounts.find((acc) => acc.id === id);
  }

  add(account) {
    this.#accounts.push(account); // check for type of account
  }

  remove(id) {
    this.#accounts = this.#accounts.filter((acc) => acc.id !== id);

    // const index = this.#accounts.findIndex((acc) => acc.id === id);
    // if (index !== -1) {
    //   this.#accounts.splice(index, 1);
    // }
  }

  totalBalance() {
    return this.#accounts.reduce((s, a) => s + a.balance, 0);
  }

  toString() {
    return this.#accounts.join("\n");
    // return this.#accounts.reduce((s, a) => s + a.toString() + "\n", "");
  }

  toJSON() {
    return this.#accounts;
  }
}

// const bank = new Bank();
// bank.accounts
// JSON.stringify(bank)

// { } !== null !== undefined
