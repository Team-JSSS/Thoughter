(function() {
  'use strict';

  window.thoughtApp = window.thoughtApp || {};


  fetch('https://thoughter.herokuapp.com/api/Thoughts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: 'Here is another thought', authorId: '58bc534499d47e001124898e' })
  });

  fetch('https://thoughter.herokuapp.com/api/Thoughts', {
    method: 'GET',
    headers {
      'Content-Type': 'application/json'
    },
  }).then().filter(20);

  //here's a change to this file! I'm going to push now!



}());
