import convert from "convert";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("convert", function () {
  describe("time", function () {
    it("should convert 60 s to 1 m", function () {
      expect(convert(60, "seconds").to("minutes")).to.be.equal(1);
    });
    it("should convert 1 h to 3600 s", function () {
      expect(convert(1, "hours").to("seconds")).to.be.equal(3600);
    });
  });
  describe("mass", function () {
    it("should convert 1 kg to 2.2 lb", function () {
      expect(convert(1, "kg").to("pounds")).to.be.equal(2.2);
    });
  });
  describe("best", function () {
    it("should convert to best with unit and quantity properties", function () {
      expect(convert(1500, "meters").to("best")).to.have.own.property("unit");
      expect(convert(1500, "meters").to("best")).to.have.own.property(
        "quantity"
      );
    });
  });
});
