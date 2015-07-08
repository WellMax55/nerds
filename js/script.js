/* Интерактивная карта */
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

/* Модальное окно */
var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content_close");
var form = popup.querySelector("form");
var modalName = popup.querySelector("[name='name']");
var modalEmail = popup.querySelector("[name='mail']");
var modalLetter = popup.querySelector("[name='letter']");
var storage = localStorage.getItem("modalName");
var reset = popup.querySelector("[name='reset']");




link.addEventListener("click", function(event) { 
  event.preventDefault(); 
  popup.classList.add("modal-content-show");
    if (storage) {
      modalName.value = storage;
      modalEmail.focus();
    } else {
      modalName.focus();
    }
});

close.addEventListener("click", function(event) { 
  event.preventDefault(); 
  popup.classList.remove("modal-content-show"); 
});

form.addEventListener("submit", function(event) {
    if (!(modalName.value && modalEmail.value && modalLetter.value)) {
    event.preventDefault();  
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");  
    } else {
    localStorage.setItem("modalName", modalName.value);
    }
});

/* При нажатии "Отмена" фокус перемещается в поле "Ваше имя"*/
reset.addEventListener("click", function(event) { 
  modalName.focus();
});


window.addEventListener("keydown", function(event) { 
  if (event.keyCode == 27) { 
  if (popup.classList.contains("modal-content-show")) { 
  popup.classList.remove("modal-content-show"); 
  } 
  } 
});






