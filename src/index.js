import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { User } from './business.js';


$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const age = parseInt($('input#age').val());
    let sex = parseInt($('select#sex').val());

    let ageCalculatorOutput = new User(age, sex);
    console.log(ageCalculatorOutput);
    $('#earthYears').text(age);
    $('#earthExpenctany').text(ageCalculatorOutput.lifeExpectancyOnEarth());

    $('#mercuryYears').text(ageCalculatorOutput.lifeOnMercury());
    console.log("this is working");
    $('#mercuryExpenctany').text(ageCalculatorOutput.lifeExpectancyOnMercury());
    console.log("this is also working");
    $('#venusYears').text(ageCalculatorOutput.lifeOnVenus());
    $('#venusExpenctany').text(ageCalculatorOutput.lifeExpectancyOnVenus());

    $('#marsYears').text(ageCalculatorOutput.lifeOnMars());
    $('#marsExpenctany').text(ageCalculatorOutput.lifeExpectancyOnMars());

    $('#jupiterYears').text(ageCalculatorOutput.lifeOnJupiter());
    $('#jupiterExpenctany').text(ageCalculatorOutput.lifeExpectancyOnJupiter());
    $('#results').show();

  });
});
