

$(document).ready(function () {

    var mymap = L.map('mapid').setView([51.505, -0.09], 14);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoid21jZmFsbDIiLCJhIjoiNjk4NGY3YjdiOGVhYWZhYzI1YjA5ZGJmMTc0ZDMwNTYifQ.0tJmXauSlx_qjiJLTscB8g'
    }).addTo(mymap);

    // Section to add point marker
    var marker = L.marker([51.5, -0.09]).addTo(mymap);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");


    // Section to add circle marker
    var circle = L.circle([51.508, -0.11], {
        fillOpacity: 0.5,
        radius: 100
    }).addTo(mymap);

    circle.bindPopup("I am a circle.");


    // Section to add polygon marker
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap);

    polygon.bindPopup("I am a polygon.");


    // Section to add geojson data
    var geojsonLayer = new L.GeoJSON.AJAX("./assets/data/dataset.json");
    geojsonLayer.addTo(mymap);

});

