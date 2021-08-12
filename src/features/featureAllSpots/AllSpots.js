import {addSpot} from '../featureFavorite/featureFavoriteSlice';
import {loadData, selectFilteredAllSpots} from './allSpotsSlice';
import Spot from '../../components/Spot';
import Button from '../../components/Button'
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const divStyle = {
    maxHeight: '90vh',
    overflow: 'auto'
}

 export const AllSpots = () => {

    const allSpots = useSelector(selectFilteredAllSpots);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData());
    } 

    useEffect(onFirstRender, [])


    const onAddSpotHandler = (spot) => {
        dispatch(addSpot(spot));
    }

    return (
        <div id="all-spots" className="spots-container" style={divStyle}>

            {allSpots.map((spot) => (

                <Spot spot={spot} key={spot.properties.id} id={spot.properties.id}
              
                >

  <div>
                    <Button
            onClickHandler={() => onAddSpotHandler(spot)}
         icon='../../assets/plus.png'
          >
            Add to Favorite
          </Button></div>
                    </Spot>
            ))}
            </div>

    )
}

export default AllSpots;