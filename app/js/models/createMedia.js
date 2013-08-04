define(function() {

  window.Media = Backbone.Model.extend({
    defaults: {
      id: '',
      type: '',
      name: '',
      url: '',
      description: ''
    },

    initialize : function Media() {
      //console.log('Media Constructor');
    },

    url: 'http://localhost:8888/my_review_srv/public/medias'
  });

  return Media;
});