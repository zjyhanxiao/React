/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';
import {connect} from 'react-redux'
import {Row, Col} from 'antd';

class Wire extends React.Component {

    constructor() {
        super();
        this.state = {
            profile: {}
        }
    }

    render() {
        let baseData = this.props.getsProfile.base_profile
        let bank
        if (baseData != undefined) {
            bank = baseData.bank_type == 'US' ? this.props.getsProfile.base_profile.bank_us : this.props.getsProfile.base_profile.bank_non_us
        }
        let account_number = baseData != undefined ? bank.account_number : null
        account_number = account_number != null ? account_number.replace(/^\d+(\d{4})$/, "****************$1") : null
        return (
            <div style={{width: "100%", background: '#fff', overflow: 'hidden', textAlign: 'left'}}>
        <Row style={{paddingTop: '30px'}}>
          <Col span={18} offset={3}>
            <p style={{
                color: '#159bd6',
                textAlign: 'left'
            }}>请注意：请使用您之前选择的银行账户完成支付（<span>{baseData != undefined ? bank.bank_name : ''}</span>, <span>{account_number}</span>)。</p>
          </Col>
        </Row>
        <Row style={{marginTop: '5px'}}>
          <Col span={18} offset={3}>
            <p style={{textAlign: 'left'}}>我们将把以下支付信息发到您的邮箱。请您在三个工作日内完成打款操作。</p>
          </Col>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col span={4} offset={3}>
            <p style={{fontWeight: '600'}}>收款人名字</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.receive_bank.account_name : ''}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={4} offset={3}>
            <p style={{fontWeight: '600'}}>收款人地址</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.receive_bank.account_address : ''}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={4} offset={3}>
            <p style={{fontWeight: '600'}}>收款银行</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.receive_bank.bank_name : ''}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={4} offset={3}>
            <p style={{fontWeight: '600'}}>收款银行地址</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.receive_bank.bank_address : ''}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={4} offset={3}>
            <p style={{fontWeight: '600'}}>ABA / Routing #</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.receive_bank.routing_number : ''}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={4} offset={3}>
            <p style={{fontWeight: '600'}}>Swift Code</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.receive_bank.swift_code : ''}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col span={4} offset={3}>
            <p style={{fontWeight: '600'}}>账户号</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.receive_bank.account_number : ''}</p>
          </Col>
        </Row>
        <Row style={{marginTop: '15px', marginBottom: '30px'}}>
          <Col span={4} offset={3}>
            <p style={{fontWeight: '600'}}>备注栏请填写</p>
          </Col>
          <Col span={14}>
            <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.receive_bank.remark : ''}</p>
          </Col>
        </Row>
                {/*是否显示中间行*/}
                {this.props.getsProfile.Payment != undefined && this.props.getsProfile.Payment.is_middle_bank_enabled ?
                    <div>
            <Row style={{marginTop: '15px'}}>
              <Col span={18} offset={3}>
                <p style={{fontWeight: '600', fontSize: '16px', color: '#159bd6', textAlign: 'left'}}>中间银行</p>
              </Col>
            </Row>

            <Row style={{marginTop: '15px'}}>
              <Col span={4} offset={3}>
                <p style={{fontWeight: '600'}}>中间银行名称</p>
              </Col>
              <Col span={14}>
                <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.middle_bank.bank_name : ''}</p>
              </Col>
            </Row>

            <Row style={{marginTop: '15px'}}>
              <Col span={4} offset={3}>
                <p style={{fontWeight: '600'}}>中间银行地址</p>
              </Col>
              <Col span={14}>
                <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.middle_bank.bank_address : ''}</p>
              </Col>
            </Row>

            <Row style={{marginTop: '15px'}}>
              <Col span={4} offset={3}>
                <p style={{fontWeight: '600'}}>路径号</p>
              </Col>
              <Col span={14}>
                <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.middle_bank.routing_number : ''}</p>
              </Col>
            </Row>

            <Row style={{marginTop: '15px', marginBottom: '30px'}}>
              <Col span={4} offset={3}>
                <p style={{fontWeight: '600'}}>Swift Code</p>
              </Col>
              <Col span={14}>
                <p style={{}}>{this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment.middle_bank.swift_code : ''}</p>
              </Col>
            </Row>
            </div>
                    : ''}
      </div>
        );
    }
}

Wire.defaultProps = {};
const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(Wire)
