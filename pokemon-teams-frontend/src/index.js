const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')

fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(trainers => makeCards(trainers))

const allPokemon = fetch(POKEMONS_URL)
    .then(response => response.json())
    .then(results => listPokemon(results))

function makeCards(trainers){
    trainers.forEach(trainer => {
        const card = document.createElement('div')

        card.className = 'card'
        card.setAttribute("data-id", `${trainer.id}`)
        card.innerHTML = `<p>${trainer.name}</p>
        <button data-trainer-id=${trainer.id}>Add Pokemon</button>
        <ul></ul>`
        
        const trainerPokemon = pokemonByTrainer(trainer, allPokemon)
        const pokemon = document.createElement('li')
        pokemon.innerHTML

        // listPokemon(trainer)

        main.append(card)
    })
}

// function listPokemon(pokemons){
//     // pokemonByTrainer(trainer,pokemons)

// }

function listPokemon(pokemons){
    pokemons.map(pokemon => {return [].push(pokemon)})
}
function pokemonByTrainer(trainer,pokemons){
    pokemons.filter(pokemon => pokemon.trainer_id == 1)
}