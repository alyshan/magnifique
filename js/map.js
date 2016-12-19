var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(-41.150098, 174.831948)
  });

  var script = document.createElement('script');
  map.data.loadGeoJson('https://api.geonet.org.nz/quake?MMI=3');
  document.getElementsByTagName('head')[0].appendChild(script);
}

window.eqfeed_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}