// Namespace our app
var app = app || {};

app.singleFlower = Backbone.Model.extend({

	defaults: {
		color: "pink",
		img: "images/placeholder.jpg"
	},

	initialize: function() {
		
		console.log("A model instance named " + this.get("name") +  
			" has been created and it costs " + this.get("price")
		);

		this.on('change:price', function() {
			console.log(this.get("name")+" has changed price to "+this.get("price")+".");
		});

	}

});