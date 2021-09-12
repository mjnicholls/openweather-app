// for fetching data from OpenWeather API JSON

class Fetch {
  async getWeather(input) {
    const api_key = "93e2dc557f0290981ca0c7e93046396a";

    // make request to url passing input & api_key variables into string

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api_key}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
