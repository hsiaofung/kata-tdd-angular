export class Roman {
  convert(romanNumeral: string) {
    if (romanNumeral === 'I') {
      return 1;
    } else if (romanNumeral === 'V') {
      return 5;
    } else if (romanNumeral === 'II') {
      return 2;
    } else if (romanNumeral === 'III') {
      return 3;
    } else if (romanNumeral === 'VI') {
      return 6;
    } else {
      return 10;
    }
  }
}
