import React from 'react';
import StarButton from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

    


export default function PokemonCard({ name, image, habilities,id,favorite}) {
    const dispatch = useDispatch()
    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId:id}))
    }
    return (
        <div className="relative max-w-sm bg-white rounded-lg overflow-hidden shadow-md">
            <StarButton isFavorite={favorite} onClick={handleOnFavorite} />
            <img src={image} alt={name} className="w-full h-32 object-cover" />
            <div className="p-2">
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                <div className="mt-2 flex flex-col w-16 ">
                    {habilities.map((habilidad) => (
                        <span
                            key={habilidad}
                            className="bg-gray-200 text-gray-700 py-1 px-2 mb-1 text-xs rounded-full mx-auto" 
                        >
                            {habilidad.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}