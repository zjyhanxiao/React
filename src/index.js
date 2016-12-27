import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import Demo from './components/TEST'

import App from './components/Main'
import ComplianceInformation from './components/ComplianceInformation'
import AddressInformation from './components/AddressInformation'
import SynthesisShow from './components/SynthesisShow'
import BankInformation from './components/BankInformation'
import Pay from './components/pay'
import CapacityShow from './components/CapacityShow'


// Render the main component into the dom
ReactDOM.render(
  <div>
    <ComplianceInformation></ComplianceInformation>
  </div>

  , document.getElementById('app'));
