var key = "e9678eb2a3fd508a805a575b11835c20"

$("#search-btn").on("click", function(){
    
var city = $("#city-input").val();
$("#title-card").html(city);
    console.log(city);

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + key;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        var kelvinTemp = response.list[0].main.temp;
        var fh = ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(2); //fh temperature
        var humidity = response.list[0].main.humidity; 
        var windSpeed = response.list[0].wind.speed

        var hum = $("#hum");
        var temp = $("#temp");
        var wind = $("#wind");

        temp.html(fh + " °F"); // temp on main card
        hum.html(humidity + " %");
        wind.html(windSpeed + " MPH");

    });

});

    






