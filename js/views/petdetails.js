window.PetView = Backbone.View.extend({

    initialize: function () {
        this.render();
        $('#HomePlaceHolder').hide();
    },

    render: function () {
        var cont = $(this.el);
        cont.html(this.template(this.model.toJSON()));
        this.$('.carousel').carousel({
            interval: 7000
        });

        var countgall = this.model.get("Gallery").length;
        if (countgall > 0) {
            for (var i = 0; i < countgall; i++) {
                cont.find('.carousel-inner').append("<div class='item " + (i === 0 ? "active" : '') + "'><img src='pics/" + this.model.get("Gallery")[i] + "' width='750' height='400'></div>");
            }
        } else { this.$('.carousel').hide(); }

        return this;
    }
});