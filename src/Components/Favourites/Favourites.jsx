import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions';
import { useState } from 'react';

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
    <div>
      <select name='' id='' onChange={handleOrder}>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <select name='' id='' onChange={handleFilter}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unkonwn'>unknown</option>
        <option value='allCharacters'>All Characters</option>
      </select>
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
            origin={favourite.origin.name}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavourites: state.myFavourites,
  };
};

export default connect(mapStateToProps, null)(Favourites);
