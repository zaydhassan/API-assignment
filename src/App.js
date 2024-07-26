// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        setPokemon(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const filteredPokemon = pokemon.filter(poke =>
    poke.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to right, #ade8f4, #ffafcc)',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <SearchBar placeholder="Search Pokémon" handleChange={handleChange} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredPokemon.map((poke, index) => (
          <PokemonCard key={index} pokemon={poke} />
        ))}
      </div>
    </div>
  );
}

export default App;
