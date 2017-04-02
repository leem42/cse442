import * from "d3/d3.min.js";

var printBacon = function() {
	console.log("Bacon is healthy, don't believe the doctors!");
}


d3.select("body").append("p").text("New paragraph!");

printBacon();