// fetch("https://api.thecatapi.com/v1/images/search")
const imageDogElement = document.getElementById('imageDog')
const generateButtonElement = document.getElementById('generateButton')
const generate = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then (response => response.json())
    .then(json => {
        console.log(json.message)
        imageDogElement.innerHTML = `<img src='${json.message}' height='500px' />`
    })
}
generate()
generateButtonElement.onclick = () =>  generate()