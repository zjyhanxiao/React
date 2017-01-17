import React, {PropTypes} from 'react';

import {Row, Col, Checkbox} from 'antd';
import {connect} from 'react-redux'

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}


class ACH extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        let baseData = this.props.getsProfile.base_profile
        let account_number = (baseData != undefined ? baseData.bank_us.account_number : '')
        account_number = account_number.replace(/^\d+(\d{4})$/, "****************$1")

        return (
            <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop: '30px'}}>
          <Col span={18} offset={3}>
            <p style={{color: '#159bd6', textAlign: 'left'}}>确认支付后，美信金融将在三个工作日内完成扣款操作，您可以在我的投资中查看订单状态。</p>
          </Col>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight: '600'}}>账户名</p>
          </Col>
          <Col span={14}>
            <p> {baseData != undefined ? baseData.first_name + baseData.last_name : ''} </p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight: '600'}}>银行名称</p>
          </Col>
          <Col span={14}>
            <p>{baseData != undefined ? baseData.bank_us.bank_name : ''}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight: '600'}}>ABA / routing #</p>
          </Col>
          <Col span={14}>
            <p>{baseData != undefined ? baseData.bank_us.routing_number : ''}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={4} offset={2}>
            <p style={{fontWeight: '600'}}>账户号</p>
          </Col>
          <Col span={14}>
            <p>{account_number}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px', marginBottom: '30px'}}>
          <Col span={18} offset={3} style={{textAlign: 'left'}}>
            <Checkbox onChange={onChange} style={{}}>我已阅读并接受 <a target="_blank" href={this.props.getsProfile.Payment!=undefined?this.props.getsProfile.Payment.ach.document:''}
                style={{color: '#159bd6'}}>自动扣款协议 / ACH Agreement</a></Checkbox>
          </Col>
        </Row>
      </div>
        );
    }
}

ACH.defaultProps = {};

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(ACH)
