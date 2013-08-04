define([],

function() {

    window.MainView = Backbone.View.extend({

        el : $('#main'),
        
        initialize : function() {

            window.collection = new Medias();
            this.template_no_media = _.template($('#no_media_template').html());
            this.template = _.template($('#notes_list_template').html());
            _.bindAll(this, 'render');
            window.collection.bind('change', this.render);
            window.collection.bind('add', this.render);
            
        },

        events: {
            "click .delete_note_button": "delete_note"
        },

        delete_note: function(e) {

            e.preventDefault();
            console.log("delete_note_button hit! For note: "+$(e.currentTarget).attr("id"));
            
        },

        render : function(data) {

            if(data == null){

                this.$el.html("");
                
            }else if(data == 0){

                window.collection = this;

                var renderedContent = this.template_no_media({
                    notes: window.collection.models
                });

                this.$el.html(renderedContent);
            //    var renderedContent = this.template({});
            //    this.$el.html(renderedContent);
            }else{
                

                window.collection = data;
                var renderedContent = this.template({
                    notes: window.collection.models
                });

                this.$el.html(renderedContent);

            }
            
        }   
    })

});