import {saveUserData} from './firebase.js';

document.addEventListener('DOMContentLoaded', function() {
  // Se espera el submit del formulario para actualizar la database
  $("#registro").submit(function() {
    var name = $('#nombres').val();
    var surname = $('#apellidos').val();
    var year = $('#fecha_nacimiento').val();
    var location = $('#lugar_nacimiento').val();
    var email = $('#correo').val();
    saveUserData(name, surname, email, year, location);
  });
});