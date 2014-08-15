app.AppRouter = Backbone.Router.extend({

    routes: {
        "": "list",
        "pets/page/:page": "listPage",
        "pets/:id": "petDetails",
        "publish": "addPet"
    },

    initialize: function () {
        var storeVar = localStorage["PetList"];
        if (storeVar !== undefined)
            console.log(storeVar);

    },

    list: function (page) {

        var p = page ? parseInt(page, 10) : 1;

        var typesList = new TypeCollection();
        typesList.add([{ name: 'Dog' }, { name: 'Cat' }, { name: 'Other'}]);
        var l = new TypesListView({ model: typesList, page: p });

        var petList = new PetCollection();
        petList.fetch({ success: function () {
                $("#content").html(new PetListView({ model: petList, page: p }).el);
                localStorage.setItem("PetList", JSON.stringify(petList));
            }
        });
    },

    listPage: function (page) {

        var p = page ? parseInt(page, 10) : 1;

        var petList = new PetCollection();
        petList.fetch({ success: function () {

            if (window.TypePetSession !== undefined)
                petList = petList.byType(window.TypePetSession);

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
        var petList = new PetCollection();

        petList.fetch({ success: function () {
            $("#content").html(new PetPublishView({ model: petList }).el);
        }
        });
    }
});

utils.loadTemplate(['PetView', 'PetListItemView', 'PetPublishView'], function() {
    app = new app.AppRouter();
    Backbone.history.start();
});