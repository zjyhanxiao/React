/**
 * Created by robot on 2016/12/21.
 */

import React from 'react';
import {Form, Input, Select, Row, Col, Button }from 'antd';
import { InputNumber } from 'antd';

class Disagree extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
    this.onChange();
  }
  onChange(value) {
    console.log('changed', value);
    if(value%5000!=0){
    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

Disagree.defaultProps = {};

export default Disagree;
