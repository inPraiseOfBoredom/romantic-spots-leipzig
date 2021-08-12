import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from '!mapbox-gl';
import Marker from '../components/Marker';
import {spots} from '../data.js';
import '../index.css';
import {SearchTerm } from '../features/featureSearch/SearchTerm';
import {AllSpots} from '../features/featureAllSpots/AllSpots';
import { FavoriteSpots } from '../features/featureFavorite/favoriteSpots';
import {Map } from './Map';

 export function App () {

  //  mapboxgl.accessToken = 'pk.eyJ1IjoiaW5wcmFpc2VvZmJvcmVkb20iLCJhIjoiY2twY2Niem82MGpxcTJ2cnJsM2dqZjlrYyJ9.2Pgr3XNKf1M69FFcnaeJgg';
  //    const mapContainerRef = useRef(null);
  
  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: mapContainerRef.current,
  //     style: "mapbox://styles/mapbox/dark-v10",
  //     center: [12.3731, 51.3397],
  //     zoom: 12,
  //   });

  //   map.addControl(new mapboxgl.NavigationControl(), 'top-right');

  //    map.on('load', () => {
  //  spots.features.forEach(spot => {
  //      const geometry = spot.geometry;
  //      const id = spot.properties.id;
       
  //      const markerNode = document.createElement('div');
  //      ReactDOM.render(<Marker id={id} />, markerNode);
       
  //     const popup = new mapboxgl.Popup({className: 'romantic'}).setHTML("<h3>" +
  //           spot.properties.title +
  //           "</h3><p>" +
  //           spot.properties.description +
  //           "</p>")

  //      new mapboxgl.Marker(markerNode).setLngLat(geometry.coordinates).setPopup(popup).addTo(map);
  //    })});

  //    spots.features.forEach((spot, i) => {
  //       const list = document.getElementById(".list");
  //       list.childNodes.forEach
  //       .addEventListener("click", listeningFunction);
  //     });
    
  //   const listeningFunction = (event) => {
  //     for (let i = 0; i < spots.features.length; i++) {
  //       if (event.target.id == spots.features[i].properties.id) {
  //   map.flyTo({
  //           center: spots.features[i].geometry.coordinates,
  //           zoom: 17
  //         });
        
  //     }
  //   }
  

  //   return () => map.remove();},
  //  [])

  return ( 
    <div>
    <div className="wrapper">
      <Map />
  <div className="list"> <SearchTerm   />
  <h2> Favorite Romantic Spots</h2>
  <FavoriteSpots/>
   <h2> Romantic Spots </h2>
  <AllSpots  />


   </div>
   </div>
  
  
 

 
  
<div id='icons'>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  
  
   </div>
   )
  }


  // const utilities = () => {
  //   const listeningFunction = (event) => {
  //     for (let i = 0; i < spots.features.length; i++) {
  //       if (event.target.id == spots.features[i].properties.id) {
  //         this.map.flyTo({
  //           center: spots.features[i].geometry.coordinates,
  //           zoom: 17
  //         });
          
  //       }
  //     }
  //   }