define([
  'collections/medias'
],

function() {

  var App = function() {
  	
  	var medias = new Medias();
  	medias.fetch();
	
  };

  App.prototype = {
  };

  return App;
});