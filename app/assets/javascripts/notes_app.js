window.NotesApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NotesApp.Views.NotesView();
    console.log('here');
  }
};

$(document).ready(function(){
  NotesApp.initialize();
});
