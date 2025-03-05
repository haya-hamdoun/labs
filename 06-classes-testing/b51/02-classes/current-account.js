import { BankAccount } from "./bank-account.js";

export class CurrentAccount extends BankAccount {
  static #fee;

  constructor(account) {
    super(account);
  }

  charge() {
    this.withdraw(CurrentAccount.#fee);
  }

  toString() {
    return `CurrentAccount ${super.toString()}`;
  }

  toJSON() {
    return { ...super.toJSON(), type: "Current" };
  }

  static get fee() {
    return CurrentAccount.#fee;
  }

  static set fee(amount) {
    CurrentAccount.#fee = amount;
  }

  static toJSON() {
    return { fee: CurrentAccount.fee };
  }

  // method(obj) {
  //   obj.#fee;
  // }
}

// export { CurrentAccount };
