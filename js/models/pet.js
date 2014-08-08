window.Pet = Backbone.Model.extend({

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
        Gallery : []
    }
});

window.PetCollection = Backbone.Collection.extend({
    model: Pet,
    url: ""
});