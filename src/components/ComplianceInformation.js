/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';

import Compliance from './compliance/index';

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
        <Compliance></Compliance>
      </div>
    );
  }
}

ComplianceInformation.defaultProps = {};

export default ComplianceInformation;
