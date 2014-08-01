app.HomeRecentPets = Backbone.View.extend({
    el: '.page',
    render: function () {
        this.$el.html('inside home : recent pets list');
        console.log('rendering home list');
    }
});


app.HomeRecentPets_view = new app.HomeRecentPets();

