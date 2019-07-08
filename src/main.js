import { DoctorLookup } from './doctor-lookup';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#doctorSearch').click(function() {

    let search = $('#search').val();
    $('#search').val("");

    let doctorLookup = new DoctorLookup();
    let checked = $('#byName').is(":checked");
    let promise = doctorLookup.getDoctor(search=search, name=checked);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let doctorsHtml = '';
      for (var i = 0; i < body.data.length; i++) {
        doctorsHtml += `<div>
        <div><strong>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</strong></div>
        <li><strong>Phone:</strong> ${body.data[i].practices[0].phones[0].number}</li>
        <li><strong>Address:</strong> ${body.data[i].practices[0].visit_address.street}, ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.zip}</li>
        <li><strong>Specialty:</strong> ${body.data[i].specialties[0].name}</li>
        <li>This doctor ${body.data[i].practices[0].accepts_new_patients ? 'is' : 'is not'} accepting new patients.</li>
        <br>
        </div>
        `
      }
      if (body.data.length == 0) {
        doctorsHtml = `Sorry, no search results.`
      }
      $('.doctorsHtml').html(doctorsHtml);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

  });
});
