const apiKey = '34d1509fdd133fa5d098f80e900a17f3';

document.getElementById('fetchWeatherBtn').addEventListener('click', fetchWeather);

async function fetchWeather() {
  const location = document.getElementById('locationInput').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      displayWeather(data);
    } else {
      displayError(data.message);
    }
  } catch (error) {
    displayError('Failed to fetch weather data. Please try again.');
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <div class="weather-card">
      <h2>Current Weather</h2>
      <p>Location: ${data.name}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <p>Weather: ${data.weather[0].main}</p>
    </div>
  `;
}

function displayError(message) {
  document.getElementById('errorMessage').textContent = message;
  document.getElementById('weatherInfo').innerHTML = '';
}

// Adds an emoji in the header and changes according to the weather description received

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <div class="weather-card">
      <h2>Current Weather</h2>
      <p>Location: ${data.name}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <p>Weather: ${data.weather[0].description}</p>
    </div>
  `;

  updateWeatherEmoji(data.weather[0].description);
}

function updateWeatherEmoji(description) {
  const weatherEmoji = document.getElementById('weatherEmoji');

  switch (description.toLowerCase()) {
    case 'thunderstorm':
      weatherEmoji.textContent = '⛈️';
      break;
    case 'drizzle':
    case 'rain':
      weatherEmoji.textContent = '🌧️';
      break;
    case 'snow':
      weatherEmoji.textContent = '❄️';
      break;
    case 'clear sky':
      weatherEmoji.textContent = '☀️';
      break;
    case 'clouds':
      weatherEmoji.textContent = '☁️';
      break;
    default:
      weatherEmoji.textContent = '⛅';
      break;
  }
}
