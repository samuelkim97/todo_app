const API_KEY = "48b067f9c4355b80947c38670f47bce3";

function onGeoSuc(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector(
        "#weather-container span:first-child"
      );
      const temp = document.querySelector(
        "#weather-container span:nth-child(2)"
      );
      const weather = document.querySelector(
        "#weather-container span:last-child"
      );
      name.innerText = data.name;
      temp.innerText = `${Math.round(data.main.temp)}°C`;
      weather.innerText = data.weather[0].main;
    });
}

function onGeoFail() {
  alert("Failed to get your current position.");
}

navigator.geolocation.getCurrentPosition(onGeoSuc, onGeoFail);
