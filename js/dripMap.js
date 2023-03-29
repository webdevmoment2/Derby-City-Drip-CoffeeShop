// Embedded Map
const platform = new H.service.Platform({ apikey: 'DpR2DPaamzrnNw6bdh0lzq21X5-1TW4LQk-yaB4CltA' });
const defaultLayers = platform.createDefaultLayers();
const map = new H.Map(
    document.getElementById('map'),

    defaultLayers.vector.normal.map,

        {center: { lat: 38.2577757, lng: -85.7712782 },
          zoom: 14,
          pixelRatio: window.devicePixelRatio || 1,});
          window.addEventListener('resize', () => map.getViewPort().resize(),);

const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
const ui = H.ui.UI.createDefault(map, defaultLayers);

// Map Marker
var derbyCityDripMarker = new H.map.Marker({lat:38.2577757, lng:-85.7712782})

function addMarkersToMap(map) {
    map.addObject(derbyCityDripMarker);}

    window.onload = function(){addMarkersToMap(map);}

// UI and Map Marker Resize
var mapSettings = ui.getControl('mapsettings');
var zoom = ui.getControl('zoom');
var scalebar = ui.getControl('scalebar');
