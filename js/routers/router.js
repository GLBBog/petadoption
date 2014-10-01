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

        $.getJSON('./data/jpets.json')
            .done(function (data) {
                window.petList = new PetCollection(data);
                $("#content").html(new PetListView({ model: window.petList, page: p }).el);
                localStorage.setItem("PetList", JSON.stringify(window.petList));
            });
    },

    listPage: function (page) {

        var p = page ? parseInt(page, 10) : 1;

            if (window.TypePetSession !== undefined)
                window.petList = window.petList.byType(window.TypePetSession);

            $("#content").html(new PetListView({ model: window.petList, page: p }).el);

    },

    petDetails: function (id) {

        $("#content").html(new PetView({ model: window.petList.byId(id) }).el);
    },

    addPet: function () {
        $("#content").html(new PetPublishView({ model: window.petList }).el);
    }
});

utils.loadTemplate(['PetView', 'PetListItemView', 'PetPublishView'], function() {
    });
    app = new app.AppRouter();
    Backbone.history.start();