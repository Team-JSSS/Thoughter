(function() {
  'use strict';

  window.thoughtApp = window.thoughtApp || {};

  window.thoughtApp.buildList = function buildList(data) {
    data.forEach(function createThoughts(thought) {

      $( 'main' )
        .append( `<section class="panel panel-info">

          <aside class="panel-heading">
            <!-- set margin on asides to 0 -->
            <h3 class="panel-title">Posted at ${thought.createTime}</h3>

          </aside>
          <aside class="panel-body">
            <p>${thought.content}</p>
          </aside>
        </section>` );

    });

  };

  window.thoughtApp.getThoughts = function getThoughts() {
    fetch(
      'https://thoughter.herokuapp.com/api/Thoughts?filter={"order":"createTime DESC", "limit":20}',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function responseHandler(response) {
      response.json().then(function getData(data) {
        if (response.status > 199 && response.status < 300) {
          // call a function...
          window.thoughtApp.buildList(data);
        } else {
          console.log('We could not complete your request', reponse.status);
        }
      });
    });
  };


  window.thoughtApp.getThoughts();

}());
