import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import BasicInformation from './components/BasicInformation';
import AddressInformation from './components/AddressInformation';
import BankInformation from './components/BankInformation';

// Render the main component into the dom
ReactDOM.render(
  <div>
    <BasicInformation></BasicInformation>
    <AddressInformation></AddressInformation>
    <BankInformation></BankInformation>
  </div>

  , document.getElementById('app'));
