const degreeElement = document.getElementById('degree')
const conditionTextElement = document.getElementById('conditionText')
const weatherIconElement = document.getElementById('weatherIcon')
const searchCityElement = document.getElementById('searchCity')
const weatherLocationElement = document.getElementById('weatherLocation')
const regionElement = document.getElementById('region')
const dateElement = document.getElementById('date')
const humidityElement = document.getElementById('humidity')
const windSpeedElement = document.getElementById('windSpeed')
const windDirElement = document.getElementById('windDir')
const pressureElement = document.getElementById('pressure')

const location1 = "bangalore"
const apiKey = '52436686893145c585a121019232408';
const base_Url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location1}`

window.onload = function () {
	getWeatherData()
}
const searchCity = async () => {
	try {
		if (searchCityElement.value == '')
		{
			var searchCityValue = 'kolkata'
		}
		else
		{
			searchCityValue = searchCityElement.value
		}
		const response = await fetch(`${base_Url}${searchCityValue}`);
		console.log(response)
		const result = await response.json();
		return result
	
	} catch (error) {
		console.error(error);
		let errorMark = `?`
		console.error(errorMark);
		return errorMark
		}}

const getWeatherData = async () => {
	degree = await searchCity()
	console.log(degree)
	degreeElement.innerText = `${Math.ceil(degree.current.temp_c)}°`
	conditionTextElement.innerText = degree.current.condition.text
	weatherLocationElement.innerText = (degree.location.name)
	if (degree.location.name === degree.location.region || degree.location.region == '')
	region = `| ${degree.location.country}`
	else
	region  =  `| ${degree.location.region}`
	regionElement.innerText = region
	dateElement.innerText = `${degree.location.localtime} `
	weatherIconElement.src = degree.current.condition.icon
	console.log(degree.current.humidity)
	humidityElement.innerText = `${degree.current.humidity}%`
	windSpeedElement.innerText = `${degree.current.wind_kph} kmph`
	windDirElement.innerText = `${degree.current.wind_dir}`
	pressureElement.innerText = `${degree.current.pressure_in} in`
}
// getWeatherData()



// showWeatherData() ->updates on the DOM










// const apiKey = "52436686893145c585a121019232408";
// // const location = "New+York"; // Replace with your desired location

// async function fetchData() {
//   const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=New+York`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error(`API request failed with status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return null;
//   }
// }

// // Call the async function to fetch data
// (async () => {
//   const weatherData = await fetchData();

//   if (weatherData) {
//     // Process the data received from the API
//     console.log(weatherData);
//   } else {
//     console.log("Failed to fetch weather data.");
//   }
// })();
