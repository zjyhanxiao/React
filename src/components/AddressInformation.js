/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';

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
        地址
      </div>
    );
  }
}

AddressInformation.defaultProps = {};

export default AddressInformation;
