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

        if (e.target.form.checkValidity()) {
            // GET INPUTS VALUES

            var GalleryPaths = new Array();

            if ($('#InputGalleryImage1').val() != "") {
                GalleryPaths.push($('#InputGalleryImage1').val());
            }
            if ($('#InputGalleryImage2').val() != "") {
                GalleryPaths.push($('#InputGalleryImage2').val());
            }
            if ($('#InputGalleryImage3').val() != "") {
                GalleryPaths.push($('#InputGalleryImage3').val());
            }

            var pet = {
                name: $('#InputNamePet').val(),
                gender: $('#SelectPetGender').val() == 'Select...' ? 'Not Specified' : $('#SelectPetGender').val(),
                age: $('#InputAgePet').val(),
                size: $('#SelectPetSize').val() == 'Select...' ? 'Not Specified' : $('#SelectPetSize').val(),
                activity: $('#SelectPetActivity').val() == 'Select...' ? 'Not Specified' : $('#SelectPetActivity').val(),
                type: $('#SelectPetType').val() == 'Select...' ? 'Not Specified' : $('#SelectPetType').val(),
                country: $('#InputCountryPet').val(),
                breed: $('#InputBreedPet').val(),
                region: $('#InputCityPet').val(),
                vaccinated: $('#CheckVaccPet').val(),
                details: $('#InputDetailsPet').val(),
                DefaultPicture: $('#InputPrimaryImage').val(),
                Gallery: GalleryPaths,
                ContactName: $('#InputUserName').val(),
                ContactEmail: $('#InputEmail').val(),
                ContactPhone: $('#InputPhone').val(),
                ContactPhone2: $('#InputPhone2').val(),
                ContactAddress: $('#InputAddress').val(),
                ContactZip: $('#InputZipCode').val()
            };

            // Create Pet
            var myPets = new PetCollection();
            myPets.fetch();

            var newPet = new window.Pet(pet);
            myPets.add(newPet);
            newPet.save();
            $('.col-lg-12').hide();
            $('.col-md-8').hide();
            $('#SucessHolder').show();
            return;
        }
    }
});