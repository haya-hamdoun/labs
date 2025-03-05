import { BankAccount } from "./bank-account.js";

export class SavingsAccount extends BankAccount {
  static #benefit;

  constructor(account) {
    super(account);
  }

  distribute() {
    this.deposit(SavingsAccount.#benefit * this.balance);
  }

  toString() {
    return `SavingsAccount ${super.toString()}`;
  }

  toJSON() {
    return { ...super.toJSON(), type: "Savings" };
  }

  static get benefit() {
    return this.#benefit;
  }

  static set benefit(amount) {
    this.#benefit = amount;
  }

  static toJSON() {
    return {
      benefit: SavingsAccount.#benefit,
    };
  }
}
