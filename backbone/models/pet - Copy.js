window.Pet = Backbone.Model.extend({

    urlRoot: "",

    defaults: {
        id: null,
        name: "",
        gender: "",
        age: "",
        size: "",
        activity: "",
        country: "USA",
        region: "California",
        details: "",
        DefaultPicture: null,
        PictureGallery : []
    }
});