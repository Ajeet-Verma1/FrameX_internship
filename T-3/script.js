const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const currentTemp = document.getElementById('currentTemp');
const currentConditions = document.getElementById('currentConditions');
const forecastData = document.getElementById('forecastData');

searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  fetchWeatherData(location);
});

function fetchWeatherData(location) {
  // Replace 'YOUR_API_KEY' with your actual API key
  const apiKey = '8d430330c51542a540287d87a7bfb6dd';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const currentTemperature = data.main.temp;
      const conditionText = data.weather[0].description;
      currentTemp.textContent = `Temperature: ${currentTemperature}°C`;
      currentConditions.textContent = `Conditions: ${conditionText}`;
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
      currentTemp.textContent = 'Error fetching weather data';
      currentConditions.textContent = '';
    });
}