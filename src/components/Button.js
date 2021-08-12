import React from "react";
import icon from '../assets/plus.png';
      

export default function Button({ children, onClickHandler}) {
  return (
   <div id="button-container">
    <button className="favorite-button" onClick={onClickHandler}>
      <
      img className="heart-icon" width="32px" src={icon}/>
      {children}
    </button>
    </div>
  )
      
}
