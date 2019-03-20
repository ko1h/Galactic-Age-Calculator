export class User {

  constructor(day) {
    this.day= day;
  }

  lifeOnMercury() {
    const ageMercury = Math.floor((this.day * 365) / 88);
    return ageMercury;
  }
  lifeOnVenus() {
    const ageVenus = Math.floor((this.day * 365) / 226);
    return ageVenus;
  }
  lifeOnMars() {
    const ageMars = Math.floor((this.day * 365) / 686);
    return ageMars;
  }
  lifeOnJupiter() {
    const ageJupiter = Math.floor((this.day * 365) / 4328);
    return ageJupiter;
  }
}


//2640
//10950
