import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import { AgeCalendar } from './galactic-calculator.js';


$(document).ready(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();
    let dateInput = $('#birthday').val();
    let sexInput = $('#space-gender').val();
    let newAgeCalculator = new AgeCalculator (dateInput, sexInput);
    let birthdayInput = new Date(dateInput);

    
  });

});
