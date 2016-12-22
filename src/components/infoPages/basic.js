/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';

import {Row, Col, Checkbox} from 'antd';


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


class Basic extends React.Component {

  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>

      </div>
    );
  }
}

Basic.defaultProps = {};

export default Basic;
