// from data.js
var tableData = data;
console.log(tableData);

// // YOUR CODE HERE!
var tbody = d3.select("tbody");

// pass data.js data to the page and append to the table
tableData.forEach(function (alien) {
    console.log(alien);
    var row = tbody.append("tr");
    Object.entries(alien).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button and get filter value
var button = d3.select("#filter-btn");
button.on("click", function () {

    tbody.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
    console.log(filteredData);

    // return results to the page
    filteredData.forEach(function (selected) {
        console.log(selected);
        var row = tbody.append("tr");
        Object.entries(selected).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});