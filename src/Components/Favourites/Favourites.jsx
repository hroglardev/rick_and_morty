import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions';
import { useState } from 'react';
import style from './Favourites.module.css';

const Favourites = ({ myFavourites }) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.containerSelect}>
        <select name='' id='' onChange={handleOrder} className={style.select}>
          <option value='A' className={style.option}>
            Ascendente
          </option>
          <option value='D' className={style.option}>
            Descendente
          </option>
        </select>
        <select name='' id='' onChange={handleFilter} className={style.select}>
          <option value='Male' className={style.option}>
            Male
          </option>
          <option value='Female' className={style.option}>
            Female
          </option>
          <option value='Genderless' className={style.option}>
            Genderless
          </option>
          <option value='unkonwn' className={style.option}>
            unknown
          </option>
          <option value='allCharacters' className={style.option}>
            All Characters
          </option>
        </select>
      </div>
      <div className={style.container}>
        {myFavourites?.map((favourite) => {
          return (
            <Card
              key={favourite.id}
              id={favourite.id}
              name={favourite.name}
              status={favourite.status}
              species={favourite.species}
              gender={favourite.gender}
              image={favourite.image}
              origin={favourite.origin}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavourites: state.myFavourites,
  };
};

export default connect(mapStateToProps, null)(Favourites);
