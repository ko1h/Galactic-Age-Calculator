import { User } from './../src/user.js';

describe ('User', function() {
  const age = new User(30);

  const sex = new User(30, 5, 80);



  it("Should calculate a person age on mercury", function() {
    expect(age.lifeOnMercury()).toEqual(124);
  });
  it("Should calculate a person age on venus", function() {
    expect(age.lifeOnVenus()).toEqual(48);
  });
  it("Should calculate a person age on mars", function() {
    expect(age.lifeOnMars()).toEqual(15);
  });
  it('should subtract average life expectany to how long you live on Venus', function() {
    expect(sex.lifeExpectancyOnVenus()).toEqual(37);
  });
  it('should subtract average life expectany to how long you live on Mars', function() {
    expect(sex.lifeExpectancyOnMars()).toEqual(37);
  });
  it('should subtract average life expectany to how long you live on Jupiter', function() {
    expect(sex.lifeExpectancyOnJupiter()).toEqual(37);
  });
});
