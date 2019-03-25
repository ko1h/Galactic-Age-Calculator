export class User {

  constructor(year, todayYear, sex, averageAge) {
    this.year= year;
    this.todayYear = todayYear;
    this.sex = sex;
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
    let yearleftOnEarth = ((this.averageAge + this.sex) - this.userAge());
    if (yearleftOnEarth <= 0) {
      return ("You actually passed away" + " " + Math.abs(yearleftOnEarth) +  " years ago");
    } else {
      return yearleftOnEarth;
    }
  }
  lifeExpectancyOnMercury() {
    const yearleftOnMercury = (this.averageAge + this.sex) - Math.floor((this.userAge() * 365) /88);
    if (yearleftOnMercury <= 0) {
      return ("You actually passed away" + " " + Math.abs(yearleftOnMercury) +  " years ago");
    } else {
      return yearleftOnMercury;
    }
  }
  lifeExpectancyOnVenus() {
    const yearleftOnVenus = (this.averageAge + this.sex) - Math.floor((this.userAge() * 365) / 226);
    if (yearleftOnVenus <= 0) {
      return ("You actually passed away" + " " + Math.abs(yearleftOnVenus) +  " years ago");
    } else {
      return yearleftOnVenus;
    }
  }
  lifeExpectancyOnMars() {
    const yearleftOnMars = (this.averageAge + this.sex) - Math.floor((this.userAge() * 365) / 686);
    if (yearleftOnMars <= 0) {
      return ("You actually passed away" + " " +  Math.abs(yearleftOnMars) +  " years ago");
    } else {
      return yearleftOnMars;
    }
  }
  lifeExpectancyOnJupiter() {
    const yearleftOnJupiter = (this.averageAge + this.sex) - Math.floor((this.userAge() * 365) / 4328);
    if (yearleftOnJupiter <= 0) {
      return ("You actually passed away" + " " + Math.abs(yearleftOnJupiter) +  " years ago");
    } else {
      return yearleftOnJupiter;
    }
  }
}


//2640
//10950
