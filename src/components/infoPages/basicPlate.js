/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';

import {Row, Col, Checkbox} from 'antd';



class BasicPlate extends React.Component {

  constructor() {
    super();
    this.state = {
      a:true,
      b:true,
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'900',fontSize:'16px'}}>基本信息</p>
          </Col>
          <Col span={1} offset={15}>
            <span style={{marginBottom:'-5px',color:'#159bd6',cursor:'pointer'}}>修改</span>
          </Col>
        </Row>
        <Row style={{margin:'15px 0',}}>
          <Col span={20} offset={2}>
            <p style={{width:'100%',height:'1px',background:'#cccccc'}}></p>
          </Col>
        </Row>

        <Row style={{marginTop:'5px'}}>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>姓名</span></Col>
          <Col span={7}><p>Yue cheng Zhao</p></Col>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>出生日期</span></Col>
          <Col span={6}><p>03/04/2012</p></Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>出生国家</span></Col>
          <Col span={7}><p>Yue cheng Zhao</p></Col>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>国籍</span></Col>
          <Col span={6}><p>03/04/2012</p></Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>纳税国</span></Col>
          <Col span={7}><p>Yue cheng Zhao</p></Col>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>资金来源</span></Col>
          <Col span={6}><p>03/04/2012</p></Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>行业</span></Col>
          <Col span={7}><p>Yue cheng Zhao</p></Col>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>职业</span></Col>
          <Col span={6}><p>03/04/2012</p></Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>护照号</span></Col>
          <Col span={7}><p>Yue cheng Zhao</p></Col>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>有效期</span></Col>
          <Col span={6}><p>03/04/2012</p></Col>
        </Row>
        {this.state.a ?
            <Row style={{}}>
              <Col span={20} offset={2}><p style={{color:'#fe593e'}}>护照证件已经失效，请重新<span style={{color:'#159bd6',cursor:'pointer'}}>上传</span></p></Col>
            </Row>
            : ''}

        <Row style={{marginTop:'5px'}}>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>身份证号</span></Col>
          <Col span={7}><p>Yue cheng Zhao</p></Col>
          <Col span={3} offset={2}><span style={{fontWeight:'600'}}>有效期</span></Col>
          <Col span={6}><p>03/04/2012</p></Col>
        </Row>
        {this.state.b ?
          <Row style={{}}>
            <Col span={20} offset={2}><p style={{color:'#fe593e'}}>护照证件已经失效，请重新<span style={{color:'#159bd6',cursor:'pointer'}}>上传</span></p></Col>
          </Row>
          : ''}

      </div>
    );
  }
}

BasicPlate.defaultProps = {};

export default BasicPlate;
