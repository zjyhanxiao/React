/**
 * Created by robot on 2016/12/23.
 */
import 'antd/dist/antd.css';
require('../basic/BasicInfo.css');

import React from 'react';
import CompliancePublic from './CompliancePublic';
import ComplianceSpouse from './ComplianceSpouse';

class Compliance extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>
        <CompliancePublic></CompliancePublic>
        {/*<ComplianceSpouse></ComplianceSpouse>*/}
      </div>
    );
  }
}

Compliance.defaultProps = {};

export default Compliance;


