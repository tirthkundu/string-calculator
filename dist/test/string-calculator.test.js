"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_calculator_1 = require("../src/string-calculator");
describe('String Calculator Tests', () => {
    it('should return 0 for an empty string', () => {
        expect((0, string_calculator_1.add)('')).toEqual(0);
    });
    it('should return the number itself for a single number', () => {
        expect((0, string_calculator_1.add)('1')).toEqual(1);
    });
    it('should return the sum of two numbers separated by a comma', () => {
        expect((0, string_calculator_1.add)('1,5')).toEqual(6);
    });
    it('should throw an error for input containing invalid numbers', () => {
        expect(() => (0, string_calculator_1.add)('1,a')).toThrow('Input contains invalid numbers');
    });
    it('should handle new lines between numbers', () => {
        expect((0, string_calculator_1.add)('1\n2,3')).toEqual(6);
    });
    it('should handle custom delimiters', () => {
        expect((0, string_calculator_1.add)('//;\n1;2')).toEqual(3);
    });
    it('should throw an exception for negative numbers', () => {
        expect(() => (0, string_calculator_1.add)('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2, -4');
    });
});
