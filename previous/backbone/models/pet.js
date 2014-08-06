app.Pet = Backbone.Model.extend({

    urlRoot: "",

    initialize: function () {
        this.validators = {};
    },

    defaults: {
        /*
        id: null,
        name: "",
        gender: "",
        age: "",
        size: "",
        activity: "",
        type: "dog",
        country: "USA",
        region: "California",
        details: "",
        DefaultPicture: null,
        PictureGallery : []*/

        id: null,
        name: "",
        grapes: "",
        country: "USA",
        region: "California",
        year: "",
        description: "",
        picture: null
    }
});

app.PetCollection = Backbone.Collection.extend({

    model: app.Pet,
    //url: "api/wines"
    url: ""
});

var Profile = Backbone.Model.extend();
    var ProfileList = Backbone.Collection.extend({
        model: Profile,
        url: '/json/profilefffs.json'
    });