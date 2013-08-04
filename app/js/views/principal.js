define([
  'views/sidebar'
],

function() {

    window.PrincipalView = Backbone.View.extend({

        initialize : function() {
            this.sidebarView = new SidebarView(this.options.medias);
            //this.notesView = new NotesView(this.options.notes);
            //this.notesView = new NotesView();

        },

        render : function() {

            this.sidebarView.render();
            //this.notesView.render();
            
        }   
    })

});