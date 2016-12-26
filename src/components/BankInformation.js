/**
 * Created by robot on 2016/12/20.
 */

import React from 'react';
import Bank from './bank/index';

class BankInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>
        <Bank></Bank>
      </div>
    );
  }
}

BankInformation.defaultProps = {};

export default BankInformation;
