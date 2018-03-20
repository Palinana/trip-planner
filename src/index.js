const marker = require('./marker');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoicGFsaW5hIiwiYSI6ImNqZXp0NGVocjBmaDUyeG9oc2c2dHJoMHEifQ.74K0wW-EYO8Y6Wq77OlFrQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const divElem = document.createElement("div");
divElem.style.width = "32px";
divElem.style.height = "39px";
divElem.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

marker.buildMarker([-74.009, 40.705], 'activity').addTo(map);