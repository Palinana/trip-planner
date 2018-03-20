function buildMarker(coords, activity){
    let marker = new mapboxgl.Marker(divElem).setLngLat(coords);
    marker.style.backgroundColor = '#f00';
    return marker;
}

module.exports = {
    buildMarker
};