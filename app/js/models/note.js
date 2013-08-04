define(function() {

  window.Note = Backbone.Model.extend({
    defaults: {
      id: '',
      media_id: '',
      title: '',
      content: ''
    },

    initialize : function Note() {
      //console.log('Note Constructor');
    },

    url: 'note'
  });

  return Note;
});