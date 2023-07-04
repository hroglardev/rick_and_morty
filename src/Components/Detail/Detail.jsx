import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.wrapper}>
      <div className={style.card}></div>
      <div classname={style.textWrapper}>
        <h2 className={style.text}>Name: {character?.name}</h2>
        <h2 className={style.text}>Status: {character?.status}</h2>
        <h2 className={style.text}>Species: {character?.species}</h2>
        <h2 className={style.text}>Gender: {character?.gender}</h2>
        <h2 className={style.text}>Origin: {character?.origin?.name}</h2>
      </div>
      <div className={style.imageWrapper}>
        <img
          src={character?.image}
          alt={character?.name}
          className={style.image}
        />
      </div>
    </div>
  );
};

export default Detail;
