var key = "e9678eb2a3fd508a805a575b11835c20"

$("#search-btn").on("click", function(){
      
var city = $("#city-input").val();

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + key;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);


    $("#title-card").html(city + " (" + response.list[0].dt_txt + ") " + response.list[0].weather[0].main);
    $(".list-group-item").html(city);

var kelvinTemp = response.list[0].main.temp;
var fh = ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(2); //fh temperature
var humidity = response.list[0].main.humidity; 
var windSpeed = response.list[0].wind.speed;

var hum = $("#hum");
var temp = $("#temp");
var wind = $("#wind");

temp.html(fh + " °F"); // temp on main card
hum.html(humidity + " %");
wind.html(windSpeed + " MPH");


for (var i = 1; i < 6; i++) {

    var kelvinTemp = response.list[i].main.temp;
    var fh = ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(2);
    var humidity = response.list[i].main.humidity; 
    var windSpeed = response.list[i].wind.speed;

if (i === 1) {
    $("#title-card"+i).html(city);
    $("#temp"+i).html(fh + " °F");
    $("#hum"+i).html(humidity + " %");
}

if (i === 2) {
    $("#title-card"+i).html(city);
    $("#temp"+i).html(fh + " °F");
    $("#hum"+i).html(humidity + " %");
}

if (i === 3) {
    $("#title-card"+i).html(city);
    $("#temp"+i).html(fh + " °F");
    $("#hum"+i).html(humidity + " %");
}

if (i === 4) {
    $("#title-card"+i).html(city);
    $("#temp"+i).html(fh + " °F");
    $("#hum"+i).html(humidity + " %");
}

if (i === 5) {
    $("#title-card"+i).html(city);
    $("#temp"+i).html(fh + " °F");
    $("#hum"+i).html(humidity + " %");
}

           
}

});

});

    






