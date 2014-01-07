window.NotesApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NotesApp.Views.NotesView();
  }
};

$(document).ready(function(){
  NotesApp.initialize();
});
