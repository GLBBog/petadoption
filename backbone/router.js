window.router = Backbone.Router.extend({
    routes: {
        "add": "NewOne"
    },
    NewOne: function () {
        var myNotes = new NoteCollection();
        myNotes.fetch();
        var Item = {
            name: "Andres",
            content: $('#contentInput').val()
        };
        var note1 = new Note(Item);
        myNotes.add(note1);
        note1.save();
    }
});

utils.loadTemplate(['ListPetView'], function() {
    appRouter = new window.AppRouter();
    Backbone.history.start();
});
