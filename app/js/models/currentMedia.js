define(function() {

  window.CurrentMedia = Backbone.Model.extend({
    defaults: {
      id: '',
      type: '',
      name: '',
      url: '',
      description: ''
    },

    initialize : function CurrentMedia() {
      //console.log('CurrentMedia Constructor');
    },

    url: 'currentMedia'
  });

  return CurrentMedia;
});