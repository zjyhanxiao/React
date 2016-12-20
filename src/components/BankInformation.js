/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';

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
        银行
      </div>
    );
  }
}

BankInformation.defaultProps = {};

export default BankInformation;
