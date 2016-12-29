import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main'
import CapacityShow from './components/CapacityShow'



// Render the main component into the dom
ReactDOM.render(
  <div>
    <CapacityShow></CapacityShow>
  </div>

  , document.getElementById('app'));
