const { default: StringCalculator } = require("../js/stringCalculator.js");

let stringCalculator = new StringCalculator();

describe("String calculator tests", () => {
    // Numbers
    describe("Numbers", () => {
        test("Expect null to be 0", () => {
            expect(stringCalculator.add()).toBe(0);
        });
        test("Expect '' to be 0", () => {
            expect(stringCalculator.add("")).toBe(0);
        });
        test('Expect "1" to be 1', () => {
            expect(stringCalculator.add("1")).toBe(1);
        });
        test('Expect "55,72" to be 127', () => {
            expect(stringCalculator.add("55,72")).toBe(127);
        })
        test('Expect "55,72,22" to be 149', () => {
            expect(stringCalculator.add("55,72,22")).toBe(149);
        })
        test('Expect "1\n,2,3" to be 6', () => {
            expect(stringCalculator.add("1\n,2,3")).toBe(6);
        })
    });

    // Fonctions avancées JS 
    // ---------------------
    // map, reduce, filter
    describe("Errors", () => {
        test('Expect "-46" to be Error not allowed', () => {
            expect(() => stringCalculator.add("-46")).toThrow(`Negatives not allowed. -46`);
        })

        test('Expect "-46,-47,-78" to be Error with multiple negative numbers', () => {
            expect(() => stringCalculator.add("-46,-47,-78")).toThrow(`Negatives not allowed. -46,-47,-78`);
        })
    })

    describe("Delimiters", () => {
        test('Expect "2\\r\\b" to be 10', () => {
            expect(stringCalculator.removeDelimiters("2\r\b")).toBe("2");
        });
    })
});