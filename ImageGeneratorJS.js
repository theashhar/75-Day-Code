// fetch("https://api.thecatapi.com/v1/images/search")
const imageDogElement = document.getElementById('image')
const generateButtonElement = document.getElementById('generateButton')
const searchHeroElement = document.getElementById('searchHero')
const searchBtnElement = document.getElementById('searchBtn')
const heroNameElement = document.getElementById('heroName')

const SuperheroToken = 1389261215019547
const BASE_URL = `https://superheroapi.com/api.php/1389261215019547`
const generateHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then (response => response.json())
    .then(json => {
        console.log(json.powerstats.intelligence)
        heroNameElement.innerText = (json.name) 
        imageDogElement.innerHTML = `<img src='${json.image.url}'  />`
    })
}
generateHero(216)
generateButtonElement.onclick = () => generateHero(Math.ceil(Math.random()*731))

const searchHero = () => {
    fetch(`${BASE_URL}/search/${searchHeroElement.value}`)
    .then (response => response.json())
    .then(json => {
        heroNameElement.innerText = (json.results[0].name)
        imageDogElement.innerHTML = `<img src='${json.results[0].image.url}' height='500px' />`
    })
}
