/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';
import {Modal, Button, Row, Col} from 'antd';
import {updateProfile} from '../../Redux/actions/index'
import BankInformation from '../../view/BankInformation'


class BankPlate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        fourth:true,
        is_single:true
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
      const data=this.props.getsProfile.base_profile
    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop: '30px'}}>
          <Col span={14} offset={2}>
            <p style={{fontWeight: '900', fontSize: '16px'}}>银行信息&nbsp;&nbsp;
                <span style={{fontWeight: '100', fontSize: '12px',color:'#ff6600'}}>如您将采用ACH自动扣款功能，此处需填写美国银行，如需更换请点击修改。</span>

            </p>
          </Col>
          <Col span={1} offset={5}>
            <a style={{marginBottom: '-5px', color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>修改</a>
          </Col>
        </Row>
    <Modal title="" visible={this.state.visible}
           closable={false} footer={''} width={900}>
      <BankInformation {...this.state} handleCancel={this.handleCancel} />
    </Modal>


        <Row style={{margin:'15px 0',}}>
          <Col span={20} offset={2}>
            <p style={{width:'100%',height:'1px',background:'#cccccc'}}></p>
          </Col>
        </Row>




        {data!=undefined&&data.bank_type!=undefined&&data.bank_type == 'US'?
            <div>
              <Row style={{marginTop:'5px'}}>
                <Col span={4} offset={2}><span style={{fontWeight:'600'}}>银行名称</span></Col>
                <Col span={16}><p>{data!=undefined&&data.bank_us.bank_name!=undefined?data.bank_us.bank_name:''}</p></Col>
              </Row>
              <Row style={{marginTop:'5px'}}>
              <Col span={4} offset={2}><span style={{fontWeight:'600'}}>银行地址</span></Col>
              <Col span={16}><p>{data!=undefined&&data.bank_us.bank_address!=undefined?data.bank_us.bank_address:''}</p></Col>
              </Row>
              <Row style={{marginTop:'5px'}}>
              <Col span={4} offset={2}><span style={{fontWeight:'600'}}>ABA / routing #</span></Col>
              <Col span={16}><p>{data!=undefined&&data.bank_us.routing_number!=undefined?data.bank_us.routing_number:''}</p></Col>
              </Row>
              <Row style={{marginTop:'5px'}}>
              <Col span={4} offset={2}><span style={{fontWeight:'600'}}>银行账户姓名</span></Col>
              <Col span={16}><p>{data!=undefined&&data.first_name!=undefined&&data.last_name!=undefined?data.first_name+' '+data.last_name:''}</p></Col>
              </Row>
              <Row style={{marginTop:'5px',marginBottom:'20px'}}>
              <Col span={4} offset={2}><span style={{fontWeight:'600'}}>账户号</span></Col>
              <Col span={16}><p>{data!=undefined&&data.bank_us.account_number!=undefined?data.bank_us.account_number.replace(/^\d+(\d{4})$/, "****************$1"):''}</p></Col>
              </Row>
            </div>
            :
            <div>
              <Row style={{marginTop:'5px'}}>
                <Col span={4} offset={2}><span style={{fontWeight:'600'}}>银行名称</span></Col>
                <Col span={16}><p>{data!=undefined&&data.bank_non_us.bank_name!=undefined?data.bank_non_us.bank_name:''}</p></Col>
              </Row>
              <Row style={{marginTop:'5px'}}>
                <Col span={4} offset={2}><span style={{fontWeight:'600'}}>银行地址</span></Col>
                <Col span={16}><p>{data!=undefined&&data.bank_non_us.bank_address!=undefined?data.bank_non_us.bank_address:''}</p></Col>
              </Row>
              <Row style={{marginTop:'5px'}}>
                <Col span={4} offset={2}><span style={{fontWeight:'600'}}>Swiftcode</span></Col>
                <Col span={16}><p>{data!=undefined&&data.bank_non_us.swift_code!=undefined?data.bank_non_us.swift_code:''}</p></Col>
              </Row>
              <Row style={{marginTop:'5px'}}>
                <Col span={4} offset={2}><span style={{fontWeight:'600'}}>银行账户姓名</span></Col>
                <Col span={16}><p>{data!=undefined&&data.first_name!=undefined&&data.last_name!=undefined?data.first_name+' '+data.last_name:''}</p></Col>
              </Row>
              <Row style={{marginTop:'5px',marginBottom:'20px'}}>
                <Col span={4} offset={2}><span style={{fontWeight:'600'}}>账户号</span></Col>
                <Col span={16}><p>{data!=undefined&&data.bank_non_us.account_number!=undefined?data.bank_non_us.account_number.replace(/^\d+(\d{4})$/, "****************$1"):''}</p></Col>
              </Row>
                {data!=undefined&&data.bank_non_us.have_middlebank==1?
                    <div>
                        <Row style={{marginTop:'5px'}}>
                          <Col span={4} offset={2}><span style={{fontWeight:'600'}}>中间行名称</span></Col>
                          <Col span={16}><p>{data!=undefined&&data.bank_non_us.middle_bank_name!=undefined?data.bank_non_us.middle_bank_name:''}</p></Col>
                        </Row>
                        <Row style={{marginTop:'5px'}}>
                          <Col span={4} offset={2}><span style={{fontWeight:'600'}}>中间行地址</span></Col>
                          <Col span={16}><p>{data!=undefined&&data.bank_non_us.middle_bank_address!=undefined?data.bank_non_us.middle_bank_address:''}</p></Col>
                        </Row>
                        <Row style={{marginTop:'5px',marginBottom:'20px'}}>
                          <Col span={4} offset={2}><span style={{fontWeight:'600'}}>中间行Swiftcode</span></Col>
                          <Col span={16}><p>{data!=undefined&&data.bank_non_us.middle_bank_swift_code!=undefined?data.bank_non_us.middle_bank_swift_code:''}</p></Col>
                        </Row>
                    </div>
                    :''}
            </div>
        }




      </div>
    );
  }
}

BankPlate.defaultProps = {};

export default BankPlate;
