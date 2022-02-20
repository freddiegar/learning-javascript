import fetch from 'node-fetch'

console.log('========== fetch ==========')

const url = 'https://pokeapi.co/api/v2/pokemon/'

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

console.log('========== async ==========')

const query = async() => {
    try {
        const res = await fetch(url)
        const data = await res.json()

        console.log('========== map ==========')

        data.results.map(pokemon => console.log(pokemon.name))

        console.log('========== filter ==========')

        const liked = data.results.filter(pokemon => pokemon.name === 'bulbasaur')

        console.log(liked)

        return data.results
    } catch (error) {
        console.log(error)
    }
}

query()
