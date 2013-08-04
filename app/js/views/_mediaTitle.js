define([],

function() {

    window.MediaTitleView = Backbone.View.extend({
        el : $('#media_title'),
        initialize : function(data) {
            this.model = data;
            console.log(data.get("name"));
            this.template = _.template($('#media_title_template').html());
            _.bindAll(this, 'render');
            window.collection.bind('change', this.render);
            window.collection.bind('add', this.render);

        },

        render : function() {

            var renderedContent = this.template({
                media: window.model
            });

            this.$el.html(renderedContent);
            
        }   
    })

});