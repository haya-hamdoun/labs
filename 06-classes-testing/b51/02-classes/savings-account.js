import { BankAccount } from "./bank-account.js";

export class SavingsAccount extends BankAccount {
  static #benefit;

  constructor(account) {
    super(account);
  }

  distribute() {
    this.deposit(this.balance * SavingsAccount.benefit);
  }

  toString() {
    return `SavingsAccount ${super.toString()}`;
  }

  toJSON() {
    return { ...super.toJSON(), type: "Savings" };
  }

  static get benefit() {
    return SavingsAccount.#benefit;
  }

  static set benefit(amount) {
    SavingsAccount.benefit = amount;
  }

  static toJSON() {
    return { benefit: SavingsAccount.benefit };
  }
}

// export { SavingsAccount };
