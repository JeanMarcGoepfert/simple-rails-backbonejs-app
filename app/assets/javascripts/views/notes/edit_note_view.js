NotesApp.Views.EditNoteView = Backbone.View.extend({
  className: 'col-md-9 form',
  template: _.template( $('#edit-note').html() ),

  render: function(){
    this.$el.html( this.template( this.model.toJSON() ) );

    return this;
  }
});