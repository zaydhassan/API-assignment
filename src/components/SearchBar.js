// src/components/SearchBar.js
import React from 'react';

function SearchBar({ placeholder, handleChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      style={{ margin: '20px', padding: '10px', width: '90%' }}
    />
  );
}

export default SearchBar;
