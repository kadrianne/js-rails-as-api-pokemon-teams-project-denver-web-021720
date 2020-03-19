const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(trainers => makeCards(trainers))

function makeCards(trainers){
    trainers.forEach(trainer => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `<p>${trainer.name}</p>
    <button>Add Pokemon</button>
    <ul></ul>`
    document.body.append(card)
    })
}