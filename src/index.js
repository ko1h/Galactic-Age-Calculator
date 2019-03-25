import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { User } from './business.js';


$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const year = parseInt($('input#year').val());
    let sex = parseInt($('select#sex').val());
    let today = new Date();
    let todayYear = today.getFullYear();
    console.log(todayYear);

    let ageCalculatorOutput = new User(year, todayYear, sex);
    console.log(ageCalculatorOutput);
    $('#earthYears').text(ageCalculatorOutput.userAge());
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
