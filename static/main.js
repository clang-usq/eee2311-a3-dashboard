
console.log('Loaded Garden Monitoring System');

//can get this from a fetch request to the API
const weatherData = {
	humidity: 64,
	windSpeed: 12,
	windDirection: "NE",
	rain: 10,
	//epoch time - then convert in function to local timestamp
	lastUpdate: 1775172151,
	//add additional if needed
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
	document.getElementById("lastUpdate").textContent = data.lastUpdate;
}


// fetch request to API endpoint
async function requestWeather(){
	let response = await fetch(
		"http://192.168.1.50/api/v1/sensor",
	);
	//log an error if status is not 200. 
	if(!response.ok) {
		throw new Error(`Error: ${response.status}`);
	}
	//else log the response and parse as json.
	const data = await response.json();
	console.log(data);
}

//pass the json response here to format data to send to updateDashboard
function parseJson(){
	console.log('Parsing received data');

	//parse data here

}

updateDashboard(weatherData);
