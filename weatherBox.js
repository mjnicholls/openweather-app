class WeatherBox {
  constructor() {
    this.weatherBoxContainer = document.getElementById("weatherBox");
    this.city;
    this.defaultCity = "London";
  }

  populateweatherBox(data) {
    this.weatherBoxContainer.innerHTML = `
  
       
            <div class="card-body">
            <h6 class="glory"><img src='https://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@2x.png' alt='weathericon'></h5>
                <h3 class="glory5" id="centered">${data.name}, ${
      data.sys.country
    }</h5>
                <h3 class="glory5" id="centered">${data.main.temp}°C</h5>
                <h6 class="glory" id="centered"> ${data.weather[0].description.toUpperCase()}</p>
                <h6 class="glory" id="centered">Highs: ${
                  data.main.temp_max
                }°C. Lows: ${data.main.temp_min}°C</h6>
                <p class="glory" id="centered">Wind speed: ${
                  data.wind.speed
                }MPH</p>
          
            </div>
        
        
        
        `;
  }

  clearWeatherBox() {
    weatherBoxContainer.innerHTML = city;
  }

  saveToLocalStorage(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  retrieveFromLocalStorage() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
