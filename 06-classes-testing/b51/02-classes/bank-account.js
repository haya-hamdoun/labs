import { nanoid } from "nanoid";

export class BankAccount {
  #id;
  #balance;

  constructor(account) {
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
    this.#balance += amount; // assuming that amount > 0
  }

  withdraw(amount) {
    this.#balance -= amount; // assuming that amount > 0 and balance >= amount
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
}
