require('components/payment/indexAWC.css');
import React from 'react';
import $ from 'jquery'
import {Row, Col, Tabs, Button} from 'antd';
import cookie from 'react-cookie'

import {connect} from 'react-redux'
import {createOrder} from '../../Redux/actions/index'
import Wire from './Wire'
import ACH from './ACH'
import Check from './Check'

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

let tabBar, baseData
class IndexAWC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ach: false,
            wire: false,
            check: false,
            current: ''
        }
    }

    handleSubmit(e) {
        const {dispatch} = this.props
        let data = {}
        if ($('#achAgreement').length > 0 && $('div[name="ach"]').hasClass('active')) {
            $('#achAgreement .achAgreement').remove()
            if (!$('#achAgreement input').is(':checked')) {
                $('#achAgreement').after('<div class="achAgreement" style="color: red;margin-left: 12.5%; margin-top: -15px;">提示:请认真阅读并勾选以上协议</div>')
                return false
            }
        }
        let Payment = this.props.getsProfile.Payment
        data.payment_method = this.state.current != '' ? this.state.current : Payment.is_ach_enabled ? 'ach' : Payment.is_receive_bank_enabled ? 'wire' : Payment.is_check_enabled ? 'check' : ''
        data.product_id = this.props.getsProfile.Product.id
        data.invest_amount = this.props.getsProfile.invest_amount
        dispatch(createOrder(data, this.success))
    }

    success() {
        window.location = '/fa_invest/form_success.html'
    }

    handleClick(event) {
        event.preventDefault();
        // console.log(event.target.nextSibling)
        // event.target.nextSibling.className = '';
        // event.target.previousSibling.className = '';
        if (event.target.getAttribute('name') == 'ach') {
            if (event.target.nextSibling != null && event.target.nextSibling != undefined) {
                event.target.nextSibling.className = '';
            }
            if (event.target.nextSibling.nextSibling != null && event.target.nextSibling.nextSibling != undefined) {
                event.target.nextSibling.nextSibling.className = '';
            }

        } else if (event.target.getAttribute('name') == 'wire') {
            if (event.target.previousSibling != null && event.target.previousSibling != undefined) {
                event.target.previousSibling.className = '';
            }
            if (event.target.nextSibling != null && event.target.nextSibling != undefined) {
                event.target.nextSibling.className = '';
            }
        } else if (event.target.getAttribute('name') == 'check') {
            if (event.target.previousSibling != null && event.target.previousSibling != undefined) {
                event.target.previousSibling.className = '';
            }
            if (event.target.previousSibling.previousSibling != null && event.target.previousSibling.previousSibling != undefined) {
                event.target.previousSibling.previousSibling.className = '';
            }
        }

        event.target.className = 'active'
        this.setState({
            ach: false,
            wire: false,
            check: false,
            [event.target.getAttribute('name')]: true,
            current: event.target.getAttribute('name')
        })
    }

    render() {
        baseData = this.props.getsProfile.Payment != undefined ? this.props.getsProfile.Payment : ''
        let bank = this.props.getsProfile.base_profile && this.props.getsProfile.base_profile.bank_type == 'US' ? true : false
        if ((baseData.is_ach_enabled) && baseData.is_receive_bank_enabled && baseData.is_check_enabled) {
            tabBar = 123
        }
        if ((!baseData.is_ach_enabled || !bank && baseData.is_ach_enabled) && baseData.is_receive_bank_enabled && baseData.is_check_enabled) {
            tabBar = 23
        }
        if ((bank && baseData.is_ach_enabled) && !baseData.is_receive_bank_enabled && baseData.is_check_enabled) {
            tabBar = 13
        }
        if ((bank && baseData.is_ach_enabled) && baseData.is_receive_bank_enabled && !baseData.is_check_enabled) {
            tabBar = 12
        }
        if ((bank && baseData.is_ach_enabled) && !baseData.is_receive_bank_enabled && !baseData.is_check_enabled) {
            tabBar = 1
        }
        if ((!baseData.is_ach_enabled || !bank && baseData.is_ach_enabled) && baseData.is_receive_bank_enabled && !baseData.is_check_enabled) {
            tabBar = 2
        }
        if ((!baseData.is_ach_enabled || !bank && baseData.is_ach_enabled) && !baseData.is_receive_bank_enabled && baseData.is_check_enabled) {
            tabBar = 3
        }
        if ((!baseData.is_ach_enabled || !bank && baseData.is_ach_enabled) && !baseData.is_receive_bank_enabled && !baseData.is_check_enabled) {
            tabBar = 'no payment'
        }
        let itemWidth, marginLeft
        if (tabBar == 1 || tabBar == 2 || tabBar == 3) {
            itemWidth = 900
            marginLeft = 0
        }
        if (tabBar == 12 || tabBar == 13 || tabBar == 23) {
            itemWidth = 440
            marginLeft = 20
        }
        if (tabBar == 123) {
            itemWidth = 290
            marginLeft = 15
        }
        return (
            <div style={{width: '900px', margin: '50px auto 0', textAlign: 'center'}}>
                <div style={{overflow: 'hidden'}} id='pay_ment'>
                    {tabBar == 1 || tabBar == 12 || tabBar == 123 ?
                        <div className={tabBar == 1 || tabBar == 12 || tabBar == 13 || tabBar == 123 ? 'active' : ''}
                             style={{
                                 width: itemWidth,
                                 height: '60px',
                                 background: '#ffffff',
                                 float: 'left',
                                 textAlign: 'center',
                                 lineHeight: '60px',
                                 fontSize: '18px',
                                 color: '#c9c9c9',
                                 border: '3px solid #ffffff',
                                 borderRadius: '4px 4px 0 0'
                             }} name='ach' onClick={this.handleClick.bind(this)}>自动扣款 / ACH</div>
                        : ''
                    }
                    {tabBar == 2 || tabBar == 12 || tabBar == 23 || tabBar == 123 ?
                        <div className={tabBar == 2 || tabBar == 23 ? 'active' : ''}
                             style={{
                                 width: itemWidth,
                                 height: '60px',
                                 background: '#ffffff',
                                 float: 'left',
                                 marginLeft: marginLeft,
                                 textAlign: 'center',
                                 lineHeight: '60px',
                                 fontSize: '18px',
                                 color: '#c9c9c9',
                                 border: '3px solid #ffffff',
                                 borderRadius: '4px 4px 0 0',
                                 boxShadow: '0px 5px 0px #888888'
                             }} name='wire' onClick={this.handleClick.bind(this)}>银行电汇 / Wire</div>
                        : ''
                    }
                    {tabBar == 3 || tabBar == 13 || tabBar == 23 || tabBar == 123 ?
                        <div className={tabBar == 3 ? 'active' : ''}
                             style={{
                                 width: itemWidth,
                                 height: '60px',
                                 background: '#ffffff',
                                 float: 'left',
                                 marginLeft: marginLeft,
                                 textAlign: 'center',
                                 lineHeight: '60px',
                                 fontSize: '18px',
                                 color: '#c9c9c9',
                                 border: '3px solid #ffffff',
                                 borderRadius: '4px 4px 0 0'
                             }} name='check' onClick={this.handleClick.bind(this)}>支票 / Check</div>
                        : ''
                    }

            </div>

            <div style={{background: '#ffffff'}}>
                    <div>
                        {tabBar == 1 || tabBar == 12 || tabBar == 13 || tabBar == 123 ?
                            <div style={{
                                display: this.state.ach == true ? 'block'
                                    :
                                    (tabBar == 1 || tabBar == 12 || tabBar == 13 || tabBar == 123) && this.state.current == '' ? 'block'
                                        :
                                        'none'
                            }}><ACH /></div> : ''}
                        {tabBar == 2 || tabBar == 12 || tabBar == 23 || tabBar == 123 ?
                            <div style={{
                                display: this.state.wire == true ? 'block'
                                    :
                                    (tabBar == 2 || tabBar == 23 ) && this.state.current == '' ? 'block'
                                        :
                                        'none'
                            }}><Wire /></div> : ''}
                        {tabBar == 3 || tabBar == 13 || tabBar == 23 || tabBar == 123 ?
                            <div style={{
                                display: this.state.check == true ? 'block'
                                    :
                                    (tabBar == 3 ) && this.state.current == '' ? 'block'
                                        :
                                        'none'
                            }}><Check /></div> : ''}
                    </div>
            </div>


            <div style={{width: '900px', margin: '0 auto', textAlign: 'center', background: '#ffffff'}}>
              <Row style={{paddingTop: '50px', paddingBottom: '40px'}}>
                  <Col span={3} offset={6}>
                      <Button style={{
                          width: '120px',
                          height: '50px',
                          borderRadius: '30px',
                          background: '#223976',
                          color: '#fff',
                          fontSize: '18px'
                      }} type="primary" htmlType="submit" name="two" onClick={this.props.changeP}
                              size="large">上一步</Button>
                  </Col>
                <Col span={3} offset={6}>
                  <Button style={{
                      width: '120px',
                      height: '50px',
                      borderRadius: '30px',
                      background: '#223976',
                      color: '#fff',
                      fontSize: '18px'
                  }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">完成</Button>
                </Col>
              </Row>
            </div>

      </div>

        );
    }
}

IndexAWC.defaultProps = {};

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(IndexAWC)
