"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const utils_1 = require("./utils");
const add = (numbers) => {
    if (!numbers)
        return 0;
    let delimiter = ',';
    if (numbers.startsWith('//')) {
        [delimiter, numbers] = (0, utils_1.extractDelimiter)(numbers);
    }
    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);
    if (numArray.some(isNaN)) {
        throw new Error('Input contains invalid numbers');
    }
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
};
exports.add = add;
