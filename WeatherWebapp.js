const url2 = 'https://open-weather13.p.rapidapi.com/city/landon';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '858689371bmshf8643ba1691968dp16c6afjsn01257654bc2a',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
const weather1 = async () => {
try {
	const response = await fetch(url2, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

(async () => {
	await weather1()

})()