init();

// On click event
$("#search-btn").on("click", function(){
      
var city = $("#city-input").val();
var cityArr = [];
cityArr.push(city);
$("#city-input").val("");
localStorage.setItem("city", cityArr); // store

//adding to the list
var historyList = $("<a>");
historyList.html(city);
historyList.addClass("list-group-item");
$(".list-group").prepend(historyList);

var key = "e9678eb2a3fd508a805a575b11835c20";

//API and AJAX
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + key;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

var mainCityDate = city + " (" + moment().format("MM-D-YYYY") + ") " + response.list[0].weather[0].main;
$("#title-card").html(city + " (" + moment().format("MM-D-YYYY") + ") " + response.list[0].weather[0].main);

localStorage.setItem("CityDate", mainCityDate); //Setting date --------------------------------------------

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

localStorage.setItem("temp", fh);
localStorage.setItem("hum", humidity);
localStorage.setItem("wind", windSpeed);

// bottom cards for 5 days ---------------------------------------------------------------------------------
for (var i = 0; i < 40; i++) {
    
    var responseDate = response.list[i].dt_txt
    var momentDate1 = moment().add(1, "day").format("YYYY-MM-DD 21:00:00");
    var momentDate2 = moment().add(2, "day").format("YYYY-MM-DD 21:00:00");
    var momentDate3 = moment().add(3, "day").format("YYYY-MM-DD 21:00:00");
    var momentDate4 = moment().add(4, "day").format("YYYY-MM-DD 21:00:00");
    var momentDate5 = moment().add(5, "day").format("YYYY-MM-DD 00:00:00");
//------------------------------------------------------------------------------------------------------------
if (responseDate === momentDate1) {
    
    var kelvinTemp = response.list[i].main.temp;
    var fh = ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(2);
    var humidity = response.list[i].main.humidity; 
    var windSpeed = response.list[i].wind.speed;
    var nameDate = city + " (" + moment().add(1, "day").format("M-D") + ")";
    var main = response.list[i].weather[0].main;
    $("#title-card1").html(nameDate);
    $("#temp1").html(fh + " °F");
    $("#hum1").html(humidity + " %");
    $("#main1").html(main);

    localStorage.setItem("title-card1", nameDate);
    localStorage.setItem("temp1", fh);
    localStorage.setItem("hum1", humidity);
    localStorage.setItem("wind1", windSpeed);
    localStorage.setItem("main1", main);
}
//----------------------------------------------------------------------------------------------------
if (responseDate === momentDate2) {
    kelvinTemp = response.list[i].main.temp;
    fh = ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(2);
    humidity = response.list[i].main.humidity; 
    windSpeed = response.list[i].wind.speed;
    nameDate = city + " (" + moment().add(2, "day").format("M-D") + ")";
    main = response.list[i].weather[0].main;
    $("#title-card2").html(nameDate);
    $("#temp2").html(fh + " °F");
    $("#hum2").html(humidity + " %");
    $("#main2").html(main);

    localStorage.setItem("title-card2", nameDate);
    localStorage.setItem("temp2", fh);
    localStorage.setItem("hum2", humidity);
    localStorage.setItem("wind2", windSpeed);
    localStorage.setItem("main2", main);    
}
//----------------------------------------------------------------------------------------------------
if (responseDate === momentDate3) {
    kelvinTemp = response.list[i].main.temp;
    fh = ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(2);
    humidity = response.list[i].main.humidity; 
    windSpeed = response.list[i].wind.speed;
    nameDate = city + " (" + moment().add(3, "day").format("M-D") + ")";
    main = response.list[i].weather[0].main;
    $("#title-card3").html(nameDate);
    $("#temp3").html(fh + " °F");
    $("#hum3").html(humidity + " %");
    $("#main3").html(main);

    localStorage.setItem("title-card3", nameDate);
    localStorage.setItem("temp3", fh);
    localStorage.setItem("hum3", humidity);
    localStorage.setItem("wind3", windSpeed);
    localStorage.setItem("main3", main);
}
//----------------------------------------------------------------------------------------------------
if (responseDate === momentDate4) {
    kelvinTemp = response.list[i].main.temp;
    fh = ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(2);
    humidity = response.list[i].main.humidity; 
    windSpeed = response.list[i].wind.speed;
    nameDate = city + " (" + moment().add(4, "day").format("M-D") + ")";
    main = response.list[i].weather[0].main;
    $("#title-card4").html(nameDate);
    $("#temp4").html(fh + " °F");
    $("#hum4").html(humidity + " %");
    $("#main4").html(main);

    localStorage.setItem("title-card4", nameDate);
    localStorage.setItem("temp4", fh);
    localStorage.setItem("hum4", humidity);
    localStorage.setItem("wind4", windSpeed); 
    localStorage.setItem("main4", main);   
}
//----------------------------------------------------------------------------------------------------
if (responseDate === momentDate5) {
    kelvinTemp = response.list[i].main.temp;
    fh = ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(2);
    humidity = response.list[i].main.humidity; 
    windSpeed = response.list[i].wind.speed;
    nameDate = city + " (" + moment().add(5, "day").format("M-D") + ")";
    main = response.list[i].weather[0].main;
    $("#title-card5").html(nameDate);
    $("#temp5").html(fh + " °F");
    $("#hum5").html(humidity + " %");
    $("#main5").html(main);

    localStorage.setItem("title-card5", nameDate);
    localStorage.setItem("temp5", fh);
    localStorage.setItem("hum5", humidity);
    localStorage.setItem("wind5", windSpeed);  
    localStorage.setItem("main5", main);   
}
//----------------------------------------------------------------------------------------------------    
}

});
//-----------------------------------------------------------------------------------------------------------
});

