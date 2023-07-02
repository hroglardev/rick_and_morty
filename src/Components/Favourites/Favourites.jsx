import Card from '../Card/Card';
import { connect } from 'react-redux';

const Favourites = ({ myFavourites }) => {
  return (
    <div>
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
