import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import { AgeCalendar } from './galactic-calculator.js';


$(document).ready(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();
    let monthInput = parseInt($('#month').val());
    let dayInput = parseInt($('#day').val());
    let yearInput = parseInt($('#year').val());

    const newCombine = combine(newMonth, newDay, newYear)
    let birthday = new Date(newCombine);
  });

});
