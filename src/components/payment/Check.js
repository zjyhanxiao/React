import React from 'react';
import {connect} from 'react-redux'
import {Row, Col} from 'antd';

class Check extends React.Component {

  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
      let baseData = this.props.getsProfile.base_profile
      let bank
      if(baseData!=undefined){
          bank=baseData.bank_type=='US'?this.props.getsProfile.base_profile.bank_us:this.props.getsProfile.base_profile.bank_non_us
      }
      let account_number = (baseData != undefined ? bank.account_number : '')
      account_number = account_number.replace(/^\d+(\d{4})$/, "****************$1")
    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col span={18} offset={3}>
            <p style={{color:'#159bd6',textAlign:'left'}}>请注意：请使用您之前选择的银行账户完成支付（<span>{baseData != undefined ? bank.bank_name:''}</span>, <span>{account_number}</span>)。</p>
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
            <p style={{}}>{this.props.getsProfile.Payment!=undefined?this.props.getsProfile.Payment.check.receiver_name:''}</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>备注栏请填写</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment!=undefined?this.props.getsProfile.Payment.check.remark:''}</p>
          </Col>
        </Row>
        <Row style={{marginTop:'15px', marginBottom:'30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight:'600'}}>请将支票寄至以下地址</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment!=undefined?this.props.getsProfile.Payment.check.mailing_address:''}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

Check.defaultProps = {};

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(Check)

