import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main'
import ComplianceInformation from './components/complianceInformation'



// Render the main component into the dom
ReactDOM.render(
  <div>
    <ComplianceInformation></ComplianceInformation>

  </div>

  , document.getElementById('app'));
