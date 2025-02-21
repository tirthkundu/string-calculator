"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const string_calculator_1 = require("../src/string-calculator");
describe('String Calculator Tests', () => {
    it('should return 0 for an empty string', () => {
        (0, chai_1.expect)((0, string_calculator_1.add)('')).to.equal(0);
    });
    it('should return the number itself for a single number', () => {
        (0, chai_1.expect)((0, string_calculator_1.add)('1')).to.equal(1);
    });
    it('should return the sum of two numbers separated by a comma', () => {
        (0, chai_1.expect)((0, string_calculator_1.add)('1,5')).to.equal(6);
    });
});
