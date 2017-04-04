/* ================================
Loading data from online
================================ */

var Dataset = "https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/geojson/philadelphia-garbage-collection-boundaries.geojson";
var parsedData = $.ajax(Dataset).done(function(d){
  return JSON.parse(d);
});

  _.each(featureGroup, function(marker) {
    map.removeLayer(marker);
  });


var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.GeoJSON(someGeojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);


var click1 = function(){
$("#mybutton").on('click', function(){
  // $("#myplace").text("xny");

  });
};

//==============变颜色=========================

var myStyle = function(feature) {
  if (feature.properties.dockcount >=11){
  return {color: "#96ceb4"}};
  if (feature.properties.dockcount >){
  return {color: "#96ceb4"}};

    case 'San Jose':       return {color: "#96ceb4"};
    case 'Redwood City':   return {color: "#75c9d2"};
    case 'Mountain View':  return {color: "#beecde"};
    case 'Palo Alto':      return {color: "#ffeead"};
    case 'San Francisco':  return {color: "#ffcc5c"};
}};


switch (featureGroup.properties.COLLDAY) {
    case 'MON':   return $("h1.day-of-week").text("Monday");
    case 'TUE':   return $("h1.day-of-week").text("Tuesday");
    case 'WED':   return $("h1.day-of-week").text("Wednesday");
    case 'THR':   return $("h1.day-of-week").text("Thursday");
    case 'FRI':   return $("h1.day-of-week").text("Friday");
    case 'SAT':   return $("h1.day-of-week").text("Satuaday");}

    if (layer.feature.properties.COLLDAY === "MON"){
    return $(".day-of-week").text("Monday");}
    else if (layer.feature.properties.COLLDAY === "TUE"){
    return $(".day-of-week").text("Tuesday");}
    else if (layer.feature.properties.COLLDAY === "WED"){
    return $(".day-of-week").text("Wednesday");}
    else if (layer.feature.properties.COLLDAY === "THU"){
    return $(".day-of-week").text("Thursday");}
    else if (layer.feature.properties.COLLDAY === "FRI"){
    return $(".day-of-week").text("Friday");}
    else if (layer.feature.properties.COLLDAY === "SAT"){
    return $(".day-of-week").text("Satuaday");}


//============================== Use L.circleMarker
    featureGroup = _.map(dataset.features, function(cor){
      return L.circleMarker(
        [cor.geometry.coordinates[1],cor.geometry.coordinates[0]]
      ).setStyle({
        radius:3,
        stroke:false,
        fillOpacity:0.6
      }).addTo(map);
    });

    function myStyle(feature){
      if (feature.properties.dockcount <20)
      return L.circleMarker(
        [cor.geometry.coordinates[1],cor.geometry.coordinates[0]]
      ).setStyle({
        fillColor:"#96ceb4"
      }).addTo(map);
    }

//============================== Use L.GeoJSON
    console.log(L);
    var myStyle0 = {
      radius:3,
      stroke:false,
      fillOpacity:0.6
    };
    featureGroup = L.GeoJSON(dataset.features, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker([cor.geometry.coordinates[1],cor.geometry.coordinates[0]],
              myStyle0);
        }
    }).addTo(map);




    var eachFeatureFunction = function(layer) {
      layer.on('click', function (event) {
        /* =====================
        The following code will run every time a layer on the map is clicked.
        Check out layer.feature to see some useful data about the layer that
        you can use in your application.
        ===================== */

    console.log(layer);
    showResults();

      }
    );};

    var myFilter = function(feature) {
      return ;
    };

    var showResults = function() {
      /* =====================
      This function uses some jQuery methods that may be new. $(element).hide()
      will add the CSS "display: none" to the element, effectively removing it
      from the page. $(element).show() removes "display: none" from an element,
      returning it to the page. You don't need to change this part.
      ===================== */
      // => <div id="intro" css="display: none">
      $('#nexButton').hide();
      $('#nexButton').show();
      $('#nexButton').hide();
      $('#nexButton').show();
    };
showResults();

function myStyle(feature){
  if (feature.properties.dockcount <15)
  return L.circleMarker(
    [cor.geometry.coordinates[1],cor.geometry.coordinates[0]]
  ).setStyle({
    radius: 3
  }).addTo(map);
  else if (feature.properties.dockcount >=15 && feature.properties.dockcount <20)
  return L.circleMarker(
    [cor.geometry.coordinates[1],cor.geometry.coordinates[0]]
  ).setStyle({
    radius: 5
  }).addTo(map);
  else if (feature.properties.dockcount >=20 && feature.properties.dockcount <25)
  return L.circleMarker(
    [cor.geometry.coordinates[1],cor.geometry.coordinates[0]]
  ).setStyle({
    radius: 7
  }).addTo(map);
  else if (feature.properties.dockcount >=25 && feature.properties.dockcount <30)
  return L.circleMarker(
    [cor.geometry.coordinates[1],cor.geometry.coordinates[0]]
  ).setStyle({
    radius: 9
  }).addTo(map);
}

!important

var small = _.filter(featureGroup, function(dock){
if (dock.properties.dockcount <20)
return true;
})

_.each(featureGroup,function(dot){
dot.setRadius(10)
})


featureGroup = _.map(dataset.features, function(cor){
  var myMarker = L.circleMarker(
    [cor.geometry.coordinates[1],cor.geometry.coordinates[0]]
  ).setStyle({
    radius:3,
    stroke:false,
    fillOpacity:0.6,
    fillColor:'#2e97f1'
  }).bindPopup("<ul><li>Hey there</li><li>"+cor.properties.landmark+"</li></ul>").addTo(map);
  console.log(cor);
  myMarker.properties = cor.properties;
  return myMarker;
});

_.each(featureGroup,function(dot){
  if (dot.properties.dockcount <15)
  dot.setRadius(3);
  if (dot.properties.dockcount >=15)&&(dot.properties.dockcount <20)
  dot.setRadius(5);
  if (dot.properties.dockcount >=20)&&(dot.properties.dockcount <25)
  dot.setRadius(10);
  if (dot.properties.dockcount >=25)&&(dot.properties.dockcount <30)
  dot.setRadius(15);
});

state.drawnOnMap = L.GeoJSON().addToMap();
map.removeLayer(state.drawnOnMap);
