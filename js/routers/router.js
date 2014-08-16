app.AppRouter = Backbone.Router.extend({

    routes: {
        "": "list",
        "pets/page/:page": "listPage",
        "pets/:id": "petDetails",
        "publish": "addPet"
    },

    initialize: function () {
        //var storeVar = localStorage["PetList"];
        //if (storeVar !== undefined)
        //  console.log(storeVar);

    },

    list: function (page) {

        var p = page ? parseInt(page, 10) : 1;

        var typesList = new TypeCollection();
        typesList.add([{ name: 'Dog' }, { name: 'Cat' }, { name: 'Other'}]);
        var l = new TypesListView({ model: typesList, page: p });

        $.getJSON('./data/jpets.json')
                                        .done(function (data) {
                                            var myPets = new PetCollection();
                                            myPets.fetch();
                                            if (!myPets.length > 0) {
                                                for (var i = 0; i < data.length; i++) {
                                                    var note1 = new window.Pet()
                                                    note1.attributes = data[i];
                                                    myPets.add(note1);
                                                    note1.save();
                                                }
                                            }
                                            $("#content").html(new PetListView({ model: myPets, page: p }).el);
                                        });
/*
        if (window.petList === undefined) {
            $.getJSON('./data/jpets.json')
                .done(function (data) {
                    window.petList = new PetCollection(data);
                    //localStorage.setItem("PetList", JSON.stringify(window.petList));
                    //console.log('from local' + JSON.stringify(localStorage["PetList"]));
                    //console.log('window.petList' + window.petList);
                    
                    //adding key by pet
                    for (var j = 0; j < window.petList.length - 1; j++) {
                        localStorage.setItem('PetList' + '-' + j, JSON.stringify(window.petList.models[j]));
                    }

                    $("#content").html(new PetListView({ model: window.petList, page: p }).el);
                });
        }*/
    },

    listPage: function (page) {

        var p = page ? parseInt(page, 10) : 1;

        var myPets = new PetCollection();
        myPets.fetch();

        if (window.TypePetSession !== undefined)
            myPets = myPets.byType(window.TypePetSession);

        $("#content").html(new PetListView({ model: myPets, page: p }).el);

    },

    petDetails: function (id) {

        var myPets = new PetCollection();
        myPets.fetch();

        $("#content").html(new PetView({ model: myPets.byId(id) }).el);
    },

    addPet: function () {

        var myPets = new PetCollection();
        myPets.fetch();

        $("#content").html(new PetPublishView({ model: myPets }).el);
    }
});

utils.loadTemplate(['PetView', 'PetListItemView', 'PetPublishView'], function() {
    app = new app.AppRouter();
    Backbone.history.start();
});