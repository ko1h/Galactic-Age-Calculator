import { User } from './../src/user.js';

describe ('User', function() {
  const age = new User('30');


  it("Should calculate a person age on mercury", function() {
    expect(age.lifeOnMercury()).toEqual(124);
  });
  it("Should calculate a person age on venus", function() {
    expect(age.lifeOnVenus()).toEqual(48);
  });
  it("Should calculate a person age on mars", function() {
    expect(age.lifeOnMars()).toEqual(15);
  });
});
