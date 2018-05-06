console.log('plop');
$(document).ready(function() {
    var map, lat, lon;

    function init() {
        map = new L.Map('map');
        L.tileLayer('https://api.mapbox.com/styles/v1/julienchenel/cjfdz2p2fa5g92sq0dzgxf95o/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVsaWVuY2hlbmVsIiwiYSI6ImNqZmR6MGhvYjJiOGo0YXFoejFobXJqaGIifQ.SZ2HjrSNVhc7hCyXZlDv9A', {
            attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
        map.attributionControl.setPrefix(''); // Don't show the 'Powered by Leaflet' text.

        // map view before we get the location
        map.setView(new L.LatLng(43.116312, 1.612136), 13);
    }

    init();

    getLocationLeaflet();
});