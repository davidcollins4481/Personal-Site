$(document).ready(function() {

    var getLocationCallback = function(position) {
        alert('ping');
        var lat = sprintf("%.6f", position.coords.latitude);
        var lng = sprintf("%.6f", position.coords.longitude);
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({'latLng': latlng}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var street_address = results[0].formatted_address;
                    var postal_code = results[1];
                    $('#postal_code').html(postal_code.formatted_address);
                } else {
                    alert("no results found");
                }
            } else {
                alert("Geocoder failed :(");
            }
        });
    };

    navigator.geolocation.getCurrentPosition(getLocationCallback);

});
