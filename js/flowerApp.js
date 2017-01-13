var redRoses = new app.singleFlower({
	name: "Red Roses",
	price: 39.95,
	img: "images/redRoses.jpg",
	link: "redRose"
});

var rainbowRoses = new app.singleFlower({
	name: "Rainbow Roses",
	price: 29.95,
	color: "Orange",
	link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
	name: "Hierloom Roses",
	price: 19.95,
	color: "Red",
	img: "images/heirloomPinkRoses.jpg",
	link: "heirloomRose"
});

rainbowRoses.set("price", 20)

var flowerGroup = new app.FlowersCollection([
	redRoses, rainbowRoses, heirloomRoses
]);

flowerGroup.add(
	new app.singleFlower({
		name: "Dandelions",
		price: 4.99,
		color: "Yellow",
		link: "dandelions"
	})
);

flowerGroup.remove(rainbowRoses);
console.log(flowerGroup.toJSON());

var flowerGroupView = new app.allFlowersView({
	collection: flowerGroup
});

$("#allFlowers").html(flowerGroupView.render().el)

var flowerRouter = new app.Router();

Backbone.history.start();