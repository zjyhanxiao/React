/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';
import Disagree from './disagree/index';
import AddressOther from './addressOther/index';
import AddressChina from './addressChina/index';
import AddressPublic from './addressPublic/index';
import AddressProve from './addressProve/index';


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
        <Disagree></Disagree>
        <AddressProve></AddressProve>
      </div>
    );
  }
}

AddressInformation.defaultProps = {};

export default AddressInformation;
