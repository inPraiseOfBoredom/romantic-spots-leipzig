import React from 'react';
import Spot from '../../components/Spot';
import Button from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';


import { removeSpot, selectFilteredFavoriteSpots } from './featureFavoriteSlice';

const divStyle = {
  padding: "5px",
   borderBottom: "3px dotted #ebebeb",
}

export const FavoriteSpots = () => {
    const favoriteSpots = useSelector(selectFilteredFavoriteSpots);
    const dispatch = useDispatch();

    const onRemoveSpotHandler = (spot) => {
     dispatch(removeSpot(spot));
    }

    return (
        <div id="favorite-spots" className="spots-container" style={divStyle}>
            {favoriteSpots.map(createSpotComponent)}

        </div>
    )

     function createSpotComponent(spot) {
    return (
      <Spot spot={spot} key={spot.properties.id} className="favorite">
        <Button
          onClickHandler={() => onRemoveSpotHandler(spot)} >
        
          Remove Favorite
        </Button>
      </Spot>
    )
  }
}
