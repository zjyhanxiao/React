/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';
import {Modal, Button, Row, Col} from 'antd';
import AddressProof from '../../view/AddressProof'


class AddressPlate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      a:true,
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
            <p style={{fontWeight:'900',fontSize:'16px'}}>地址</p>
          </Col>



          <Col span={8}>
            <p style={{fontSize:'12px'}}>由于产品需要，您所填写的中文地址我们已经自动的为您翻译成英文地址。</p>
          </Col>



          <Col span={1} offset={7}>
            <a style={{marginBottom:'-5px',color:'#159bd6',cursor:'pointer'}} onClick={this.showModal}>修改</a>
          </Col>
        </Row>
    <Modal title="" visible={this.state.visible}
           onOk={this.handleOk} onCancel={this.handleCancel} closable={false} footer={''} width={900}>
      <AddressProof/>
    </Modal>


        <Row style={{margin:'15px 0',}}>
          <Col span={20} offset={2}>
            <p style={{width:'100%',height:'1px',background:'#cccccc'}}></p>
          </Col>
        </Row>

        <Row style={{marginTop:'5px'}}>
          <Col span={20} offset={2}><p style={{fontWeight:'600'}}>sdfghjklk,jmnbbvcertryujkmjhgbfvrgtyjh</p></Col>

        </Row>
        {this.state.a ?
          <Row style={{}}>
            <Col span={20} offset={2}><p style={{color:'#fe593e'}}>地址证明已经失效，请重新<a style={{color:'#159bd6',cursor:'pointer'}} onClick={this.showModal}>上传</a></p></Col>
          </Row>
          : ''}

      </div>
    );
  }
}

AddressPlate.defaultProps = {};

export default AddressPlate;
