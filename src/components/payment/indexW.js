/**
 * Created by robot on 2016/12/26.
 */
require('components/payment/indexW.css');

import React from 'react';
import {Row, Col,Tabs,Button} from 'antd';
import Wire from './Wire'
import ACH from './ACH'
import Check from './Check'

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
      <div>
        <Tabs onChange={callback} type="card">
          <TabPane tab="银行电汇 / Wire" key="1"><Wire></Wire></TabPane>
          <TabPane tab="自动扣款 / ACH" key="2"><ACH></ACH></TabPane>
          <TabPane tab="支票 / Check" key="3"><Check></Check></TabPane>
        </Tabs>

        <div style={{width:'100%',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
          <Row style={{paddingTop: '50px', paddingBottom: '40px'}}>
            <Col span={8} offset={8}>
              <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                background: '#223976',
                color: '#fff',
                fontSize: '18px'
              }} type="primary" htmlType="submit" size="large">下一步</Button>
            </Col>
          </Row>
        </div>

      </div>

    );
  }
}

IndexW.defaultProps = {};

export default IndexW;
