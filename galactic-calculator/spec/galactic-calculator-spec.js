import { User } from './../src/user.js';

describe ('User', function() {
  const age = new Date('1988, 6, 27');
  const test = new Date('2019, 3, 14');

  beforeEach(function () {
    testAge = new User(age, test);
  })


  it("Should calculate a person age on earth", function() {
    expect(testAge.totalMilliSecAlive()).toEqual(30);
  });
  it("Should calculate a person age on earth", function() {
    expect(testAge.totalEarthDays()).toEqual(30);
  });
  it("Should calculate a person age on earth", function() {
    expect(testAge.ageEarth()).toEqual(30);
  });
});
