import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button, Radio} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile, saveFields} from '../Redux/actions/index'
import BankFast from '../components/bank/BankFast'
import BanknoUSA from '../components/bank/BanknoUSA'
import BankUSA from '../components/bank/BankUSA'

import $ from 'jquery'

const FormItem = Form.Item;

class BankInformation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bankState:false
        }
    }


    handleSizeChange = (e) => {
        // this.setState({size: e.target.value});
        const {dispatch} = this.props
        dispatch(saveFields('bank_type',e.target.value))
        console.log(e.target.value)
    }

    showBank=()=>{
        this.setState({bankState: true});
    }
    hideBank=()=>{
        this.setState({bankState: false});
    }
    handleSubmit(e) {
        let pro = this.props.getsProfile.base_profile
        if (
            pro.bank_non_us.middle_bank_address != null &&
            pro.bank_non_us.middle_bank_name != null &&
            pro.bank_non_us.middle_bank_swift_code != null
        ) {
            const {dispatch}=this.props
            dispatch(saveFields('bank_non_us', {
                ...props.getsProfile.base_profile.bank_non_us,
                'have_middlebank': 1
            }));
        }
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', JSON.stringify(values));
                if (this.props.getsProfile.base_profile.investor_type == 2) {
                    this.props.changeIndex(e)
                } else {
                    // this.props.changeMessage(e)
                    const {dispatch} = this.props
                    dispatch(updateProfile(this.props.getsProfile.base_profile, this.success))
                    this.props.handleOk(e);
                    this.props.getsProfile.Complete == true
                }
            }
        });
    }

    success() {
        console.log('success')
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        let base_data = this.props.getsProfile.base_profile
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
        };
        return (
            <div style={{
                width: 900,
                background: '#fff',
                overflow: 'hidden',
                display: this.props.fourth == true ? 'block' : 'none'
            }}>

                <div style={{display:this.state.bankState?'block':'none'}} ><BankFast hideBank={this.hideBank} /></div>
        <Form horizontal  style={{display:this.state.bankState?'none':'block'}}>


          <FormItem>
            <Row style={{paddingTop: '30px'}}>
              <Col span={6} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>打款／回款银行信息</h2></Col>
            </Row>
            <Row style={{}}>
              <Col span={20} offset={2}><p
                  style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px', lineHeight: '12px'}}>
                请注意：您的汇款与收款银行必须一致，而且银行账户上的姓名应当为投资人姓名。请仔细填写以下信息，以免回款时给您带来不便。</p></Col>
            </Row>
          </FormItem>

         <FormItem
             {...formItemLayout}
             label=""
         >
            {getFieldDecorator('bank_type', {
                initialValue: base_data.bank_type || "NON_US",
            })(
                <Radio.Group onChange={this.handleSizeChange} style={{width: '600px', marginLeft: '150px'}}>
                   <Radio.Button span={6} offset={5} value="NON_US" style={{
                       width: '250px',
                       height: '32px',
                       borderRadius: '32px',
                       textAlign: 'center',
                       float: 'left'
                   }}>非美国银行</Radio.Button>
                    <div style={{width: '100px', float: 'left', textAlign: 'center'}}>OR</div>
                   <Radio.Button span={6} offset={5} value="US" style={{
                       width: '250px',
                       height: '32px',
                       borderRadius: '32px',
                       textAlign: 'center',
                       float: 'left'
                   }}>美国银行</Radio.Button>

              </Radio.Group>
            )}
          </FormItem>

            {base_data.bank_type == 'NON_US' ? <BanknoUSA {...this.props} getFieldDecorator={this.props.form} showBank={this.showBank} /> :
                <BankUSA {...this.props} getFieldDecorator={this.props.form} showBank={this.showBank} />}

            {this.props.getsProfile.Complete == false ?

                <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
            <Col span={3} offset={6}>
              <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#ffffff',
                  color: '#223976',
                  fontSize: '18px'
              }} type="primary" name="third" onClick={this.props.changeIndex} size="large">上一步</Button>
            </Col>


                    {this.props.getsProfile.base_profile.investor_type == 2 ?
                        <Col span={3} offset={6}>
                <FormItem {...tailFormItemLayout}>
                  <Button style={{
                      width: '120px',
                      height: '50px',
                      borderRadius: '30px',
                      background: '#223976',
                      color: '#fff',
                      fontSize: '18px'
                  }} type="primary" htmlType="submit" name="fifth" onClick={this.handleSubmit.bind(this)} size="large">下一步</Button>
                </FormItem>
              </Col>
                        :
                        <Col span={3} offset={6}>
                    <FormItem {...tailFormItemLayout}>
                      <Button style={{
                          width: '120px',
                          height: '50px',
                          borderRadius: '30px',
                          background: '#223976',
                          color: '#fff',
                          fontSize: '18px'
                      }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}
                              size="large">完成</Button>
                    </FormItem>
                  </Col>
                    }

          </Row>
                :

                <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
            <Col span={3} offset={6}>
              <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#ffffff',
                  color: '#223976',
                  fontSize: '18px'
              }} type="primary" name="third" onClick={this.props.handleCancel} size="large">取消</Button>
            </Col>



                        <Col span={3} offset={6}>
                    <FormItem {...tailFormItemLayout}>
                      <Button style={{
                          width: '120px',
                          height: '50px',
                          borderRadius: '30px',
                          background: '#223976',
                          color: '#fff',
                          fontSize: '18px'
                      }} type="primary" htmlType="submit" onClick={this.props.handleCancel}
                              size="large">确定</Button>
                    </FormItem>
                  </Col>

          </Row>
            }

        </Form>

      </div>
        );
    }
}

BankInformation = Form.create({
    onFieldsChange(props, changedFields) {
        for (let i in changedFields) {
            let key = changedFields[i].name
            let val = changedFields[i].value
            if (val != undefined && val != '' && val != null) {
                if (props.getsProfile.base_profile.bank_type == 'US') {
                    if (
                        key == 'account_number' ||
                        key == 'account_type' ||
                        key == 'bank_address' ||
                        key == 'bank_name' ||
                        key == 'routing_number'
                    ) {
                        props.dispatch(saveFields('bank_us', {
                            ...props.getsProfile.base_profile.bank_us,
                            [key]: val
                        }));
                    }
                } else if (props.getsProfile.base_profile.bank_type == 'NON_US') {
                    if (
                        key == 'account_number' ||
                        key == 'bank_address' ||
                        key == 'bank_name' ||
                        key == 'middle_bank_address' ||
                        key == 'middle_bank_name' ||
                        key == 'middle_bank_swift_code' ||
                        key == 'swift_code'
                    ) {
                        props.dispatch(saveFields('bank_us', {
                            ...props.getsProfile.base_profile.bank_us,
                            [key]: val
                        }));
                    }
                } else {
                    props.dispatch(saveFields(key, val));
                }
            }

        }
    },
})(BankInformation);

BankInformation.defaultProps = {};

BankInformation.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}

export default connect(mapStateToProps)(BankInformation)
