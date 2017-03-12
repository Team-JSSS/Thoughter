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
      document.querySelector('p').innerText = 'Your blissful thought is dancing amoung angles on clouds!';
      eventObj.target.childNodes[1].value ='';
    });

// This code is for the last part of
    // document.querySelector('form')
    // .addEventListener('submit', function loginPasswordSubmit(eventObj) {
    //     console.log(eventObj); //find real eventObj.address
    //     fetch('https://thoughter.herokuapp.com/api/Author',{
    //       let username = eventObj.target....value;
    //       let password = eventObj.target....value;
    //       let author = {
    //         username = username,
    //         password = password
    //       };
    //       loginPasswordSubmit(author);
    //     });
    // });




  //the following is associated with recent thoughts
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
