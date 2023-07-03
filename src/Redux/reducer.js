import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';

const initialState = {
  myFavourites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavourites: [...state.myFavourites, payload],
        allCharacters: [...state.myFavourites, payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavourites: state.myFavourites.filter(
          (character) => character.id !== payload
        ),
      };

    case FILTER:
      const filteredChars = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavourites:
          payload === 'allCharacters'
            ? [...state.allCharacters]
            : filteredChars,
      };

    case ORDER:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavourites:
          payload === 'A'
            ? allCharactersCopy.sort((a, b) => a.id - b.id)
            : allCharactersCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
