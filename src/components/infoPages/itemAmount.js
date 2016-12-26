/**
 * Created by robot on 2016/12/26.
 */
import React from 'react';

import {Row, Col, Checkbox} from 'antd';


class ItemAmount extends React.Component {

  constructor() {
    super();
    this.state = {
      a:true,
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'900',fontSize:'16px'}}>地址</p>
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
          <Col span={20} offset={2}><p style={{fontWeight:'600'}}>
            beijing guanghualu soho 3q
          </p></Col>
        </Row>
        {this.state.a ?
          <Row style={{}}>
            <Col span={20} offset={2}><p style={{color:'#fe593e'}}>地址证明已经失效，请重新<span style={{color:'#159bd6',cursor:'pointer'}}>上传</span></p></Col>
          </Row>
          : ''}

      </div>
    );
  }
}

ItemAmount.defaultProps = {};

export default ItemAmount;
