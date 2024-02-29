import React from 'react'
import { MdOutlineCatchingPokemon } from "react-icons/md";

export default function StarButton({ isFavorite, onClick }) {

    const Icon = isFavorite ? (
        <MdOutlineCatchingPokemon
          className="absolute top-2 right-2 cursor-pointer transition transform hover:scale-110"
        />
      ) : (
        <MdOutlineCatchingPokemon
          className="absolute top-2 right-2 text-yellow-500 cursor-pointer transition transform hover:scale-110"
        />
      );

    return (
        <div>
            <button  onClick={onClick}> {Icon}</button>
        </div>
    )
}
