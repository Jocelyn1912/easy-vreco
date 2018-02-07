/*
function findMe() {

    var output = document.getElementById('mapa');
   
    // Obtenemos latitud y longitud
    function localizacion(posicion) {
      var latitud = posicion.coords.latitude;
      var longitud = posicion.coords.longitude;
      var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitud + "," + longitud + "&size=600x300&markers=color:red%7C" + latitud + "," + longitud + "&key=AIzaSyD9URB1vdsmZT87QSzXoY28uPXALN44I1o";
      output.innerHTML = "<img src=" + imgURL +  ">"

      //output.innerHTML = "<p>Latitud: " + latitud + "<br>Longitud: " + longitud + "</p>";
    }

    function error() {
      output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
    }

    
    navigator.geolocation.getCurrentPosition(localizacion, error);

};
*/

function initMap() {
  var laboratoria = {lat: -33.45, lng: -70.6667};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: laboratoria
  });
  var marker = new google.maps.Marker({ //marcador rojo
    position: laboratoria,
    map: map
  });
};




