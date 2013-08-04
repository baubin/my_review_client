define([],

function() {

    window.TopFormView = Backbone.View.extend({
        el : $('#top_form'),
        initialize : function() {

            this.template_add_note = _.template($('#add_note_template').html());
            this.template_new_media_form = _.template($('#new_media_form_template').html());
            this.template_edit_media_form = _.template($('#edit_media_form_template').html());

        },

        events: {
            "click .add_note_submit_button": "create_note",
            "click .new_media_submit_button": "new_media"
        },

        create_note: function(e) {

            e.preventDefault();
            var id = $(e.currentTarget).attr("id");
            console.log("add_note_submit_button hit for media "+id+"!");
            
        },

        new_media: function(e) {

            e.preventDefault();
            console.log("new_media_submit_button hit!");
            
        },

        render : function(type, id, media) {

            if(type == null){
                this.$el.html("");
            }else{
                //var param = data.split("_");
                //var type = type;
                //var id = id;
                if(type == "editMediaForm"){
                    var renderedContent = this.template_edit_media_form({
                        type: media.get("type"),
                        name: media.get("name"),
                        url: media.get("url"),
                        description: media.get("description")
                    });
                }else if (type == "newMediaForm"){
                    var renderedContent = this.template_new_media_form({});
                }else if (type == "newNoteForm"){
                    var renderedContent = this.template_add_note({
                        id: id
                    });
                }
            }

            /*if(data == "edit_media_form"){
                var renderedContent = this.template_edit_media_form({});
            }else if(data == "new_media_form"){
                var renderedContent = this.template_new_media_form({});
            }else if(data == null){
                this.$el.html("");
            }else{
                var renderedContent = this.template_add_note({
                    id: data
                });
            }*/

            this.$el.html(renderedContent);
            
        }   
    })

});