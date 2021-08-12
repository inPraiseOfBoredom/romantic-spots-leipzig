import {selectSearchTerm} from '../featureSearch/featureSearchSlice';
import { SearchTerm } from '../featureSearch/SearchTerm';

export const addSpot = (spot) => {
    return {
        type: 'favoriteSpots/addSpot',
        payload: spot
    }
}

export const removeSpot = (spot) => {
    return {
        type: 'favoriteSpots/removeSpot',
        payload: spot
    }
} 

const initialFavoriteSpots = [];
export const favoriteSpotsReducer = (favoriteSpots = initialFavoriteSpots, action) => {
switch(action.type) {
      case 'favoriteSpots/addSpot': 
       return  [...favoriteSpots, action.payload];
case 'favoriteSpots/removeSpot': 
return favoriteSpots.filter(spot => spot.properties.id !== action.payload.properties.id);
default: return favoriteSpots;

}
}

export const selectFavoriteSpots = state => state.favoriteSpots;

export const selectFilteredFavoriteSpots = (state) => {
 const favoriteSpots = selectFavoriteSpots(state);
 const searchTerm = selectSearchTerm(state);

 return favoriteSpots.filter((spot) => spot.properties.title.toLowerCase().includes(searchTerm.toLowerCase()));


}