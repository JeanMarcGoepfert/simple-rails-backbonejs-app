NotesApp.Views.NoteView = Backbone.View.extend({

  className: 'col-md-12 note',
  template: JST['notes/note-template'],
  id: 'note-template',

  events: {
    'click .delete-note' : 'deleteNote',
    'click .edit-note'   : 'editNote',
    'click .save-note'   : 'saveNote'
  },

  render: function(){
    this.$el.html( this.template( this.model.toJSON() ) );

    return this;
  },

  deleteNote: function( e ){
    e.preventDefault();
    this.model.destroy();
    this.$el.slideUp(100, function(){
        this.remove();
    });
  },

  editNote: function( e ){
    e.preventDefault();
    var editNoteView = new NotesApp.Views.EditNoteView({
        model: this.model
    });

    this.$el.find('.row').prepend( editNoteView.render().el );

    this.$el.find('.edit-note').toggleClass('edit-note btn-default save-note btn-success').text('Save Note');
    this.$el.find('.text').remove();
    this.$el.find('.form input').focus();
  },

  saveNote: function( e ){
    e.preventDefault();
    var updatedValues = {},
        editFields = this.$el.find('input, textarea');

    editFields.each(function(i, el){
        if ( $( el ).val() !== '' ) {
            updatedValues[ el.id ] = $( el ).val();
        }
    });

    this.model.save({
        title: updatedValues.title,
        details: updatedValues.details
    });

    this.render();
  }

});
