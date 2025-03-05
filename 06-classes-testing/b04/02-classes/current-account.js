import { BankAccount } from "./bank-account.js";

export class CurrentAccount extends BankAccount {
  static #fee;

  constructor(account) {
    super(account);
  }

  charge() {
    // const b = this.balance;
    // this.balance += 1;
    this.withdraw(CurrentAccount.#fee);
  }

  toString() {
    return `CurrentAccount ${super.toString()}`;
  }

  toJSON() {
    // const obj = super.toJSON();
    // obj.type = "Current"
    // return obj;

    return { ...super.toJSON(), type: "Current" };
  }

  static get fee() {
    return CurrentAccount.#fee;
  }

  static set fee(amount) {
    CurrentAccount.#fee = amount;
  }

  static toJSON() {
    return {
      fee: CurrentAccount.#fee,
    };
  }
}

// const account = new CurrentAccount();
