window.PetListView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        var pets = this.model.models;
        var len = pets.length;
        var startPos = (this.options.page - 1) * 6;
        var endPos = Math.min(startPos + 6, len);

        $(this.el).html('<div class="petThumbnails"></div>');

        for (var i = startPos; i < endPos; i++) {

            var store = localStorage.getItem("PetList-"+i);
            
            $('.petThumbnails', this.el).append(new PetListItemView({ model: pets[i] }).render().el);
        }

        $(this.el).append('<div class="row text-center" id="paggerPets"></div>');
        $('#paggerPets', this.el).append(new Paginator({ model: this.model, page: this.options.page }).render().el);

        return this;
    }
});

window.PetListItemView = Backbone.View.extend({

    tagName: "div",

    className: "col-lg-4 col-sm-6 text-center fixbottom",

    initialize: function () {
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});