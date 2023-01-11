// create map
const map = L.map('map').setView([48.868672, 2.342130], 12);

// add openstreetmap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMat</a>'
}).addTo(map);

// create and main add geolocation marker
const marker = L.marker([48.87007,2.346453]).addTo(map);
marker.addTo(map).bindPopup("<pl><b>The Hoxton, Paris</b></pl>").openPopup();
// draw the 2nd arrondissement 
var polygon = L.polygon([                                       
[48.863368120198004, 2.3509079846928516],
[48.86933262048345, 2.3542531602919805],
[48.87199261164275, 2.3400569901592183],
[48.86993336274516, 2.3280142476578813],
[48.86834104280146, 2.330308418109664]
], {
    color: 'blue',
    fillOpacity: 0
}).addTo(map);


// create red pin marker
const rI = L.icon({
    iconUrl: './assets/red-pin.png',

    iconSize: [38, 38], // size of the icon
    iconAnchor: [19, 38] //icon's point which will correspond to the marker's location
})

// Metro station markers:
const rS = L.marker([48.866200610611926, 2.352236247419453], {icon: rI}).bindPopup('RÃ©aumur-SÃ©bastopol');
const sSD = L.marker([48.869531786321566, 2.3528590208055196], {icon: rI}).bindPopup('Strasbourg-Saint-Denis');
const sentier = L.marker([48.8673721067762, 2.347107922912739], {icon: rI}).bindPopup('Sentier');
const bourse = L.marker([48.86868503971672, 2.3412285142058167], {icon: rI}).bindPopup('Bourse');
const qS = L.marker([48.869560129483226, 2.3358638645569543], {icon: rI}).bindPopup('Quatre Septembre');
const gB = L.marker([48.871282159004856, 2.3434818588892714], {icon: rI}).bindPopup('Grands Boulevards');

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(map);
