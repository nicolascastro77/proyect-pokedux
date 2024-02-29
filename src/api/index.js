import axios from 'Axios';

export const getPokemons = () => {
    return axios.get ('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.data.results)
    .catch(err => console.log(err));
}

export const getPokemonsDetails = (pokemon) => {
    return axios.get (pokemon.url)
    .then(res => {
        console.log("🚀 ~ getPokemonsDetails ~ res:", res)
        return res.data
    })
    .catch(err => console.log(err));
}