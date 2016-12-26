/**
 * Created by robot on 2016/12/26.
 */
import 'antd/dist/antd.css';
require('../basic/BasicInfo.css');

import React from 'react';
import ItemAmount from './ItemAmount';
import ItemName from './ItemName';


class InfoPages extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>
        <ItemName></ItemName>
      </div>
    );
  }
}

InfoPages .defaultProps = {};

export default InfoPages ;
