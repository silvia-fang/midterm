/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [37.556126, -122.089136],
  zoom: 10
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/* =====================
Data Import
===================== */
console.log(dataset);
var featureGroup;

/* =====================
Show/Hide options
===================== */

var hidePreButton = function() {
  $('#preButton').hide();
};
var showPreButton = function() {
  $('#preButton').show();
};
var hideNextButton = function() {
  $('#nexButton').hide();
};
var showNextButton = function() {
  $('#nexButton').show();
};
var showLegend = function() {
  $('.legend').show();
};
var hideLegend = function() {
  $('.legend').hide();
};

/* =====================
Default map layout
===================== */

featureGroup = _.map(dataset.features, function(cor){
  var myMarker = L.circleMarker(
    [cor.geometry.coordinates[1],cor.geometry.coordinates[0]]
  ).setStyle({
    radius:3,
    stroke:false,
    fillOpacity:0.6,
    fillColor:"#046c9f"
  }).on("mouseover", function(e){
    e.target.setStyle({fillColor: '#34bafa'});
  }).on("mouseout", function(e){
    if(e.target.properties.dockcount >= 20 && state.slideNumber >= 2){
      e.target.setStyle({fillColor: '#f1928c'});
    }else{
      e.target.setStyle({fillColor: '#046c9f'});
    }

  })
    .bindPopup("<ul><li>City: "+cor.properties.landmark+
               "</li><li>Station Name: "+cor.properties.name+
               "</li><li>Number of Docks: "+String(cor.properties.dockcount)+"</li></ul>")
    .addTo(map);
  // console.log(cor);
  myMarker.properties = cor.properties;
  return myMarker;
});
