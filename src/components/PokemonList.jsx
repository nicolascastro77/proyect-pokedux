import PokemonCard from "./PokemonCard";

import React from 'react'

const pokemonData = [
    {
        id: 1,
        title: 'Bulbasaur',
        coverImage: 'https://i.pinimg.com/736x/fa/cc/e6/facce6ffa1e95f3ec5ea68a6721009ad.jpg',
        types: ['Grass', 'Poison'],
    },
    {
        id: 2,
        title: 'Charmander',
        coverImage: 'https://i.pinimg.com/736x/fa/cc/e6/facce6ffa1e95f3ec5ea68a6721009ad.jpg',
        types: ['Fire'],
    },
    {
        id: 3,
        title: 'Squirtle',
        coverImage: 'https://i.pinimg.com/736x/fa/cc/e6/facce6ffa1e95f3ec5ea68a6721009ad.jpg',
        types: ['Water'],
    },
    {
        id: 3,
        title: 'Squirtle',
        coverImage: 'https://i.pinimg.com/736x/fa/cc/e6/facce6ffa1e95f3ec5ea68a6721009ad.jpg',
        types: ['Water'],
    },
    {
        id: 3,
        title: 'Squirtle',
        coverImage: 'https://i.pinimg.com/736x/fa/cc/e6/facce6ffa1e95f3ec5ea68a6721009ad.jpg',
        types: ['Water'],
    },
    {
        id: 3,
        title: 'Squirtle',
        coverImage: 'https://i.pinimg.com/736x/fa/cc/e6/facce6ffa1e95f3ec5ea68a6721009ad.jpg',
        types: ['Water'],
    },
    // Agrega más objetos de datos según sea necesario
];



export default function PokemonList({ pokemons }) {
    return (
        <div className="mx-10 my-10 grid grid-cols-5 gap-4">
            {pokemons.map((pokemon) => {
                return <PokemonCard
                    name={pokemon.name}
                    key={pokemon.name}
                    image={pokemon.sprites.front_default}
                    habilities = {pokemon.types}
                    id= {pokemon.id}
                    favorite={pokemon.favorite}
                // coverImage={pokemon.coverImage}
                // types={pokemon.types}
                />
            })}
        </div>
    );
}
