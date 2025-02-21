export const add = (numbers: string): number => {
    if (!numbers) return 0;
    
    const delimiters = [',', '\n'];
    const delimiterPattern = new RegExp(`[${delimiters.join('')}]`); 
  
    const numArray = numbers.split(delimiterPattern).map(Number);
  
    if (numArray.some(isNaN)) {
      throw new Error('Input contains invalid numbers');
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  };
  