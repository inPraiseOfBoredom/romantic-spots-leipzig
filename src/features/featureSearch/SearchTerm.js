
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm , clearSearchTerm, selectSearchTerm} from './featureSearchSlice';
import searchIcon from '../../assets/search-solid.svg';

export const SearchTerm = () => {

 const searchTerm = useSelector(selectSearchTerm);
 const dispatch = useDispatch();

 const onSearchChangeHandler = (e) => {
     const userInput = e.target.value;
     dispatch(setSearchTerm(userInput));
 }

const onClearSearchHandler = () => {
    dispatch(clearSearchTerm());
}

return (
   <div id="search-container">
       
       <input 
        id='search-input'
        type="text"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="Search romantic spots"
       />
       {searchTerm.length > 0 && (
         <button 
         onClick={onClearSearchHandler}
         type='button'
         id="search-clear-button"
         >
             Clear
             </button>
       )
       }

   </div>

)
}

