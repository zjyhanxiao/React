/**
 * Created by robot on 2016/12/23.
 */
import 'antd/dist/antd.css';
require('./BasicInfo.css');

import React from 'react';
import BasicInfoUC from './BasicInfoUC';
import Basicpassport from './Basicpassport';

class Basic extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>

        <BasicInfoUC></BasicInfoUC>
        <Basicpassport></Basicpassport>
      </div>
    );
  }
}

Basic.defaultProps = {};

export default Basic;
