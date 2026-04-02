
console.log('Loaded Garden Monitoring System');

//can get this from a fetch request to the API
const weatherData = {
  humidity: 64,
  windSpeed: 12,
  windDirection: "NE",
  rain: 10
};

/**
 * Weather dashboard data.
 * @typedef {Object} weatherData
 * @property {number} humidity - Relative humidity.
 * @property {number} windSpeed - Wind speed.
 * @property {string} windDirection - Wind direction.
 * @property {number} rain - Rain amount.
 */

/**
 * @param {weatherData} data
 */
function updateDashboard(data) {
  document.getElementById("humidity").textContent = data.humidity;
  document.getElementById("windSpeed").textContent = data.windSpeed;
  document.getElementById("windDirection").textContent = data.windDirection;
  document.getElementById("rain").textContent = data.rain;
}


// fetch request to API endpoint



updateDashboard(weatherData);
