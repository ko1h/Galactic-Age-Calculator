
export class AgeCalculator {
  constructor(month, day, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}


function combine(month, day, year) {
  const stuff = month + ", " + day + ", " + year
  return stuff;
}
