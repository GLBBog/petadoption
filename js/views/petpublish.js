window.PetPublishView = Backbone.View.extend({
    events: {
        'click #btnSave': 'SavePet'
    },
    initialize: function () {
        $('#HomePlaceHolder').hide();
        this.render();
    },
    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    SavePet: function (e) {
        // GET INPUTS VALUES
        var pet = {
            id: 14,
            name: $('#InputNamePet').val(),
            gender: $('#SelectPetGender').val(),
            age: $('#InputAgePet').val(),
            size: $('#SelectPetSize').val(),
            activity: $('#SelectPetActivity').val(),
            type: $('#SelectPetType').val(),
            country: $('#InputCountryPet').val(),
            breed: $('#InputBreedPet').val(),
            region: $('#InputCityPet').val(),
            vaccinated: $('#CheckVaccPet').val(),
            details: $('#InputDetailsPet').val(),
            DefaultPicture: $('#InputPrimaryImage').val(),
            Gallery: [$('#InputGalleryImage1').val(), $('#InputGalleryImage2').val(), $('#InputGalleryImage3').val()],
            ContactName: $('#InputUserName').val(),
            ContactEmail: $('#InputEmail').val(),
            ContactPhone: $('#InputPhone').val(),
            ContactPhone2: $('#InputPhone2').val(),
            ContactAddress: $('#InputAddress').val(),
            ContactZip: $('#InputZipCode').val()
        };

        // CREATE THE PRODUCT OBJECT
        pet = new window.Pet(pet);
        window.petList.add(pet);
        console.log("salida del save" + window.petList);
        pet.save();
        window.petList.fetch();

    }
});