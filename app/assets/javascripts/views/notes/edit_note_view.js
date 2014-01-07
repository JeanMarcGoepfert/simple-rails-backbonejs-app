NotesApp.Views.EditNoteView = Backbone.View.extend({
  className: 'col-md-9 form',
  template: JST['notes/edit-note-template'],
  id: 'edit-note',

  render: function(){
    this.$el.html( this.template( this.model.toJSON() ) );

    return this;
  }
});