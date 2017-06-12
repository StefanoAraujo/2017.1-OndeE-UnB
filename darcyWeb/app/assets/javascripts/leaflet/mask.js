//=require leaflet/unb

L.Mask = L.Polygon.extend({
  options: {
    stroke: false,
    color: '#333',
    fillOpacity: 0.5,
    clickable: true,

    outerBounds: new L.LatLngBounds([-90, -360], [90, 360])
  },

  initialize: function (latLngs, options) {

         var outerBoundsLatLngs = [
      this.options.outerBounds.getSouthWest(),
      this.options.outerBounds.getNorthWest(),
      this.options.outerBounds.getNorthEast(),
      this.options.outerBounds.getSouthEast()
    ];
        L.Polygon.prototype.initialize.call(this, [outerBoundsLatLngs, latLngs], options);
  },

});

L.mask = function (latLngs, options) {
return new L.Mask(latLngs, options);
};

var coordinates = unb.features[0].geometry.coordinates[0];
var latLngs = [];
for (i=0; i<coordinates.length; i++) {
    latLngs.push(new L.LatLng(coordinates[i][1], coordinates[i][0]));
}

L.mask(latLngs).addTo(map);
