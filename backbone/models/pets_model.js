
app.PetsModel = Backbone.Model.extend({
	
	defaults: {
		id 			: 0,
		name 		: 'Product Name',
		price		: 0.0,
		stock 		: 0,
		stock_min 	: 0
	},


	 validate: function (attrs) {
        if (attrs.name == "") {
          return "error";
        }
        if (attrs.price == "NaN") {
          return "error";
        }    
        if (attrs.stock_min == "" || isNaN(attrs.stock_min)) {
          return "error";
        }
    }

});