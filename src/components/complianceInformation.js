/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';
import CompliancePubllic from './compliancePubllic/index';
import ComplianceSpouse from './complianceSpouse/index';

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



        <CompliancePubllic></CompliancePubllic>
        <ComplianceSpouse></ComplianceSpouse>


      </div>
    );
  }
}

ComplianceInformation.defaultProps = {};

export default ComplianceInformation;