function init() {
    // Main Day Weather//
   var mainCityDateGet = localStorage.getItem("CityDate"); 
   $("#title-card").html(mainCityDateGet); 

   var mainTemp = localStorage.getItem("temp");
   $("#temp").html(mainTemp + " °F");

   var mainHum = localStorage.getItem("hum");
   $("#hum").html(mainHum + " %");

   var mainWind = localStorage.getItem("wind");
   $("#wind").html(mainWind + " MPH");
//------------------------------------------------------------------
// Card 1
    var nameDate1 = localStorage.getItem("title-card1");
   $("#title-card1").html(nameDate1);

   var card1Temp = localStorage.getItem("temp1");
   $("#temp1").html(card1Temp + " °F");

   var card1Hum = localStorage.getItem("hum1");
   $("#hum1").html(card1Hum + " %");

   var card1Wind = localStorage.getItem("wind1");
   $("#wind1").html(card1Wind + " MPH");

   var card1Main = localStorage.getItem("main1");
   $("#main1").html(card1Main);
//-------------------------------------------------------------------
// Card 2
   var nameDate2 = localStorage.getItem("title-card2");
   $("#title-card2").html(nameDate2);

   var card2Temp = localStorage.getItem("temp2");
   $("#temp2").html(card2Temp + " °F");

   var card2Hum = localStorage.getItem("hum2");
   $("#hum2").html(card2Hum + " %");

   var card2Wind = localStorage.getItem("wind2");
   $("#wind2").html(card2Wind + " MPH");

   var card2Main = localStorage.getItem("main2");
   $("#main2").html(card2Main);

//-------------------------------------------------------------------
// Card 3
   var nameDate3 = localStorage.getItem("title-card3");
   $("#title-card3").html(nameDate3);

   var card3Temp = localStorage.getItem("temp3");
   $("#temp3").html(card3Temp + " °F");

   var card3Hum = localStorage.getItem("hum3");
   $("#hum3").html(card3Hum + " %");

   var card3Wind = localStorage.getItem("wind3");
   $("#wind3").html(card3Wind + " MPH");

   var card3Main = localStorage.getItem("main3");
   $("#main3").html(card3Main);

//-------------------------------------------------------------------
// Card 4
   var nameDate4 = localStorage.getItem("title-card4");
   $("#title-card4").html(nameDate4);

   var card4Temp = localStorage.getItem("temp4");
   $("#temp4").html(card4Temp + " °F");

   var card4Hum = localStorage.getItem("hum4");
   $("#hum4").html(card4Hum + " %");

   var card4Wind = localStorage.getItem("wind4");
   $("#wind4").html(card4Wind + " MPH");

   var card4Main = localStorage.getItem("main4");
   $("#main4").html(card4Main);

//-------------------------------------------------------------------
// Card 5
   var nameDate5 = localStorage.getItem("title-card5");
   $("#title-card5").html(nameDate5);

   var card5Temp = localStorage.getItem("temp5");
   $("#temp5").html(card5Temp + " °F");

   var card5Hum = localStorage.getItem("hum5");
   $("#hum5").html(card5Hum + " %");

   var card5Wind = localStorage.getItem("wind5");
   $("#wind5").html(card5Wind + " MPH");

   var card5Main = localStorage.getItem("main5");
   $("#main5").html(card5Main);

// History List ------------------------------------------------------
   var cityVal = localStorage.getItem("city");
   var historyList = $("<a>");
   historyList.html(cityVal);
   historyList.addClass("list-group-item");
   $(".list-group").prepend(historyList);
}



