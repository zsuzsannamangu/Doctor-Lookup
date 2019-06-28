import { DoctorLookup } from './../src/doctor-lookup';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#doctorSpecialty').click(function() {

    let doctor_uid = '333d4bb6fcf640e18e93b11b00fe09eb';

    let medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");

    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorBySpecialty(medicalIssue);

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showName').text(`${body.main.name}%`);
      $('.showPhone').text(`${body.main.phones}%`);
      $('.showAddress').text(`${body.main.visit_address}%`);
      $('.showSpecialties').text(`${body.main.specialties}%`);
      $('.showAccept').text(`This doctor ${body.main.accepts_new_patients}.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

  });

  $('#doctorName').click(function() {

    let doctor_uid = '333d4bb6fcf640e18e93b11b00fe09eb';

    let name = $('#name').val();
    $('#name').val("");

    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.getDoctorByName(name);

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showName').text(`${body.main.name}%`);
      $('.showPhone').text(`${body.main.phones}%`);
      $('.showAddress').text(`${body.main.visit_address}%`);
      $('.showSpecialties').text(`${body.main.specialties}%`);
      $('.showAccept').text(`This doctor ${body.main.accepts_new_patients}.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

  });
});
