import React from 'react';

function BanList({ banList }) {
  return (
    <div>
      <h2>Banned Pokémon Types</h2>
      <ul>
        {banList.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
}

export default BanList;
