/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';

import {Row, Col} from 'antd';

class Check extends React.Component {

  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col span={18} offset={3}>
            <p style={{color:'#159bd6',textAlign:'left'}}>请注意：请使用您之前选择的银行账户完成支付（<span>Bank of America</span>, <span>************2809</span>)。</p>
          </Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={18} offset={3}>
            <p style={{textAlign:'left'}}>我们将把以下支付信息发到您的邮箱。请您在三个工作日内寄出支票。</p>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>收款人</p>
          </Col>
          <Col span={14}>
            <p style={{}}>FUNDAMERICA SECURITIES</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>备注栏请填写</p>
          </Col>
          <Col span={14}>
            <p style={{}}>Yuechen Zhao Chapel Road Participation Reg S</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px', marginBottom:'30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>请将支票寄至以下地址</p>
          </Col>
          <Col span={14}>
            <p style={{}}>FundAmerica Securities
              3455 Peachtree Road, NE
              5th Floor
              Atlanta, GA 30326</p>
          </Col>
        </Row>
      </div>
    );
  }
}

Check.defaultProps = {};

export default Check;
