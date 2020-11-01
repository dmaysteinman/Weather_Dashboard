const APIKey = "3590698d0ea6a356f08184a99ef7af1c";
const searchBtn = $("#search-button");
const searchValue = $("#search-value").val();
const temperatureEL = $("#temp");
const cityEl = $("#city");

//Eventlistener for search button
searchBtn.on("click", function (event) {
  //stops search button from refreshing page (?)
  event.preventDefault();
  console.log("CLICKED");
});

// pulls the weather from the API when user types in a city
function todaysWeather() {
    const queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchValue +
      "&appid=" +
      APIKey;
  
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
  
      // const city = response.name;
      // const temp = response.main.temp;
  
      // temperatureEL.text(temp);
      // cityEl.text(city);
    });
  }

// To convert to K to F
// - 273.15) * 1.80 + 32).toFixed(2);
