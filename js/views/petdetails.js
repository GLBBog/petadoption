window.PetView = Backbone.View.extend({

    tagName: "div",
    className: "petDetails",

    initialize: function () {
        this.render();
        $('#HomePlaceHolder').hide();
    },

    render: function () {

        var pets = this.model.models;

        if (pets.length > 0) {
            
            $(this.el).html(this.template(pets[0].toJSON()));

            var cont = $(this.el);

            var PetGallery = pets[0].get("Gallery");

            if (PetGallery.length > 0) {
                for (var i = 0; i < PetGallery.length; i++) {
                    cont.find('.carousel-inner').append("<div class='item " + (i === 0 ? "active" : '') + "'><img src='" + PetGallery[i] + "' width='750' height='400'></div>");
                }
            } else { this.$('.carousel').hide(); }
        }
        return this;
    }
});