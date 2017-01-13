// Namespace our app
var app = app || {};

app.Router = Backbone.Router.extend({

	routes: {
		"" : "noCopy",
		"heirloomRose" : "heirloomRoseMessage",
		"rainbowRose" : "rainbowRoseMessage",
		"redRose" : "redRoseMessage"
	},

	noCopy: function() {
		$("#copy").html("CLick a flower!");
	},
	heirloomRoseMessage: function() {
		$("#copy").html("heirloomRoseMessage");
	},
	rainbowRoseMessage: function() {
		$("#copy").html("rainbowRoseMessage");
	},
	redRoseMessage: function() {
		$("#copy").html("redRoseMessage");
	}

});

