const degreeElement = document.getElementById('degree')

const apiKey = '52436686893145c585a121019232408';
// `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=sikkim`
const weather1 = async () => {
try {
	const response = await fetch(url);
	const result = await response.json();
	return result
	
} catch (error) {
	console.error(error);
}
}

(async () => {
	degree = await weather1()
	console.log(degree.current.temp_c)
	degreeElement.innerText = `${Math.ceil(degree.current.temp_c)}°`
})()

// getWeatherData()
// searchCity()
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
