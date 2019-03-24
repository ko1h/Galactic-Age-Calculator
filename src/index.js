import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { User } from './business.js';


$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let ageInput = $('input#age').val();
    let sexInput = $('select#sex').val();

    let ageCalculatorOutput = new User(ageInput, sexInput);


  });
});
