# String Calculator

This is a simple string calculator application written in TypeScript. It provides a function to add numbers in a string format, supporting custom delimiters and handling various edge cases.

## Installation

To install the dependencies, run:

```sh
npm install
```
## Usage
To use the add function, import it and pass a string of numbers:
```
import { add } from './src/string-calculator';

const result = add('1,2,3');
console.log(result); // Output: 6
```

## Features
- Supports custom delimiters
- Handles new lines between numbers
- Throws an error for negative numbers
- Validates input for invalid numbers

## Scripts
- `build`: Compiles the TypeScript code
- `test`: Runs the tests using Jest
- `format`: Formats the code using Prettier

### Build
To build, use:
```
tsc
```

### Running Tests
To run the tests, use:
```
npm test
```

### Formatting
To format the code, use:
```
npm run format
```
## Screnshots
<img width="881" alt="passed-test-cases" src="https://github.com/user-attachments/assets/f9c54c51-f1c3-4401-8acc-a817af1ac493" />

