app.Router = Backbone.Router.extend({

	routes:{
		'' : 'home'
	},
    
    home : function () {  app.home_view.render(); }

});

app.router = new app.Router();
Backbone.history.start(); 

