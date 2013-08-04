define([],

function() {

    window.NewMediaView = Backbone.View.extend({

        el : $('#new_media_form'),
        
        initialize : function() {


        },

        events: {
            "click .create_media_button": "create_media"
        },

        create_media: function(e) {

            e.preventDefault();
            console.log("create_media_button hit! For note: ");
            
        },

        render : function() {

            var renderedContent = this.template({});

            this.$el.html(renderedContent);
            
        }   
    })

});