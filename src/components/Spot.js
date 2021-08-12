import React from "react";


export default function Spot({ spot, children, onSelectHandler }) {
  return (
    <div key={spot.properties.id} className="spot" tabIndex={0}
    onClick={onSelectHandler}
    
    >
     <div id="title-container"  
      
     >
        <h3 id={spot.properties.id} className="spot-title">{spot.properties.title}</h3>
        <h5 className="spot-category"> {spot.properties.category}</h5>
        </div>

          {children}
        
    
    </div>
  );
}