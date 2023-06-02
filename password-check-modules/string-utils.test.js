import { containsLowerCase } from "./string-utils.js";
import { containsUpperCase } from "./string-utils.js";
import { containsNumbers } from "./string-utils.js";

describe("containsLowerCase", function () {
  it("checks if password contains lower case chars", function () {
    expect(containsLowerCase("Password1")).toBe(true);
  });
});

describe("containsUpperCase", function () {
  it("checks if password contains upper case chars", function () {
    expect(containsUpperCase("Password1")).toBe(true);
    expect(containsUpperCase("password2")).toBe(false);
  });
});

describe("containsNumbers", function () {
  it("checks if password contains numbers", function () {
    expect(containsNumbers("Password123")).toBe(true);
    expect(containsNumbers("passwordEins")).toBe(false);
    expect(containsNumbers("Password-eins-zwei-drei")).toBe(false);
  });
});
