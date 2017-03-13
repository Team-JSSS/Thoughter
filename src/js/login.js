(function() {
  'use strict';
  window.thoughtApp = window.thoughtApp || {};

  $('form.login')
    .on('submit', function loginPasswordSubmit(eventObj) {
      eventObj.preventDefault();
        console.log(eventObj); //find real eventObj.address

        let username = $('#username-input').val();  // this is the same as $(...)[0].value
        console.log(username);

        let password = $('#password-input').val();
        console.log(password);

        // PHASE TWO: separate this to it's on JS file since it's DATA work, not UI
        fetch('https://thoughter.herokuapp.com/api/Authors/login', {
          method: 'POST',
          dataType: 'json',

          body: JSON.stringify({
            'username': username,
            'password': password,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function handleResponse(response) {
          if(response.status > 199 && response.status < 300) {
            console.log('SUCCESS ' + response.status);

            response.json().then(function printData(data) {
              window.thoughtApp.user = data;
              console.log(data);
            });
          } else {
            console.log('Error ' + response.status);
          }
        });
      });
}());
