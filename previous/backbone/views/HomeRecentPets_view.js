app.HomePets_View = Backbone.View.extend({
    el: '.page1',

    initialize: function () {
        // GET THE LOCAL STORAGE DATA
        //app.pets_collection.fetch();
        this.render();
    },

    render: function () {
       /* this.$el.html('inside home : recent pets list');
        console.log('rendering home list !');

        var list_pets;

        // RENDER PRODUCTS LIST VIEW
        list_pets = new app.HomePets_View();
        list_pets.render(app.pets_collection); */ 
    }
});
app.HomeRecentPets_view = new app.HomePets_View();
