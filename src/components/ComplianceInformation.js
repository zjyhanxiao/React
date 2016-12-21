/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';
import CompliancePubllic from './compliancePubllic/index';
import ComplianceSpouse from './complianceSpouse/index';
import Topbar from './topBar/index';
import Navbar from './navBar/index';
import Disagree from './disagree/index';

class ComplianceInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>
        <Disagree></Disagree>
        <Topbar></Topbar>
        <Navbar></Navbar>

      </div>
    );
  }
}

ComplianceInformation.defaultProps = {};

export default ComplianceInformation;
