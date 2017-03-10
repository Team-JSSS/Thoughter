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

}());
