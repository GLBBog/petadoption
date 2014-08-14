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
        var petList = new PetCollection();

        window.TypePetSession = e.target.text.toLowerCase();
        console.log('window.TypePetSession ' + window.TypePetSession);
        petList.fetch({ success: function () {
            petList = petList.byType(window.TypePetSession);

            $("#content").html(new PetListView({ model: petList, page: p }).el);
        }
        })
    }

});