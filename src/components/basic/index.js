import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main'
import ComplianceInformation from './components/ComplianceInformation'
import AddressInformation from './components/AddressInformation'
import SynthesisShow from './components/SynthesisShow'
import Pay from './components/pay'

// Render the main component into the dom
ReactDOM.render(
  <div>
    <Pay></Pay>
  </div>

  , document.getElementById('app'));
