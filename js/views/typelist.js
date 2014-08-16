window.TypesListView = Backbone.View.extend({

    el: '#types_list',
    events: {
        'click': 'filterPets'
    },
    initialize: function () {
        this.render();
    },

    render: function () {
        var modTypes = this.model.models;
        var content = $(this.el);
        var countTypes = modTypes.length;

        if (!content.has("li").length) {
            for (var i = 0; i < countTypes; i++) {
                content.append("<li><a>" + modTypes[i].get('name') + "</a></li>");
            }
        }
    },

    filterPets: function (e) {
        var p = 1;

        window.TypePetSession = e.target.text.toLowerCase();
        var myPets = new PetCollection();
        myPets.fetch();

        $("#content").html(new PetListView({ model: myPets.byType(window.TypePetSession), page: p }).el);

    }

});