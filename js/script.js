function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9389017,30.32312479)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "img/bullit.png";
  var myLatLng = new google.maps.LatLng(59.9386, 30.3237);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);