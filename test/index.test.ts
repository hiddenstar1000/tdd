import { getMessage } from "../src";

describe("getMessage()", () => {
  it("Return '+ number' when the input is positive", () => {
    const number = 3;
    const result = getMessage(number);
    expect(result).toBe("+ number");
  });
});
