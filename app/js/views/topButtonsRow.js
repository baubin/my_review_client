define([
  'views/topForm'
],

function() {

    window.TopButtonsRowView = Backbone.View.extend({
        el : $('#top_buttons_row'),
        add_note_flag : 'false',

        initialize : function() {
            //this.media_id = data;
            this.template = _.template($('#media_buttons_template').html());
            window.topFormView = new TopFormView();

        },

        events: {
            "click .add_note_button": "add_note"
        },

        add_note: function(e) {

            e.preventDefault();
            if(this.add_note_flag == 'false'){
                this.id_event = $(e.currentTarget).attr("id");
                window.topFormView.render("newNoteForm", this.id_event, null);
                this.add_note_flag = 'true';
            }else{
                window.topFormView.render(null);
                this.add_note_flag = 'false';
            }
            
        },

        render : function(media_id) {

            if(media_id == null){

                this.$el.html("");

            }else{

                var renderedContent = this.template({
                    id: media_id
                });

                this.$el.html(renderedContent);
                
            }

        } 
    })

});