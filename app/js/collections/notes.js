define([
  'models/note'
],

function(Note) {
  window.Notes = Backbone.Collection.extend({
    model: Note,
    url: '',

    initialize : function(media_id) {
      //this.media_id = media_id;
      this.constructUrl(media_id);
    },

    constructUrl : function(media_id){
      this.url = "http://localhost:8888/my_review_srv/public/notes/filter/" + media_id;
    }

  });

  return Notes;
});