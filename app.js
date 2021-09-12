// first, instantiate classes

const fetchData = new Fetch();
const weatherBox = new WeatherBox();

// next, add our event listeners//


const find = document.getElementById("findCity");

const findButton = document.getElementById("submit");

// here we add our event listener so the user can search by city

findButton.addEventListener("click", () => {
  const currentCity = find.value;

  fetchData.getWeather(currentCity).then((data) => {
   
    // here we call our WeatherBox method 
    weatherBox.populateweatherBox(data);

    // here we call saveToLocalStorage
    weatherBox.saveToLocalStorage(data);
  });
});

// additional for local storage, shows last city searched for

window.addEventListener("DOMContentLoaded", () => {
  const lastSearch = weatherBox.retrieveFromLocalStorage();
  weatherBox.populateweatherBox(lastSearch);
});
