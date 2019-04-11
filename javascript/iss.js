

var map = L.map('map').setView([0,0], 2);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




function moveISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];
        iss.setLatLng([lat, lon]);
        map.panTo([lat, lon], animate=true);
    });
    setTimeout(moveISS, 5000); 
}



L.terminator().addTo(map);




var ISSIcon = L.icon({
    iconUrl: 'images/noun_24414.svg',
    iconSize: [50, 30],
    iconAnchor: [25, 15],
    popupAnchor: [50, 25],
    shadowUrl: 'images/noun_24414.svg',
    shadowSize: [30, 20],
    shadowAnchor: [15, 8]
});

var iss = L.marker([0, 0], {icon: ISSIcon}).addTo(map);
moveISS();
