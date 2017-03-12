(function() {
  'use strict';

  window.thoughtApp = window.thoughtApp || {};

  // make me a fucntion HERE that I can access in another file!
  
  // the following is associated with recent thoughts
  window.thoughtApp.buildList = function buildList(data) {
    data.forEach(function createThoughts(thought) {
      $( 'main' )
        .append( `<section class="panel panel-info">

          <aside class="panel-heading">
            <!-- set margin on asides to 0 -->
            <h3 class="panel-title">Posted at [insert time here] on [date]</h3>

          </aside>
          <aside class="panel-body">
            <p>${thought.content}</p>
          </aside>
        </section>` );
    });

  };


}());
