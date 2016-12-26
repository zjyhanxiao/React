import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';


import AddressInformation from './components/AddressInformation'
import BankInformation from './components/BankInformation'
import Main from './components/Main'
import ComplianceInformation from './components/ComplianceInformation'
import SynthesisShow from './components/SynthesisShow'

// Render the main component into the dom
ReactDOM.render(
  <div>
    <SynthesisShow></SynthesisShow>
  </div>

  , document.getElementById('app'));
