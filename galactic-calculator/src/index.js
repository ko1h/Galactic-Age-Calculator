import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
// import { AgeCalendar } from './galactic-calculator.js';


$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    var dateInput = $('input#birthday').val();
    // let sexInput = $('select#space-gender').val();
    // let newAgeCalculator = new AgeCalculator (dateInput);
    var today = dateInput.getDay();
    // let birthdayInput = new Date(dateInput);
    console.log(today);


  });

});
