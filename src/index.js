import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

import { App } from './app/App.js';
import { store } from './app/store';
import {Provider } from 'react-redux';


const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App 
      
      />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );



}

render();
store.subscribe(render);

