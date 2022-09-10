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

// This function returns the style data for each of the markers  on
// the map. We pass the life expectancy value into a function
// to calculate the radius.
function styleInfo(country) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(country.life_expectancy),
    color: "#000000",
    radius: 10,
    stroke: true,
    weight: 0.5
  };
}

// This function determines the color of the circle based on the country's life expectancy.
function getColor(le) {
  if (le> 80) {
    return "#98ee00";
  }
  if (le > 75) {
    return "#d4ee00";
  }
  if (le > 70) {
    return "#eecc00";
  }
  if (le > 65) {
    return "#ee9c00";
  }
  if (le > 60) {
    return "#ea822c";
  }
  return "#ea2c2c";
}


// Loop through the cities array and create one marker for each country.
countryData.forEach(function(country) {
  console.log(country)
  L.circleMarker(country.location, styleInfo(country))
  .bindPopup("<h2>" + country.country + "</h2> <hr> <h3> Life Expectancy:  " + country.life_expectancy + "</h3>")
  .addTo(map);
});
