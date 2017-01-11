/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';

import {Modal, Button, Row, Col} from 'antd';
import BankInformation from '../../view/BankInformation'


class BankPlate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profile:{}
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'900',fontSize:'16px'}}>银行信息</p>
          </Col>
          <Col span={1} offset={15}>
            <a style={{marginBottom:'-5px',color:'#159bd6',cursor:'pointer'}} onClick={this.showModal}>修改</a>
          </Col>
        </Row>
    <Modal title="" visible={this.state.visible}
           onOk={this.handleOk} onCancel={this.handleCancel} closable={false} footer={''} width={900}>
      <BankInformation/>
    </Modal>


        <Row style={{margin:'15px 0',}}>
          <Col span={20} offset={2}>
            <p style={{width:'100%',height:'1px',background:'#cccccc'}}></p>
          </Col>
        </Row>

        <Row style={{marginTop:'5px'}}>
          <Col span={4} offset={2}><span style={{fontWeight:'600'}}>银行名称</span></Col>
          <Col span={16}><p>Yue cheng Zhao</p></Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={4} offset={2}><span style={{fontWeight:'600'}}>银行地址</span></Col>
          <Col span={16}><p>Yue cheng Zhao</p></Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={4} offset={2}><span style={{fontWeight:'600'}}>ABA / routing #</span></Col>
          <Col span={16}><p>Yue cheng Zhao</p></Col>
        </Row>
        <Row style={{marginTop:'5px'}}>
          <Col span={4} offset={2}><span style={{fontWeight:'600'}}>银行账户姓名</span></Col>
          <Col span={16}><p>Yue cheng Zhao</p></Col>
        </Row>
        <Row style={{marginTop:'5px',marginBottom:'20px'}}>
          <Col span={4} offset={2}><span style={{fontWeight:'600'}}>账户号</span></Col>
          <Col span={16}><p>Yue cheng Zhao</p></Col>
        </Row>


      </div>
    );
  }
}

BankPlate.defaultProps = {};

export default BankPlate;
