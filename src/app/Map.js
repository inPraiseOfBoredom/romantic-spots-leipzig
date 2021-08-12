import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from '!mapbox-gl';
import Marker from '../components/Marker';
import {spots} from '../data.js';
import Spot from '../components/Spot'
import {AllSpots} from '../features/featureAllSpots/AllSpots';




 mapboxgl.accessToken = 'pk.eyJ1IjoiaW5wcmFpc2VvZmJvcmVkb20iLCJhIjoiY2twY2Niem82MGpxcTJ2cnJsM2dqZjlrYyJ9.2Pgr3XNKf1M69FFcnaeJgg';

export const Map = () => {
const mapContainerRef = useRef(null);
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [12.3731, 51.3397],
      zoom: 12,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

     map.on('load', () => 
   spots.features.forEach(spot => {
       const geometry = spot.geometry;
       const id = spot.properties.id;
       
       const markerNode = document.createElement('div');
       ReactDOM.render(<Marker id={id} />, markerNode);
       
      const popup = new mapboxgl.Popup({className: 'romantic'}).setHTML("<h3>" +
            spot.properties.title +
            "</h3><p>" +
            spot.properties.description +
            "</p>")

       const marker = new mapboxgl.Marker(markerNode).setLngLat(geometry.coordinates).setPopup(popup).addTo(map);
    

      const listener = (event) => {
       for (let i = 0; i < spots.features.length; i++) {
        if (event.target.id == spots.features[i].properties.id) {
          console.log(spots.features[i].geometry.coordinates);
          map.flyTo({
            center: spots.features[i].geometry.coordinates,
            zoom: 17
          });
        }
      }
      
      };

    document.body.addEventListener('click', listener );
      }))
     
    const geolocateControl = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });
     
      map.addControl(geolocateControl, "top-right");

      let position;

      geolocateControl.on("geolocate", e=> {
const lon = e.coords.longitude;
const lat = e.coords.latitude;
position = [lon, lat]

      });

    

    return () => map.remove();},
   []);

 return ( 
  <div className='baddiv'> 

    <div className="map-container" ref={mapContainerRef} 
  >
    
  </div>
  </div>)
  }

  