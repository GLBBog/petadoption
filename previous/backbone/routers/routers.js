app.Router = Backbone.Router.extend({

    routes: {
        '': 'home',
        'pets/:id': "petDetails"
    },

    initialize: function () {
        /*
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);*/
    },

    home: function (page) {

        var p = page ? parseInt(page, 10) : 1;
        var petList = new app.PetCollection();

        console.log('ewewew');
        console.log(petList);

        petList.fetch({ success: function () {
            $("#content").html(new app.PetListView({ model: petList, page: p }).el);
        } 
        });
        //this.headerView.selectMenuItem('home-menu');

    }
});

app.router = new app.Router();
Backbone.history.start();