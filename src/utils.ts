export const extractDelimiter = (input: string): [string, string] => {
  const delimiterEndIndex = input.indexOf('\n');
  const delimiter = input.substring(2, delimiterEndIndex);
  const numbers = input.substring(delimiterEndIndex + 1);
  return [delimiter, numbers];
};

export const validateNumbers = (numArray: number[]): void => {
  if (numArray.some(isNaN)) {
    throw new Error('Input contains invalid numbers');
  }

  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(', ')}`,
    );
  }
};
