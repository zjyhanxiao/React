/**
 * Created by robot on 2016/12/21.
 */

import React from 'react';

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
        <InputNumber min={5000} defaultValue={5000} step={5000} onChange={this.onChange} />
      </div>
    );
  }
}

Disagree.defaultProps = {};

export default Disagree;
