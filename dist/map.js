function initMap() {
        var uluru = {lat: 52.403837, lng: 16.949819};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          scrollwheel: false,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }