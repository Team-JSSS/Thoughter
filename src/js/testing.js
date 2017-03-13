(function() {
  'use strict';

$('form.loginForm').on('submit', function loginSubmit() {
  console.log('thingy');
  fetch('https://thoughter.herokuapp.com/api/Authors/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'username': 'username-input',
      'password': 'password-input'
    }
    .then(function loginThingyWTF() {
      //get the authentication stuff back from the api here
    })
  });

});



}());
