(function() {
  'use strict';

  window.thoughtApp = window.thoughtApp || {};

  /**
   * Creates HTML elements from array of data retreived from API
   * @param  {Array} data Recent thoughts retrieved from API
   * @return {void}
   */
  window.thoughtApp.buildList = function buildList(data) {
    data.forEach(function createThoughts(thought) {

      let dateAndTime = new Date(thought.createTime);
      let date = ( (dateAndTime.getMonth() + 1) + '/' + dateAndTime.getDate() + '/' + dateAndTime.getFullYear() );
      console.log( date );
      let time = ( (dateAndTime.getHours()) + ':' + (dateAndTime.getMinutes()) );
      console.log(time);

      $( 'main' )
        .append( `<section class="panel panel-info">

          <aside class="panel-heading">
            <!-- set margin on asides to 0 -->
            <h3 class="panel-title">Posted at ${time} on ${date}</h3>

          </aside>
          <aside class="panel-body">
            <p>${thought.content}</p>
          </aside>
        </section>` );

    });

  };

  /**
   * Retrieves data from the API, Ajax call
   * @return {Promise} Verifies status and converts data back to json format
   */
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
          console.log('We could not complete your request', response.status);
        }
      });
    });
  };


  window.thoughtApp.getThoughts();

}());
