// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      33.9, 9.5
    ],
    zoom: 2
  });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Get data from countries.js
let countryData = countries;

// Loop through the cities array and create one marker for each country.
countryData.forEach(function(country) {
  console.log(country)
  L.marker(country.location)
  .bindPopup("<h2>" + country.country + "</h2> <hr> <h3> Life Expectancy " + country.life_expectancy + "</h3> <hr> <h3> Population " + country.population.toLocaleString() + "</h3>  <hr> <h3> GDP $" + country.gdp.toLocaleString() + "</h3>" )
.addTo(map);
});
