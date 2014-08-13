window.Type = Backbone.Model.extend({	
defaults: {
        name: null
        }
});

window.TypeCollection = Backbone.Collection.extend({
	model: Type,
	url:""
});