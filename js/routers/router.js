app.AppRouter = Backbone.Router.extend({

    routes: {
        "": "list",
        "pets/page/:page": "list",
        "pets/:id": "petDetails"
    },

    initialize: function () {
    },

    list: function (page) {
        var p = page ? parseInt(page, 10) : 1;
        var petList = new PetCollection();

        petList.fetch({ success: function () {
                petList = petList.byType("dog");
                $("#content").html(new PetListView({ model: petList, page: p }).el);
            } 
        });
    },

    petDetails: function (id) {
        var pet = new Pet({ id: id });
        pet.fetch({ success: function () {
                $("#content").html(new PetView({ model: pet }).el);
            } 
        });
    },

    addPet: function () {
        var pet = new Pet();
        $('#content').html(new PetView({ model: pet }).el);
    }
});

utils.loadTemplate(['PetView', 'PetListItemView'], function() {
    app = new app.AppRouter();
    Backbone.history.start();
});