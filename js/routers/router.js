app.AppRouter = Backbone.Router.extend({

    routes: {
        "": "list",
        "pets/page/:page": "list",
        "pets/:id": "petDetails",
        "publish": "addPet"
    },

    initialize: function () {

    },

    list: function (page) {

        var p = page ? parseInt(page, 10) : 1;

        var typesList = new TypeCollection();
        
        typesList.add([{ name: 'Dog' }, { name: 'Cat' }, { name: 'Other'}]);
        var l = new TypesListView({ model: typesList, page: p });

        var petList = new PetCollection();
        petList.fetch({ success: function () {
            $("#content").html(new PetListView({ model: petList, page: p }).el);
        }
        });
    },

    petDetails: function (id) {

        var petList = new PetCollection();

        petList.fetch({ success: function () {
            petList = petList.byId(id);
            $("#content").html(new PetView({ model: petList }).el);
        }
        });
    },

    addPet: function () {
        console.log('publishing...');
        //var pet = new Pet();
        //$('#content').html(new PetView({ model: pet }).el);
    }
});

utils.loadTemplate(['PetView', 'PetListItemView'], function() {
    app = new app.AppRouter();
    Backbone.history.start();
});