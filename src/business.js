export class User {

  constructor(age, sex, averageAge) {
    this.age= age;
    this.sex = sex;
    this.averageAge = 80;
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
  lifeExpectancyOnEarth() {
    const yearleftOnEarth = (this.averageAge - this.age);
    return yearleftOnEarth;
  }
  lifeExpectancyOnMercury() {
    const yearleftOnMercury = (this.averageAge + this.sex) - Math.floor((this.age * 365) / 88);
    return yearleftOnMercury;
  }
  lifeExpectancyOnVenus() {
    const yearleftOnVenus = (this.averageAge + this.sex) - Math.floor((this.age * 365) / 226);
    return yearleftOnVenus;
  }
  lifeExpectancyOnMars() {
    const yearleftOnMars = (this.averageAge + this.sex) - Math.floor((this.age * 365) / 686);
    return yearleftOnMars;
  }
  lifeExpectancyOnJupiter() {
    const yearleftOnJupiter = (this.averageAge + this.sex) - Math.floor((this.age * 365) / 4328);
    return yearleftOnJupiter;
  }
}


//2640
//10950
