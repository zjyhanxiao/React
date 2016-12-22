/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';
import Disagree from './disagree/index';
import AddressOther from './addressOther/index';
import AddressChina from './addressChina/index';
import AddressPublic from './addressPublic/index';
import AddressProve from './addressProve/index';
import Docs from './docs/index';
import Check from './payment/Check';
import ACH from './payment/ACH';
import Wire from './payment/Wire';
import BankUSA from './bankUSA/index';
import BanknoUSA from './banknoUSA/index';

import Basic from './infoPages/basic';

class AddressInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>
        <Basic></Basic>
      </div>
    );
  }
}

AddressInformation.defaultProps = {};

export default AddressInformation;
