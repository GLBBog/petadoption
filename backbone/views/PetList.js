app.PetListView = Backbone.View.extend({

    initialize: function () {
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
app.PetListView = new app.PetListView();
