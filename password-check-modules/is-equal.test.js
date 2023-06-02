import { isEqual } from "./is-equal";

describe("isEqual", function () {
  it("check if two passwords are equal", function () {
    expect(isEqual("Hallo", "Hallo")).toBe(true);
    expect(isEqual("hello", "hallo")).toBe(false);
    expect(isEqual("Hallo", "hallo")).toBe(false);
  });
});
