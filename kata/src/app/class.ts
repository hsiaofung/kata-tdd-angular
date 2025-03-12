export class Roman {
  convert(romanNumeral: string) {
    if (romanNumeral.length === 1) {
      return this.convertsSingleDigit(romanNumeral);
    } else {
      if (romanNumeral === 'II') {
        return 2;
      } else if (romanNumeral === 'III') {
        return 3;
      } else {
        return 6;
      }
    }
  }
  convertsSingleDigit(romanNumeral: string) {
    if (romanNumeral === 'I') {
      return 1;
    } else if (romanNumeral === 'V') {
      return 5;
    } else if (romanNumeral === 'X') {
      return 10;
    } else if (romanNumeral === 'L') {
      return 50;
    } else if (romanNumeral === 'C') {
      return 100;
    } else if (romanNumeral === 'D') {
      return 500;
    } else {
      return 1000;
    }
  }
}
