// src/App.jsx
import React, { useState } from 'react';
import Pokedex from './components/Pokedex';
import BanList from './components/BanList';

function App() {
  const [banList, setBanList] = useState([]);

  const addBan = (type) => {
    if (!banList.includes(type)) {
      setBanList([...banList, type]);
    }
  };

  return (
    <div>
      <h1>Pokédex Discovery App</h1>
      <Pokedex banList={banList} addBan={addBan} />
      <BanList banList={banList} />
    </div>
  );
}

export default App;
