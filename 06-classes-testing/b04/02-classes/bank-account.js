import { nanoid } from "nanoid";

export class BankAccount {
  #id;
  #balance;

  // field = "value";

  constructor(account) {
    console.log(this.constructor);

    if (this.constructor === BankAccount) {
      // check if creating BankAccount
      throw "cannot instantiate abstract class";
    }
    // { id: , balance: }
    // this.#id = account && "id" in account ? account.id : this.#generateId();
    this.#id = account?.id ?? BankAccount.#generateId();
    this.#balance = account?.balance ?? 0.0;
  }

  // account: {
  //   balance: {
  //     key1: {
  //       key2: value,
  //     },
  //   },
  // };

  // account.key0 // error
  // account?.key0 // undefined

  // constructor(...args) {
  // args is an array of arguments
  // }

  get id() {
    return this.#id;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount; // assuming amount is a positive number
  }

  withdraw(amount) {
    this.#balance -= amount; // assuming amount is a positive number and balance >= amount
  }

  toString() {
    return `ID: ${this.#id} Balance: ${this.#balance}`;
  }

  toJSON() {
    return { id: this.#id, balance: this.#balance };
  }

  static #generateId() {
    return nanoid();
  }
}

// const account = new BankAccount(); // { id: generated, balance: 0.0 }
// const account = new BankAccount({}); // { id: generated, balance: 0.0 }

// const account = new BankAccount({ id: "1298ndf901nf" }); // { id: "1298ndf901nf", balance: 0.0 }

// const account = new BankAccount({ balance: 100 }); // { id: generated, balance: 100 }

// const account = new BankAccount({ id: "1298ndf901nf", balance: 100 }); // { id: "1298ndf901nf", balance: 100 }

// const account = new BankAccount({
//   id: "1298ndf901nf",
//   balance: 100,
//   key: "value",
// }); // { id: "1298ndf901nf", balance: 100 }

// const obj = {
//   func: function () {
//     console.log(this);
//   },
//   func2: () => console.log(this),
// };
// // obj.func.bind(obj);
// obj.func();
// obj.func2();

// try {
//   const account = new BankAccount();
//   console.log(JSON.stringify(account));
// } catch (e) {
//   console.error("failed");
// }
