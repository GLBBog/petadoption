
app.PetsModel = Backbone.Model.extend({
	
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