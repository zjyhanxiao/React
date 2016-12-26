/**
 * Created by robot on 2016/12/20.
 */


import React from 'react';
import Address from './address/index';


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
        <Address></Address>
      </div>
    );
  }
}

AddressInformation.defaultProps = {};

export default AddressInformation;
