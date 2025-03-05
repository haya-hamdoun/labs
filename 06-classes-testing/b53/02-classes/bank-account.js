import { nanoid } from "nanoid";

export class BankAccount {
  #id;
  #balance = 0.0;

  constructor(account) {
    if (this.constructor === BankAccount) {
      throw "can't instantiate abstract class";
    }
    // this.#id = account && "id" in account ? account.id : BankAccount.#generateId();
    this.#id = account?.id ?? BankAccount.#generateId();
    this.#balance = account?.balance ?? 0.0;
  }

  // [] !== {} !== null !== undefined

  get id() {
    return this.#id;
  }

  get balance() {
    this.#balance;
  }

  deposit(amount) {
    this.#balance += amount; // amount is a number that is > 0
  }

  withdraw(amount) {
    this.#balance -= amount; // amount is a number that is > 0 and balance >= amount
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
    throw "tried calling abstract method";
  }

  // method(obj) {
  //   obj.#id;
  // }
}
