// Namespace our app
var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({
	model: app.singleFlower,
	initialize: function() {
		
		console.log("A collection has been instantiated.");
		
		this.on('remove', function() {
			console.log("A collection has changed.");
		});

	}
});