import { createStore, combineReducers } from "redux";

import {favoriteSpotsReducer} from '../features/featureFavorite/featureFavoriteSlice';
import {searchTermReducer} from '../features/featureSearch/featureSearchSlice';
import {allSpotsReducer} from '../features/featureAllSpots/allSpotsSlice';
//mport { selectedSpotReducer } from "../features/selectedSpot/selectedSlice";

  export const store = createStore(combineReducers({
    allSpots: allSpotsReducer,
    favoriteSpots: favoriteSpotsReducer,
    searchTerm: searchTermReducer,
    //selectedSpot: selectedSpotReducer
    
}));






