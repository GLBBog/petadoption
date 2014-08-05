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

    }
});

app.router = new app.Router();
Backbone.history.start();