d3.json("assets/data.json", function(data) {

    data.map(function(d) {
        d.points = d3.geom.polygon(d.points);
    });

    var svg = d3.select("#intro-pic")
            .append("svg")
                .attr("x","0px")
                .attr("y", "0px")
                .attr("viewBox", "0 0 1110 741.1")
                .append("g");

    svg.selectAll("polygon")
        .data(data)
        .enter().append("svg:polygon")
        .attr("points", function(d) { return d.points; })
        .attr("fill", function(d) { return d.color; });

});
