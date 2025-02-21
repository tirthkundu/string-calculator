export const add = (numbers: string): number => {
    if (!numbers) return 0;
    
    const delimiter = ',';
    const numArray = numbers.split(delimiter).map(Number);
  
    if (numArray.some(isNaN)) {
      throw new Error('Input contains invalid numbers');
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  };
  