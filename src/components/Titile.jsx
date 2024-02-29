import React from 'react';

export default function Title() {
  return (
    <div className="flex text-center justify-center items-center my-2">
      <img
        src="https://i.ibb.co/9vZ05Mr/icons8-pokemon-96.png"   // Reemplaza con la URL de tu imagen
        alt="Pokedux Logo"
        className=" h-8 w-8"
      />
      <h1 className="text-2xl font-extrabold text-yellow-600">Pokedux</h1>
    </div>
  );
}