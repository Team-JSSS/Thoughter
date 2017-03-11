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

  window.thoughtApp.getThoughts = function getThoughts() {
    fetch(
      'https://thoughter.herokuapp.com/api/Thoughts?filter={"limit":20}',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function responseHandler(response) {
      response.json().then(function getData(data) {
        // call a function...
        window.thoughtApp.buildList(data);
      });
    });
  };


  window.thoughtApp.getThoughts();
}());
