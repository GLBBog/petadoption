window.PetListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        var wines = this.model.models;
        var len = wines.length;
        var startPos = (this.options.page - 1) * 6;
        var endPos = Math.min(startPos + 6, len);

        $(this.el).html('<ul class="thumbnails"></ul>');

        for (var i = startPos; i < endPos; i++) {
            $('.thumbnails', this.el).append(new PetListItemView({ model: wines[i] }).render().el);
        }

        $(this.el).append(new Paginator({ model: this.model, page: this.options.page }).render().el);

        return this;
    }
});

window.PetListItemView = Backbone.View.extend({

    tagName: "li",

    className: "span3",

    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        console.log(this.model.toJSON());
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});