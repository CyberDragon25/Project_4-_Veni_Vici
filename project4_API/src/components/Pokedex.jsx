import React, { useState, useEffect } from 'react';
import { fetchPokemon } from '../utils/api';

function Pokedex({ banList, addBan }) {
  const [pokemon, setPokemon] = useState(null);

  const getRandomPokemon = async () => {
    let id;
    let data;
    do {
      id = Math.floor(Math.random() * 898) + 1;  // Random Pokémon ID
      data = await fetchPokemon(id);
    } while (banList.includes(data.types[0].type.name)); // Check if type is banned

    setPokemon(data);
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

  return (
    <div>
      <h2>Pokédex</h2>
      <button onClick={getRandomPokemon}>Discover New Pokémon</button>
      {pokemon && (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Name: {pokemon.name}</p>
          <p>Type: {pokemon.types[0].type.name}</p>
          <button onClick={() => addBan(pokemon.types[0].type.name)}>Ban Type</button>
        </div>
      )}
    </div>
  );
}

export default Pokedex;
