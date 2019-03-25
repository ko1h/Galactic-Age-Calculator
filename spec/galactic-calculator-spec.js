import { User } from './../src/business.js';

describe ('User', function() {

  const sex = new User(1988, 2019, 5, 80);

  it("Should calculate a person age on mercury", function() {
    expect(sex.lifeOnMercury()).toEqual(128);
  });
  it("Should calculate a person age on venus", function() {
    expect(sex.lifeOnVenus()).toEqual(50);
  });
  it("Should calculate a person age on mars", function() {
    expect(sex.lifeOnMars()).toEqual(16);
  });
  it("Should calculate a person age on Jupiter", function() {
    expect(sex.lifeOnJupiter()).toEqual(2);
  });
  it('should subtract average life expectany to how long you live on Venus', function() {
    expect(sex.lifeExpectancyOnVenus()).toEqual(35);
  });
  it('should subtract average life expectany to how long you live on Mars', function() {
    expect(sex.lifeExpectancyOnMars()).toEqual(69);
  });
  it('should subtract average life expectany to how long you live on Jupiter', function() {
    expect(sex.lifeExpectancyOnJupiter()).toEqual(83);
  });
});
