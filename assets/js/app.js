//Evento API google maps
google.maps.event.addDomListener(window, "load", function(){ // Objeto, evento y función.
  //Objeto de clase
  const ubicacion = new Localizacion(()=>{
    const myLatLng = {
      lat: ubicacion.latitude,
      lng: ubicacion.longitude
    };
    //Ventana info
    const options = {
      center: myLatLng,
      zoom: 16
    }
    const map = document.getElementById('map');
    const mapa = new google.maps.Map(map, options);
    
    //Marcador
    const marcador = new google.maps.Marker({
      position: myLatLng,
      map: mapa
    });

    //Mostrar ventana info
    const informacion = new google.maps.InfoWindow();
    //Evento del marcador
    marcador.addListener('click', function(){
      informacion.open(mapa, marcador);
    });

    //Input autocompletable
    const autocomplete = document.getElementById('origen');
    //Creando objeto auto completado
    const search = new google.maps.places.Autocomplete(autocomplete);
    //Enlazando al mapa
    search.bindTo("bounds", mapa); // bounds restringe busquedas
    search.addListener('place_changed', function(){
      //Cerrando info window
      informacion.close();
      //Ocultar marcador
      marcador.setVisible(false);

      //Guardando el nuevo lugar, obteniendo busqueda
      var place = search.getPlace();
      //Si el lugar no se puede mostrar
      if (!place.geometry.viewport) { //geometry propiedad nos permite hacer calculos sobre la superficie
        window.alert("Error al mostrar el lugar");
        return;
      }
      //Si el lugar se puede mostrar
      if (place.geometry.viewport) {
        mapa.fitBounds(place.geometry.viewport);
      } else{
        mapa.setCenter(place.geometry.location);
        mapa.setzoom(18);
      }

      marcador.setPosition(place.geometry.location);
      marcador.setVisible(true);

      //
      var addres = "";
      if (place.address_components) {
        //Obteniendo cada componente de la dirección
        address = [
        (place.address_components[0] && place.address_components[0].short_name || '' ),
        (place.address_components[1] && place.address_components[1].short_name || '' ),
        (place.address_components[2] && place.address_components[2].short_name || '' )
        ];
      }
      informacion.setContent('<div><strong>' + place.name + '</strong><br>' + address);
      informacion.open(map,marcador);
    });
  });
});



/*
function findMe() {

    var output = document.getElementById('mapa');
   
    // Obtenemos latitud y longitud
    function localizacion(posicion) {
      var latitud = posicion.coords.latitude;
      var longitud = posicion.coords.longitude;
      var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitud + "," + longitud + "&size=600x300&markers=color:red%7C" + latitud + "," + longitud + "&key=AIzaSyD9URB1vdsmZT87QSzXoY28uPXALN44I1o";
      output.innerHTML = "<img src=" + imgURL + ">"

      //output.innerHTML = "<p>Latitud: " + latitud + "<br>Longitud: " + longitud + "</p>";
    }

    function error() {
      output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
    }

    
    navigator.geolocation.getCurrentPosition(localizacion, error);
onclick="findMe()"
};
*/
/*
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
*/



