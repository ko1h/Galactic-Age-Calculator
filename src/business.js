export class User {

  constructor(year, sex, todayYear, averageAge) {
    this.year= year;
    this.sex = sex;
    this.todayYear = todayYear;
    this.averageAge = 80;
  }

  userAge() {
    let userAgeTotal = (this.todayYear - this.year);
    return userAgeTotal;
  }

  lifeOnMercury() {
    const ageMercury = Math.floor((this.userAge() * 365) / 88);
    return ageMercury;
  }
  lifeOnVenus() {
    const ageVenus = Math.floor((this.userAge() * 365) / 226);
    return ageVenus;
  }
  lifeOnMars() {
    const ageMars = Math.floor((this.userAge() * 365) / 687);
    return ageMars;
  }
  lifeOnJupiter() {
    const ageJupiter = Math.floor((this.userAge() * 365) / 4330);
    return ageJupiter;
  }
  lifeExpectancyOnEarth() {
    const yearleftOnEarth = (this.averageAge - this.userAge());
    return yearleftOnEarth;
  }
  lifeExpectancyOnMercury() {
    const yearleftOnMercury = (this.averageAge + this.sex) - Math.floor((this.userAge() * 365) / 88);
    return yearleftOnMercury;
  }
  lifeExpectancyOnVenus() {
    const yearleftOnVenus = (this.averageAge + this.sex) - Math.floor((this.userAge() * 365) / 226);
    return yearleftOnVenus;
  }
  lifeExpectancyOnMars() {
    const yearleftOnMars = (this.averageAge + this.sex) - Math.floor((this.userAge() * 365) / 686);
    return yearleftOnMars;
  }
  lifeExpectancyOnJupiter() {
    const yearleftOnJupiter = (this.averageAge + this.sex) - Math.floor((this.userAge() * 365) / 4328);
    return yearleftOnJupiter;
  }
}


//2640
//10950
