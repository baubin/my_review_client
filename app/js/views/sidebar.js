define([
  'collections/notes',
  'views/main',
  'views/topButtonsRow'
],

function() {

    window.SidebarView = Backbone.View.extend({
        el : $('#sidebar'),
        medias: new Medias(),

        initialize : function(data) {

            this.medias = data;
            this.template = _.template($('#sidebar_template').html());

            window.topFormView = new TopFormView();
            window.topButtonsRowView = new TopButtonsRowView();
            window.mainView = new MainView();
            //this.template = _.template(tmpl);

        },

        events: {
            "click .menu": "changeMenu",
            "click .add_media_button": "addMediaForm",
            "click .edit_media_button": "editMediaForm",
            "click .delete_media_button": "deleteMedia"
        },

        addMediaForm: function(e){

            e.preventDefault();
            topFormView.render("newMediaForm", null, null);
            topButtonsRowView.render(null);
            mainView.render(null);

        },

        editMediaForm: function(e){

            e.preventDefault();
            var media_id = $(e.currentTarget).attr("id");
            media = this.medias.get(media_id);
            topFormView.render("editMediaForm", media_id, media);
            topButtonsRowView.render(null);
            mainView.render(null);

        },

        deleteMedia: function(e){

            e.preventDefault();
            var media_id = $(e.currentTarget).attr("id");
            console.log("Delete media "+media_id);

        },

        changeMenu: function(e) {
            e.preventDefault();
            window.media_id = $(e.currentTarget).attr("id");
            window.notesData = new Notes(window.media_id);

            topFormView.render(null);
            topButtonsRowView.render(null);
            mainView.render(null);

            notesData.fetch({
                success: function(){

                    // Create Media Buttons View
                    window.topButtonsRowView.render(window.media_id);

                    // Create Notes View
                    window.mainView.render(window.notesData);

                    //window.currentMedia = new Media();
                    //window.currentMedia = this.medias.get(id);
                    //console.log("Title: "+window.currentMedia.get("title"));
                    //this.mediaTitleView = new MediaTitleView(currentMedia);
                    //this.mediaTitleView.render();
                }
            });

            
        },

        render : function() {

            var renderedContent = this.template({
                medias: this.medias.models
            });

            this.$el.html(renderedContent);

            window.mainView.render(0);


            /*this.collection.each(function(media) {
              console.log(media.get("name"));
            })*/
            

            /*var html = "";
            $(this.el).html(""); // empty the div
            this.collection.each(function(model) {
              html += [
                '<b>' + model.get('type') + ' - ' + model.get('name') + '</b><br>',
                '<i>'+ model.get('url') + '</i><br><hr>'

              ].join("");
            })

            $(this.el).append(html);
            */

        }   
    })

});