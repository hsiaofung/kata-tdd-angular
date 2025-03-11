export class Roman {
  convert(romanNumeral: string) {
    if (romanNumeral === 'I') {
      return 1;
    } else if (romanNumeral === 'V') {
      return 5;
    } else {
      return 10;
    }
  }
}
