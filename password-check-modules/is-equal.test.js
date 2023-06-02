import { isEqual } from "./is-equal";

describe("isEqual", function () {
  it("check if two passwords are equal", function () {
    expect(isEqual("Hallo", "Hallo")).toBe(true);
  });
});
