window.ListPetView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        var modTypes = this.model.models;            
        for (var i = 0; i < modTypes.length; i++) {
            console.log('pets[i]' + modTypes[i]);
        }
    }
});