var app = app || {};

app.TypesListView = Backbone.View.extend({

	el: '#types_list',
	
	initialize: function( types ) {
		this.collection = new app.Types( types );
		this.render();
	},
	
	render: function() {
		this.template = _.template($( '#genresListTemplate' ).html(),{genres: this.collection.toJSON()});
		this.$el.html(this.template);
	}

});