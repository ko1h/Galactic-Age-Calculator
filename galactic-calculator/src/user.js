export class User {

  constructor(age, sex, averageAge) {
    this.age= age;
    this.sex = sex;
    this.averageAge = averageAge;no
  }

  lifeOnMercury() {
    const ageMercury = Math.floor((this.age * 365) / 88);
    return ageMercury;
  }
  lifeOnVenus() {
    const ageVenus = Math.floor((this.age * 365) / 226);
    return ageVenus;
  }
  lifeOnMars() {
    const ageMars = Math.floor((this.age * 365) / 686);
    return ageMars;
  }
  lifeOnJupiter() {
    const ageJupiter = Math.floor((this.age * 365) / 4328);
    return ageJupiter;
  }
  lifeExpectancyOnVenus() {
    const yearleftOnVenus = (this.averageAge + this.sex) - Math.floor((this.age * 365) / 226);
    return yearleftOnVenus;
  }
  lifeExpectancyOnMars() {
    const yearleftOnMars = (this.averageAge + this.sex) - Math.floor((this.age * 365) / 226);
    return yearleftOnMars;
  }
  lifeExpectancyOnJupiter() {
    const yearleftOnJupiter = (this.averageAge + this.sex) - Math.floor((this.age * 365) / 226);
    return yearleftOnJupiter;
  }
}


//2640
//10950
