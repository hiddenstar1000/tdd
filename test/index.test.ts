import { getMessage } from "../src";

describe("getMessage()", () => {
  it("Return '+ number' when the input is positive", () => {
    const number = 3;
    const result = getMessage(number);
    expect(result).toBe("+ number");
  });

  it("Return '- number' when the input is negative", () => {
    const number = -2;
    const result = getMessage(number);
    expect(result).toBe("- number");
  });

  it("Return 'zero' when the input is zero", () => {
    const number = 0;
    const result = getMessage(number);
    expect(result).toBe("zero");
  });
});
