console.clear();
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const description = document.getElementById("description");
const icon = document.getElementById("icon");

// Get the city name from the data attribute
const cityName = document.body.getAttribute("data-city");

async function currentWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a175cdac1996218a60c041507269385e`
  );
  const data = await response.json();

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  icon.appendChild(img);

  city.innerText = data.name;
  description.innerText = data.weather[0].description;
  temperature.innerText = `${data.main.temp} °C`;
}

currentWeather();
