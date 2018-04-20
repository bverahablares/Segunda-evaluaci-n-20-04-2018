//aquí debes trabajar con datos de un JSON
var w = 450;
var h = 450;
d3.json("https://chilecube.datawheel.us//cubes/immigration/aggregate.json?drilldown%5B%5D=%5BDate%5D.%5BYear%5D&drilldown%5B%5D=%5BCalculated+Age+Range%5D.%5BAge+Range%5D&measures%5B%5D=Number+of+visas&nonempty=true&distinct=false&parents=true&debug=false&sparse=true").then(function(data) 
d3.select(".dataviz-segunda")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#FFFFFF");