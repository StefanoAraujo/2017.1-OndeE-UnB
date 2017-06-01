//= require leaflet/sidebar

var sidebar = L.control.sidebar('sidebar', {
    position: 'left',
    autoPan: false,
    closeButton: false
}).addTo(map);

var visible = sidebar.isVisible();
