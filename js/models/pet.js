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
        breed : "",
        region: "",
        vaccinated : "true",
        details: "",
        DefaultPicture: null,
        Gallery : [],
        ContactName: "",
        ContactEmail : "",
        ContactPhone : "",
        ContactPhone2 : "",
        ContactAddress : "",
        ContactZip: ""
    }
});

window.PetCollection = Backbone.Collection.extend({
    model: Pet,
    url: "./data/jpets.json",

    byType: function (type) {
        filtered = this.filter(function (pet) {
            return pet.get("type") === type;
        });
        return new PetCollection(filtered);
    },
    byId: function (id) {
        filtered = this.filter(function (pet) {
            return pet.get("id") == id;
        });
        return new PetCollection(filtered);
    }

});