// src/components/PokemonCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonCard({ pokemon }) {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(pokemon.url)
      .then(response => {
        const { sprites } = response.data;
        setImageUrl(sprites.front_default);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error fetching Pokémon image:", error);
        setLoading(false);
      });
  }, [pokemon.url]);

  return (
    <div style={{
      margin: '10px',
      border: '1px solid #ccc',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '200px'  // Fixed width for consistent card sizing
    }}>
      <h4>{pokemon.name.toUpperCase()}</h4>
      {loading ? <p>Loading...</p> : <img src={imageUrl} alt={pokemon.name} style={{ width: '100%' }} />}
    </div>
  );
}

export default PokemonCard;
