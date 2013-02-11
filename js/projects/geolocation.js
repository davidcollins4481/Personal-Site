$(document).ready(function() {

    var getLocationCallback = function(position) {

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        var coords = lat + ',' + lon;
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + coords + '&sensor=true';

        /* Send the data using post and put the results in a div */
        $.ajax({
            url: url,
            type: "post",
            success: function(response) {
                var r = response.results;
                var street_address_obj = r[0];
                var postal_code = r[1];
                $('#postal_code').html(postal_code.formatted_address);
            },
            error:function(){
                alert("failure");
                $("#result").html('there is error while submit');
            }
        }); 
    };

    navigator.geolocation.getCurrentPosition(getLocationCallback);

});