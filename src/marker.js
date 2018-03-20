const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

function buildMarker(coords, activity){
    const divElem = document.createElement("div");
    divElem.style.width = "32px";
    divElem.style.height = "39px";
    divElem.style.backgroundImage = "url(" + iconURLs[activity] + ")";

    let marker = new mapboxgl.Marker(divElem).setLngLat(coords);
    return marker;
}

module.exports = {
    buildMarker
};
