const degreeElement = document.getElementById('degree')
const conditionTextElement = document.getElementById('conditionText')
const weatherIconElement = document.getElementById('weatherIcon')
const searchCityElement = document.getElementById('searchCity')
const weatherLocationElement = document.getElementById('weatherLocation')
const regionElement = document.getElementById('region')
const dateElement = document.getElementById('date')



const location1 = "bangalore"
const apiKey = '52436686893145c585a121019232408';
const base_Url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location1}`
// const weather1 = async () => {
// try {
// 	const response = await fetch(url);
// 	const result = await response.json();
// 	console.log(result)
// 	return result

// } catch (error) {
// 	console.error(error);
// 	let errorMark = `?`
// 	console.error(errorMark);
// 	return errorMark
// 	}
// }


const searchCity = async () => {
	try {
		const response = await fetch(`${base_Url}${searchCityElement.value}`);
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
	
	if (degree.location.name == degree.location.region)
		region = degree.location.country
	else
		region  = degree.location.region
	weatherLocationElement.innerText = (degree.location.name)
	regionElement.innerText = region

	dateElement.innerText = degree.location.localtime

	console.log(degree.current.condition.icon)
	// `<img src='${json.image.url}'  />`
	weatherIconElement.src = `${degree.current.condition.icon}`
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
