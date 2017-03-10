(function() {
  'use strict';

  window.thoughtApp = window.thoughtApp || {};


/**
 *
 */
  document.querySelector('form')
    .addEventListener('submit', function addNewThought(eventObj){
      eventObj.preventDefault();
      console.log(eventObj.target.childNodes[1].value);

      fetch('https://thoughter.herokuapp.com/api/Thoughts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: eventObj.target.childNodes[1].value
        })
      }).then( function handleResponse( responseObject ){
        if (responseObject.status > 199 && responseObject.status < 300){
          responseObject.json().then( function printData(thoughts){
            console.log(thoughts);
          });
        }
      });
    });

}());
