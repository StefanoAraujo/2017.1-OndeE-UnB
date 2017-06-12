// this is the common setting to starting up the map
//=require map/data/buildings
//=require leaflet/unb

const centerMap = [-15.758140620981214, -47.87189483642578];
const south_west = L.latLng(-15.788619534134423, -47.84374237060547);
const north_east = L.latLng(-15.720056200774035, -47.89918899536133);
const bounds = L.latLngBounds(south_west, north_east);

var urlMapbox = "https://api.mapbox.com/styles/v1/kaironvzb/cj1y3dkki00042sn074lbuo5k/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2Fpcm9udnpiIiwiYSI6ImNpd21mbW0wbDAwNXMyenFpanlmbHZ6ZXAifQ.RtMAGQj_0ho54Rw6D812hw";

//Creating the default base layer for when the map loads
var mapBox = L.tileLayer.BoundaryCanvas(urlMapbox, {
  boundary: unb,
  maxZoom: 20,
  maxNativeZoom: 22,
  attribution: '&copy; <a href="https://www.mapbox.com/map-feedback/">Mapbox</a>\
                &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var mapOptions = {
  maxBounds: bounds,
  center: centerMap,
  zoom: 13.5,
  minZoom: 13.5,
  trackResize: true,
  layers: buildingLayer,
};

var map = {};
map.init = function startMap(options){
  map = L.map('map', options);
  mapBox.addTo(map);
};
