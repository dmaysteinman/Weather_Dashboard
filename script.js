const APIKey = "3590698d0ea6a356f08184a99ef7af1c";
const searchBtn = $("#search-button");
const searchValue = $("#search");

//Eventlistener for search button
searchBtn.on("click", function (event) {
  let cityName = searchValue.val();
  //stops search button from refreshing page (?)
  event.preventDefault();
  console.log("CLICKED");
  console.log(searchValue);
  console.log(cityName);
  todaysWeather(cityName);
});

// pulls the weather info from the API when user types in a city
function todaysWeather(cityName) {
  const queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    
    const city = response.name;
    const tempF = (response.main.temp - 273.15) * 1.80 + 32; 
    const humidity = response.main.humidity;
    const lat = response.coord.lat;
    const lon = response.coord.lon;
    
    
    // Prints out weather info from response into card
    $("#city").text("The weather in " + city + " today is:");
    $("#temp").text("The temperature is " + tempF.toFixed(2) + " degrees Fahrenheit");
    $("#humidity").text("The humidity is " + humidity);
    
    // gets UV Index
    function getUVIndex(lat,lon) {
      const queryURL = 
        "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid="+ APIKey;
        $.ajax({
          url: queryURL,
          method: "GET",
        }).then(function (response) {
          const uvIndex = response.value; 
          console.log(uvIndex);
          // prints out UVIndex info from response into card
          $("#UVindex").text("The UV Index is " + uvIndex);
          // colors the uvIndex
          if (uvIndex <= 3) {
            $("#UVindex").css("background-color", "green");
          } else if (uvIndex >= 3 && uvIndex <= 5) {
            $("#UVindex").css("background-color", "yellow");
          } else if (uvIndex > 5 && uvIndex <= 7) {
            $("#UVindex").css("background-color", "orange");
          } else if (uvIndex > 7) {
            $("#UVindex").css("background-color", "red");
          }
      });
    };
    getUVIndex(lat,lon)
  });
};

