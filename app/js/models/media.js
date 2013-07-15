define(function() {

  window.Media = Backbone.Model.extend({
    defaults: {
      type: '',
      name: '',
      url: ''
    },

    initialize : function Media() {
      console.log('Media Constructor');
    },

    url: 'media'
  });

  return Media;
});