/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';

import {Row, Col, Checkbox} from 'antd';


class CompliancePlate extends React.Component {

  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col span={6} offset={2}>
            <p style={{fontWeight:'900',fontSize:'16px'}}>美国投资人合规身份验证</p>
          </Col>
          <Col span={1} offset={13}>
            <span style={{marginBottom:'-5px',color:'#159bd6',cursor:'pointer'}}>修改</span>
          </Col>
        </Row>
        <Row style={{margin:'15px 0',}}>
          <Col span={20} offset={2}>
            <p style={{width:'100%',height:'1px',background:'#cccccc'}}></p>
          </Col>
        </Row>

        <Row style={{margin:'10px 0',}}>
          <Col span={20} offset={2}>
            <p style={{width:'100%',color:'#999999'}}>您选择了收入验证。您填写的配偶信息如下：</p>
          </Col>
        </Row>

        <Row style={{marginTop:'5px'}}>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>姓名</span></Col>
          <Col span={17}><p>Yue cheng Zhao</p></Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>电话</span></Col>
          <Col span={17}><p>Yue cheng Zhao</p></Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>邮箱</span></Col>
          <Col span={17}><p>Yue cheng Zhao</p></Col>
        </Row>


      </div>
    );
  }
}

CompliancePlate.defaultProps = {};

export default CompliancePlate;
