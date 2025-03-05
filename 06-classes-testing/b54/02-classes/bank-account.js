import { nanoid } from "nanoid";

// const id = nanoid();
// console.log(id);

export class BankAccount {
  #id;
  #balance;

  // constructor({id, balance}) {
  constructor(account) {
    // how to prevent creating instances of BankAccount?
    // console.log(this.constructor);

    if (this.constructor === BankAccount) {
      throw "cannot initialize abstract class";
    }

    // this.#id =
    //   account && "id" in account ? account.id : BankAccount.#generateId();
    this.#id = account?.id ?? BankAccount.#generateId();
    this.#balance = account?.balance ?? 0.0;
  }

  get id() {
    return this.#id;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount; // assumes that amount is a number and amount > 0
  }

  withdraw(amount) {
    this.#balance -= amount; // assumes that amount is a number and amount > 0 and balance >= amount
  }

  toString() {
    return `ID: ${this.#id} Balance: ${this.#balance}`;
  }

  toJSON() {
    return {
      id: this.#id,
      balance: this.#balance,
    };
  }

  static #generateId() {
    return nanoid();
  }

  abstractMethod() {
    throw "not implemented";
  }

  // testMethod(obj) {
  //   return obj.#id;
  // }
}

// let account1 = new BankAccount();
// let account2 = new BankAccount({ balance: 1000 });
// let account3 = new BankAccount({ id: "aisdb9173r", balance: 1000 });

// let acc1 = new BankAccount(); // error: abstract class
// let acc2 = new CurrentAccount();
