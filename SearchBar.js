import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <div style={{ padding: '10px' }}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        style={{ width: '300px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default SearchBar;
