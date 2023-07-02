import './App.css';
import Cards from './Components/Cards/Cards';
import Nav from './Components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState();
  const onSearch = (id) => {
    for (let i = 0; i < characters.length; i++) {
      if (Number(id) === characters[i].id)
        return window.alert('Ya existe ese Personaje');
    }
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => console.log(error));
  };

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
    // esta funcion devuelve un numero entre max y min
  };
  const randomSearch = () => {
    const randomId = getRandomArbitrary(1, 827);
    for (let i = 0; i < characters.length; i++) {
      if (randomId === characters[i].id)
        return window.alert('Ya existe ese Personaje');
    }
    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => console.log(error));
  };
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
    // cuando hago click en la cruz, reseteo el estado local a todos los elementos que no contengan el ID
  };
  return (
    <div>
      <Nav onSearch={onSearch} randomSearch={randomSearch} />;
      <Cards characters={characters} onClose={onClose} />;
    </div>
  );
}

export default App;
