NotesApp.Views.NotesView = Backbone.View.extend({
  el: '.container',

  events: {
    'click #add-note': 'addNote'
  },

  initialize: function(){
    this.collection = new NotesApp.Collections.Notes();
    this.collection.fetch();
    this.render();
    this.listenTo( this.collection, 'add', this.renderNote );
  },

  render: function(){
    this.collection.each(function( item ){
      this.renderNote( item );
    }, this);
  },

  renderNote: function( item ){
    var noteView = new NotesApp.Views.NoteView({
      model: item
    });

    this.$el.find('#notes').prepend( noteView.render().el );
  },

  addNote: function( e ){
    e.preventDefault();
    var formData = {},
        noteFormFields = this.$el.find('#note-form input, #note-form textarea');

    noteFormFields.each(function( i, el ){
      if( $( el ).val() !== '' ) {
        formData[ el.id ] = $( el ).val();
      }
    });

    this.collection.add( new NotesApp.Models.Note( formData ) ).save();
  }
});