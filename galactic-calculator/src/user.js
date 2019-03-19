export class User {
  constructor(birthday,today) {
    this.birthday = birthday;
    this.today = today;
  }

  totalMilliSecAlive() {
    let totalMillSec = this.today - this.birthday;
    return totalMillSec;
  }
  totalEarthDays() {
    let totalEarthDays = Math.floor((this.totalMilliSecAlive() / 86400000));
    return totalEarthDays;
  }
  ageEarth() {
    let ageEarth = Math.floor((this.totalEarthDays() / 365));
    return ageEarth;
  }
}
