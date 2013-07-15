define(['models/media'], function(Media) {
  window.Medias = Backbone.Collection.extend({
    model: Media,

    initialize : function() {
      console.log('Medias collection Constructor');
      /*this.each(function(m){
      	console.log(json_encode(m));
      });*/
    },

    url: 'http://localhost:8888/my_review_srv/public/medias'
  });

  return Medias;
});