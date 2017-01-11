/**
 * Created by robot on 2016/12/26.
 */
require('components/payment/indexAWC.css');

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
      <div style={{width:'900PX',margin:'50px auto',textAlign:'center'}}>
        {/*<Tabs onChange={callback} type="card" animated={false}>*/}
          {/*<TabPane tab="银行电汇 / Wire" key="1"><Wire></Wire></TabPane>*/}
        {/*</Tabs>*/}

        <div style={{overflow:'hidden'}}>
          <div className="active" style={{width:'900px',height:'60px',background:'#ffffff',float:'left',textAlign:'center',lineHeight:'60px',fontSize:'18px',color:'#c9c9c9',border:'3px solid #ffffff',borderRadius:'4px 4px 0 0'}} name="first">银行电汇 / Wire</div>
        </div>


        <div style={{background:'#ffffff'}}>
          <div><Wire></Wire></div>
        </div>


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
              }} type="primary" htmlType="submit" size="large">完成</Button>
            </Col>
          </Row>
        </div>
        <p style={{width: '100%', textAlign:'center'}}>如有疑问，请邮件联系invest@meixinfinance.com。</p>


      </div>

    );
  }
}

IndexW.defaultProps = {};

export default IndexW;
