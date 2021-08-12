import { spots } from '../../data';
import { selectSearchTerm } from '../featureSearch/featureSearchSlice';


export const loadData = () => {
    return {
        type: 'allSpots/loadData',
        payload: spots.features
    }
}

const initialState = [];
export const allSpotsReducer = (allSpots = initialState, action) => {

    switch (action.type) {
     case 'allSpots/loadData': return action.payload;
     case 'favoriteSpots/addSpot' :
         return allSpots.filter(spot => spot.properties.id !== action.payload.properties.id);
     case 'favoriteSpots/removeSpot':
         return [...allSpots, action.payload];
     default: return allSpots;    

    }
}

export const selectAllSpots = state => state.allSpots;



export const selectFilteredAllSpots = (state) => {
    const allSpots = selectAllSpots(state);
    const searchTerm = selectSearchTerm(state);

    return allSpots.filter((spot) => 
    spot.properties.title.toLowerCase().includes(searchTerm.toLowerCase()));
}