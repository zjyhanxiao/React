/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';

import {Row, Col, Checkbox} from 'antd';


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


class ACH extends React.Component {

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
          <Col span={20} offset={2}>
            <p style={{color:'#159bd6'}}>确认支付后，美信金融将在三个工作日内完成扣款操作，您可以在我的投资中查看订单状态。</p>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>账户名</p>
          </Col>
          <Col span={14}>
            <p style={{}}>Yuechen Zhao</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>银行名称</p>
          </Col>
          <Col span={14}>
            <p style={{}}>Bank of America</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>ABA / routing #</p>
          </Col>
          <Col span={14}>
            <p style={{}}>026009593</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>账户号</p>
          </Col>
          <Col span={14}>
            <p style={{}}>************2809</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px', marginBottom:'30px'}}>
          <Col span={20} offset={2}>
            <Checkbox onChange={onChange} style={{}}>我已阅读并接受 <span style={{color:'#159bd6'}}>自动扣款协议 / ACH Agreement</span></Checkbox>
          </Col>
        </Row>
      </div>
    );
  }
}

ACH.defaultProps = {};

export default ACH;
