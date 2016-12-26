/**
 * Created by robot on 2016/12/26.
 */
require('components/payment/indexW.css');

import React from 'react';
import {Row, Col,Tabs} from 'antd';
import Wire from './Wire'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class IndexW extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width:'10%', background:'#ccc'}}>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

IndexW.defaultProps = {};

export default IndexW;
