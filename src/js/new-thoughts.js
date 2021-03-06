(function() {
  'use strict';

  window.thoughtApp = window.thoughtApp || {};

/**
 * blocking default on thought submit button on new-thoughts.html page
 * outputting the response in this format:
authorId:null
content:"Thoughts are like rays of sunshine"
createTime:"2017-03-10T18:26:56.703Z"
id:"58c2eff0d3cb430011fc484c"
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

      let confirmNewThoughtSubmission = document.createElement('p');
      document.querySelector('form').appendChild(confirmNewThoughtSubmission);
      document.querySelector('p').style.display = 'block';
      document.querySelector('new-thoughts-paragraph').innerText = 'Your blissful thought is dancing amoung angles on clouds!';
      eventObj.target.childNodes[1].value ='';
    });



}());
