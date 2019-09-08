// Loads the packages in.
google.charts.load('current', {packages: ['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Define the chart to be drawn.
    const data = google.visualization.arrayToDataTable([
        // Adding the data for each column in an array.
        ['Datum', 'Servies hergebruikt'],
        ['04-9-19', 6],
        ['05-9-19', 2],
        ['06-9-19', 0],
        ['07-9-19', 3],
        ['08-9-19', 0],
        ['09-9-19', 1],
        ['10-9-19', 4],
        ['11-9-19', 3],
        ['12-9-19', 0],
        ['13-9-19', 1],
        ['14-9-19', 11],
    ]);

    let options = {
        // Defines additional options for the column chart.
        chart: {
            title: 'Hergebruikt servies',
            subtitle: 'Hergebruikt servies afgelopen 10 dagen',
        },
        // Defines text and additional arguments inside the axis'
        hAxis: {
            title: 'Datum'
        },
        vAxis: {
            title: 'Aantal stukken servies'
        },
        // Important, defines the height for the chart.
        height: 400,
        colors:['#36c4b1']
    };

    // Instantiate and draw the chart.
    let chart = new google.charts.Bar(document.getElementById('columnChart'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}
