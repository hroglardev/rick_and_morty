import { Link, NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import style from './Card.module.css';

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavourites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavourites = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  };

  useEffect(() => {
    myFavourites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavourites]);

  return (
    <div className={style.wrapper}>
      <div className={style.buttonContainer}>
        <button onClick={handleFavourites} className={style.button}>
          {isFav ? '❤️' : '🤍'}{' '}
        </button>
      </div>
      <div className={style.buttonContainer2}>
        <button onClick={() => onClose(id)} className={style.button}>
          X
        </button>
      </div>
      <img src={image} alt={name} className={style.image} />
      <NavLink to={`/detail/${id}`} className={style.link}>
        <h2 className={style.charInfo}>{name}</h2>
      </NavLink>
      <h2 className={style.charInfo}>{status} </h2>
      <h2 className={style.charInfo}>{species}</h2>
      <h2 className={style.charInfo}>{gender} </h2>
      <h2 className={style.charInfo}>{origin.name} </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavourites: state.myFavourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
