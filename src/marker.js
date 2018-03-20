const mapboxgl = require("mapbox-gl");

function buildMarker(coords, activity){
    const divElem = document.createElement("div");
    divElem.style.width = "32px";
    divElem.style.height = "39px";
    divElem.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

    let marker = new mapboxgl.Marker(divElem).setLngLat(coords);
    return marker;
}

module.exports = {
    buildMarker
};
