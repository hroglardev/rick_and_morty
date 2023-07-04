import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={style.wrapper}>
      <button onClick={() => onSearch(id)} className={style.button}>
        Add Character
      </button>
      <input
        type='search'
        onChange={handleChange}
        value={id}
        className={style.input}
        placeholder='Enter an id number'
      />
    </div>
  );
}
