import React from 'react'

export default function Searcher() {
    return (
        <div className="flex items-center max-w-xs mx-auto bg-gray-200 p-2 rounded-full shadow-md">
            <input
                type="text"
                placeholder="Buscar Pokémon"
                className="w-full px-2 py-1 bg-gray-200 text-gray-700 placeholder-gray-500 border-none rounded-full focus:outline-none"
            />
            <button
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-full focus:outline-none"
            >
                Buscar
            </button>
        </div>
    );
}
