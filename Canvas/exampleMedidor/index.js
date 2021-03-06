anychart.onDocumentReady(function () {
    
	// create data set on our data
    var dataSet = anychart.data.set([50]);
    
	// set the gauge type
    var gauge = anychart.gauges.circular();

	// gauge settings
    gauge.data(dataSet);
    gauge.padding("10%");
    gauge.startAngle(270);
    gauge.sweepAngle(180);
   
		// axis settings
    var axis = gauge.axis();
    axis.radius(95)
    axis.width(1);

    // scale settings
    axis.scale().minimum(0).maximum(120);

	// draw the chart
    gauge.container("container").draw();
});