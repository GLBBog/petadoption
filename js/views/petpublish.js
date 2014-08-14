window.PetPublishView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        var pets = this.model.models;
        $(this.el).html(this.template(pets[0].toJSON()));
        return this;
    }
});