/**
 * Created by robot on 2016/12/23.
 */
import 'antd/dist/antd.css';
require('../basic/BasicInfo.css');

import React from 'react';
import BankFast from './BankFast';
import BanknoUSA from './BanknoUSA';
import BankPublic from './BankPublic';
import BankUSA from './BankUSA';

class Bank extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>
        <BankFast></BankFast>
        <BanknoUSA></BanknoUSA>
        <BankPublic></BankPublic>
        <BankUSA></BankUSA>
      </div>
    );
  }
}

Bank.defaultProps = {};

export default Bank;
