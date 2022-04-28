const { default: StringCalculator } = require("../js/stringCalculator.js");

let stringCalculator = new StringCalculator();

describe("String calculator tests", () => {
    test("expect add 1 to be 1", () => {
        expect(stringCalculator.add(1)).toBe(1);
    })
});