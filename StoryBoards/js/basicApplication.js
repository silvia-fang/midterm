/* ================================
Midterm Story maps
- Five slides
- Previous/next buttons
- Map zoom
- Data representation
- User interaction: click event - hover, bindPopup
================================ */

var state = {
  "slideNumber": 0,

  "slideTitle": [
    "Bay Area Bike Share Stations",
    "San Francisco Bike Share Stations",
    "San Francisco Bike Share Stations",
    "San Jose Bike Share Stations",
    "Palo Alto Region Bike Share Stations"
  ],
  "slideText":[
    "The Bay Area has initiated its Bike Share program since 2013.",
    "San Francisco's Bike Share Stations are located mostly along Market Street, in the Northeast Waterront Historic District, Chinatown and Financial District.",
    "On the map the bubbles show the size of each Bike Share Stations, the larger the bubble, the more docks the station has. The largest Bike Share Stations in San Francisco has 27 docks.",
    "On the map the bubbles show the size of each Bike Share Stations, the larger the bubble, the more docks the station has. The largest Bike Share Stations in San Jose has 27 docks.",
    "On the map the bubbles show the size of each Bike Share Stations, the larger the bubble, the more docks the station has. The largest Bike Share Stations in the Palo Alto region has 25 docks."
  ],
  "PageNum": [1,2,3,4,5],
  "drawnOnMap": undefined
};


var slideOne = function () {
  map.setView([37.556126, -122.089136],10);
  map.removeLayer(featureGroup);
  console.log("Load Slide One");
  $('h1.title').text(state.slideTitle[0]);
  $('p.main').text(state.slideText[0]);
  $('p.pageNum').text(state.PageNum[0]);
  hidePreButton();
  hideLegend();
  _.each(featureGroup,function(dot){
    dot.setRadius(3).setStyle({fillColor:"#046c9f"});
  });
};

var slideTwo = function () {
  map.setView([37.792196, -122.407915],13);
  console.log("Load Slide Two");
  $('h1.title').text(state.slideTitle[1]);
  $('p.main').text(state.slideText[1]);
  $('p.pageNum').text(state.PageNum[1]);
  showPreButton();
  hideLegend();
  _.each(featureGroup,function(dot){
    dot.setRadius(3).setStyle({fillColor:"#046c9f"});
  });
};

var slideThree = function () {
  map.setView([37.792196, -122.407915],13);
  console.log("Load Slide Three");
  $('h1.title').text(state.slideTitle[2]);
  $('p.main').text(state.slideText[2]);
  $('p.pageNum').text(state.PageNum[2]);
  showNextButton();
  showPreButton();
  showLegend();
  _.each(featureGroup,function(dot){
    if (dot.properties.dockcount <15)
    dot.setRadius(3);
    if ((dot.properties.dockcount >=15)&&(dot.properties.dockcount <20))
    dot.setRadius(5);
    if ((dot.properties.dockcount >=20)&&(dot.properties.dockcount <25))
    dot.setRadius(10).setStyle({fillColor:"#f1928c"});
    if ((dot.properties.dockcount >=25)&&(dot.properties.dockcount <30))
    dot.setRadius(15).setStyle({fillColor:"#f1928c"});
  });
};

var slideFour = function () {
  map.setView([37.335796, -121.893020],13);
  console.log("Load Slide Four");
  $('h1.title').text(state.slideTitle[3]);
  $('p.main').text(state.slideText[3]);
  $('p.pageNum').text(state.PageNum[3]);
  showNextButton();
  showPreButton();
  showLegend();
};

var slideFive = function () {
  map.setView([37.434994, -122.137032],12);
  console.log("Load Slide Five");
  $('h1.title').text(state.slideTitle[4]);
  $('p.main').text(state.slideText[4]);
  $('p.pageNum').text(state.PageNum[4]);
  hideNextButton();
  showLegend();
};

var loadSlide = function() {
  if (state.slideNumber === 0) {
    slideOne();
  } else if (state.slideNumber === 1) {
    slideTwo();
  } else if (state.slideNumber === 2) {
    slideThree();
  } else if (state.slideNumber === 3) {
    slideFour();
  } else if (state.slideNumber === 4) {
    slideFive();
  }
};

$('#nexButton').on('click', function() {
  // console.log("NextButton Clicked");
  state.slideNumber += 1;
  loadSlide();
  console.log(state.slideTitle[state.slideNumber]);
});

$('#preButton').on('click', function() {
  // console.log("PreviousButton Clicked");
  state.slideNumber -= 1;
  loadSlide();
  console.log(state.slideTitle[state.slideNumber]);
});

var clickNextButton = function() {
  $.on('click', function (event) {
    if (state.slideNumber<4){
      state.slideNumber += 1;
      console.log("Current Page: " + state.slideNumber);
      } else {
      console.log("Last page.");
      }
    });
};

var clickPreviousButton = function() {
  $.on('click', function (event) {
    if (state.slideNumber>0){
      state.slideNumber -= 1;
      console.log("Current Page: " + state.slideNumber);
      } else {
      console.log("First page.");
      }
    });
};
