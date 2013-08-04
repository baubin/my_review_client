define([
  'collections/medias',
  //'collections/notes',
  'models/currentMedia',
  'views/principal'
],

function() {

  var App = function() {

    window.currentMedia = new CurrentMedia();
  	
    window.mediasData = new Medias();
  	mediasData.fetch({
      success: function(){
        //window.notesData = new Notes(2);
        //notesData.fetch({
          //success: function(){
            window.principalView = new PrincipalView({
              medias: mediasData,
              //notes: notesData
            });
            principalView.render();
          //}
        //});
      }
    });
            


    //window.mainView = new MainView();
    //mainView.render();
    
	
  };

  App.prototype = {
  };

  return App;
});