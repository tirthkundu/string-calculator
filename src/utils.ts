export const extractDelimiter = (input: string): [string, string] => {
    const delimiterEndIndex = input.indexOf('\n');
    const delimiter = input.substring(2, delimiterEndIndex);
    const numbers = input.substring(delimiterEndIndex + 1);
    return [delimiter, numbers];
  };