import { CurrentAccount } from "./current-account.js";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("CurrentAccount", function () {
  describe("deposit", function () {
    it("should increase balance by given amount", function () {
      const account = new CurrentAccount();
      account.deposit(100);
      // if (account.balance !== 100) {
      //   throw "description";
      // }
      expect(account.balance).to.be.equal(100);
    });
  });
});
