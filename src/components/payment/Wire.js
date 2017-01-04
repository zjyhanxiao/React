/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';

import {Row, Col} from 'antd';

class Wire extends React.Component {

  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width: "100%", background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col span={18} offset={3}>
            <p style={{color:'#159bd6',textAlign:'left'}}>请注意：请使用您之前选择的银行账户完成支付（<span>Bank of America</span>, <span>************2809</span>)。</p>
          </Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={18} offset={3}>
            <p style={{textAlign:'left'}}>我们将把以下支付信息发到您的邮箱。请您在三个工作日内完成打款操作。</p>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>收款人名字</p>
          </Col>
          <Col span={14}>
            <p style={{}}>Fund America Securities, LLC</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>收款人地址</p>
          </Col>
          <Col span={14}>
            <p style={{}}>3455 Peachtree Road, NE 5th Floor, Atlanta, GA 30325</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>收款银行</p>
          </Col>
          <Col span={14}>
            <p style={{}}>Pacific Mercantile Bank</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>收款银行地址</p>
          </Col>
          <Col span={14}>
            <p style={{}}>949 South Coast Drive, Third Floor Costa Mesa, CA 92626, (714)438-2500</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>ABA / Routing #</p>
          </Col>
          <Col span={14}>
            <p style={{}}>122242869</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>Swift Code</p>
          </Col>
          <Col span={14}>
            <p style={{}}>PMERU66</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>账户号</p>
          </Col>
          <Col span={14}>
            <p style={{}}>0001476100</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px',marginBottom:'30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>备注栏请填写</p>
          </Col>
          <Col span={14}>
            <p style={{}}>Yuechen Zhao Chapel Road Participation Reg S</p>
          </Col>
        </Row>
      </div>
    );
  }
}

Wire.defaultProps = {};

export default Wire;
