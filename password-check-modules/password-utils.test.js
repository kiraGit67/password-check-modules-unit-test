import { atLeast10charsLong } from "./password-utils.js";
import { isValid } from "./password-utils.js";

describe("atLeast10charsLong", function () {
  it("checks if password consists of 10 or more chars", function () {
    expect(atLeast10charsLong("pass10")).toBe(false);
    expect(atLeast10charsLong("PassWord10")).toBe(true);
  });
});

describe("isValid", () => {
  it("checks if password meets all requirements", () => {
    expect(isValid("PassWord210")).toBe(true);
    expect(isValid("10cC")).toBe(false);
  });
});
