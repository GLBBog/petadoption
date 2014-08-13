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
        var typesList = new TypeCollection();
        console.log('typesList ' + typesList);
        typesList.add([{ name: 'Dog' }, { name: 'Cat' }, { name: 'Other'}]);
        var l = new TypesListView({ model: typesList, page: p })

        var petList = new PetCollection();
        petList.fetch({ success: function () {
            /*petList = petList.byType("dog");*/

            console.log(utils.asString(petList));

            $("#content").html(new PetListView({ model: petList, page: p }).el);
        }
        });
    },

    petDetails: function (id) {
        //var pet = new Pet({ id: id });

        var petList = new PetCollection();

        console.log('pet id ' + id);

        petList.fetch({ success: function () {

            petList = petList.byId(id);
            console.log(utils.asString(petList));

            $("#content").html(new PetView({ model: petList }).el);

            //console.log('pet ' + utils.asString(petList));
            //$("#content").html(new PetView({ model: petList }).el);
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