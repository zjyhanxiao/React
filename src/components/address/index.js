/**
 * Created by robot on 2016/12/23.
 */
import 'antd/dist/antd.css';
require('../basic/BasicInfo.css');

import React from 'react';
import AddressChina from './AddressChina';
import AddressOther from './AddressOther';
import AddressProve from './AddressProve';
import AddressPublic from './AddressPublic';

class Address extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>
        <AddressPublic></AddressPublic>
        <AddressOther></AddressOther>
        <AddressProve></AddressProve>
        <AddressChina></AddressChina>
      </div>
    );
  }
}

Address.defaultProps = {};

export default Address;
