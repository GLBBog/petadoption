app.Pet = Backbone.Model.extend({

    urlRoot: "",

    initialize: function () {
        this.validators = {};
    },

    defaults: {
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
        PictureGallery : []
    }
});

app.PetCollection = Backbone.Collection.extend({

    model: app.Pet,
    //url: "api/wines"
    url: ""
});

