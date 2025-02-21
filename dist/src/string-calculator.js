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
    (0, utils_1.validateNumbers)(numArray);
    return numArray.reduce((sum, num) => sum + num, 0);
};
exports.add = add;
