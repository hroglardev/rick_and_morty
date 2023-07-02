import { ADD_FAV, REMOVE_FAV } from './action-types';

const initialState = {
  myFavourites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavourites: [...state.myFavourites, payload] };
    case REMOVE_FAV:
      return {
        ...state,
        myFavourites: state.myFavourites.filter(
          (character) => character.id !== payload
        ),
      };
    default:
      return { ...state };
  }
};

export default reducer;
