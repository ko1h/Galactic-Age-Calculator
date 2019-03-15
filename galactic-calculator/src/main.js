import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';


$(document).ready(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();
    let monthInput = parseInt($('#month').val());
    let dayInput = parseInt($('#day').val());
    let yearInput = parseInt($('#year').val());
    let birthday = new Date(month, day, year);
  });

});
