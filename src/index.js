const marker = require('./marker');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoicGFsaW5hIiwiYSI6ImNqZXp0NGVocjBmaDUyeG9oc2c2dHJoMHEifQ.74K0wW-EYO8Y6Wq77OlFrQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

marker.buildMarker([-74.009, 40.705], 'hotels').addTo(map);
marker.buildMarker([-74.009, 41.705], 'hotels').addTo(map);
marker.buildMarker([-74.009, 42.705], 'hotels').addTo(map);
marker.buildMarker([-75.009, 40.705], 'restaurants').addTo(map);
marker.buildMarker([-75.009, 41.705], 'restaurants').addTo(map);
marker.buildMarker([-75.009, 42.705], 'restaurants').addTo(map);
marker.buildMarker([-76.009, 40.705], 'activities').addTo(map);
marker.buildMarker([-76.009, 41.705], 'activities').addTo(map);
marker.buildMarker([-76.009, 42.705], 'activities').addTo(map);
