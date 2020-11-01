const APIKey = "3590698d0ea6a356f08184a99ef7af1c";
const searchBtn = $("#search-button");
const searchValue = $("#search");
const temperatureEL = $("#temp");
const cityEl = $("#city");


//Eventlistener for search button
searchBtn.on("click", function (event) {
  //stops search button from refreshing page (?)
  let cityName = searchValue.val();
  event.preventDefault();
  console.log("CLICKED");
  console.log(searchValue);
  console.log(cityName);
  todaysWeather();

});

// pulls the weather from the API when user types in a city
function todaysWeather(cityName) {
  const queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    const city = response.name;
    const temp = response.main.temp;

    temperatureEL.text(temp);
    cityEl.text(city);
  });s
}

// To convert to K to F
// - 273.15) * 1.80 + 32).toFixed(2);
