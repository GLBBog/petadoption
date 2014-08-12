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
        vaccinated : "true",
        details: "",
        DefaultPicture: null,
        Gallery : [],
        ContactName: "",
        ContactEmail : "",
        ContactPhone : "",
        ContactAddress : "",
        ContactZip: ""
    }
});

window.PetCollection = Backbone.Collection.extend({
    model: Pet,
    url: "",

    byType: function (type) {
        filtered = this.filter(function (pet) {
            return pet.get("type") === type;
        });
        return new PetCollection(filtered);
    }

});