const APIKey = "3590698d0ea6a356f08184a99ef7af1c";
const searchBtn = $("#search-button");
const searchValue = $("#search-value").val();

//Eventlistener for search button
searchBtn.on("click", function (event) {
  //stops search button from refreshing page (?)
  event.preventDefault();

  // console.log("CLICKED");
  const searchValue = $("#search-value").val();

  const queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchValue +
    "&appid=" +
    APIKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    const results = response.data;
    console.log(response);
  });
});

// API and AJAX
// const searchValue = $("#search-value").val();

// const queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ searchValue + "&appid=" + APIKey;

// $.ajax({
//   url: queryURL,
//   method: "GET",
// }).then(function (response) {
//   const results = response.data;
//   console.log(results);
// });
