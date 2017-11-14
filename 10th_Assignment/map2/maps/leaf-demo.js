// See post: http://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/
/* step 2 create map object */
var map = L.map( 'map', {
  center: [20.0, 5.0],
  minZoom: 2,
  zoom: 2
})
/* 3a* title layer */
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )
/* step 3b customizing the look of your marker */
var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

function place_marker() {
var place = document.getElementById("filter").value;
var markers = [];
$.getJSON('http://dev-comm5961-demo.pantheonsite.io/map.json/'+place, function(obj) {
$.each(obj, function(key,value) {

var marker =  L.marker( [value.lat, value.lng])
.bindPopup( '<a href="' + value.url + '" target="_blank">' + value.name + '</a>' )         
.addTo(map);
 }); 
 }); 
}




