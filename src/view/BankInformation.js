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
            size: 'NON_US',
        }
    }


    handleSizeChange = (e) => {
        this.setState({size: e.target.value});
        console.log(e.target.value)
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', JSON.stringify(values));
                if (this.props.getsProfile.base_profile.investor_type == 2) {
                    this.props.changeIndex(e)
                } else {
                    /*************************************************上传data***********************************************/
                    var data = {}
                    var country = this.props.getsProfile.base_profile.country.split('%%')
                    var industry = this.props.getsProfile.base_profile.industry.split('%%')
                    var occupation = this.props.getsProfile.base_profile.occupation.split('%%')
                    var region = this.props.getsProfile.base_profile.region.split('%%')
                    var country_of_birth = this.props.getsProfile.base_profile.country_of_birth.split('%%')
                    var nationality = this.props.getsProfile.base_profile.nationality.split('%%')
                    var country_of_tax_residency = this.props.getsProfile.base_profile.country_of_tax_residency.split('%%')

                    data.first_name = this.props.getsProfile.base_profile.first_name;
                    data.last_name = this.props.getsProfile.base_profile.last_name;
                    data.investor_type = this.props.getsProfile.base_profile.investor_type;
                    data.address_type = this.props.getsProfile.base_profile.investor_type == 1 ? 'CN' : 'NON_CN';
                    data.bank_type = this.props.getsProfile.base_profile.bank_type||'';


                    data.passport_expire_date = this.props.getsProfile.base_profile.passport_expire_date || '';
                    data.passport_number = this.props.getsProfile.base_profile.passport_number || '';
                    data.passport_url = this.props.getsProfile.base_profile.passport_url || '';
                    data.base_info = {}
                    data.base_info.date_of_birth = this.props.getsProfile.base_profile.date_of_birth || '';
                    data.base_info.country_of_birth = country_of_birth[1] || '';
                    data.base_info.industry = industry[1] || '';
                    data.base_info.occupation = occupation[1] || '';
                    /**********************如果是中国大陆投资人（address_non_cn||address_cn）*******************/
                    if (this.props.getsProfile.base_profile.investor_type == 1) {
                        data.id_card_expire_date = this.props.getsProfile.base_profile.id_card_expire_date || '';
                        data.id_card_url = this.props.getsProfile.base_profile.id_card_url || '';
                        data.base_info.source_of_capital = this.props.getsProfile.base_profile.source_of_capital || '';

                        data.address_cn = {}
                        var country = this.props.getsProfile.base_profile.country.split('%%')
                        data.address_cn.city = this.props.getsProfile.base_profile.city || '';
                        data.address_cn.country = country[1] || '';
                        data.address_cn.detail = this.props.getsProfile.base_profile.detail || '';
                        data.address_cn.district = this.props.getsProfile.base_profile.district || '';
                        data.address_cn.postal_code = this.props.getsProfile.base_profile.postal_code || '';
                        data.address_cn.region = region[1] || '';
                    } else {
                        data.address_non_cn = {}
                        data.address_non_cn.city = this.props.getsProfile.base_profile.city || '';

                        data.address_non_cn.country = country[1] || '';

                        data.address_non_cn.line1 = this.props.getsProfile.base_profile.line1 || '';
                        data.address_non_cn.line2 = this.props.getsProfile.base_profile.line2 || '';
                        data.address_non_cn.postal_code = this.props.getsProfile.base_profile.postal_code || '';
                        data.address_non_cn.region = region[1] || '';
                    }
                    /********************************如果是美国投资人(accreditation)**********************/
                    if (this.props.getsProfile.base_profile.investor_type == 2) {
                        data.base_info.ssn = this.props.getsProfile.base_profile.ssn || '';
                        data.base_info.nationality = nationality[1] || '';

                        data.bill_expire_date = this.props.getsProfile.base_profile.bill_expire_date || '';
                        data.bill_url = this.props.getsProfile.base_profile.bill_url || '';
                        data.driving_license_expire_date = this.props.getsProfile.base_profile.driving_license_expire_date || '';
                        data.driving_license_url = this.props.getsProfile.base_profile.driving_license_url || '';

                        data.accreditation = {}
                        data.accreditation.debt_amount = this.props.getsProfile.base_profile.debt_amount || '';
                        data.accreditation.spouse_email = this.props.getsProfile.base_profile.spouse_email || '';
                        data.accreditation.spouse_first_name = this.props.getsProfile.base_profile.spouse_first_name || '';
                        data.accreditation.spouse_last_name = this.props.getsProfile.base_profile.spouse_last_name || '';
                        data.accreditation.spouse_phone = this.props.getsProfile.base_profile.spouse_phone || '';
                        data.accreditation.type = this.props.getsProfile.base_profile.type || '';
                        data.accreditation.with_spouse = this.props.getsProfile.base_profile.with_spouse || '';
                    }
                    /********************************如果是火星投资人(accreditation)**********************/
                    if (this.props.getsProfile.base_profile.investor_type == 99) {
                        data.base_info.nationality = nationality[1] || '';
                        data.base_info.source_of_capital = this.props.getsProfile.base_profile.source_of_capital || '';
                        data.base_info.foreign_tax_number = this.props.getsProfile.base_profile.foreign_tax_number || '';
                        data.base_info.country_of_tax_residency = country_of_tax_residency[1] || '';
                        data.id_card_expire_date = this.props.getsProfile.base_profile.id_card_expire_date || '';
                        data.id_card_url = this.props.getsProfile.base_profile.id_card_url || '';
                        data.id_card_number = this.props.getsProfile.base_profile.id_card_number || '';
                        data.bill_expire_date = this.props.getsProfile.base_profile.bill_expire_date || '';
                        data.bill_url = this.props.getsProfile.base_profile.bill_url || '';
                    }

                    /**********************美国银行与非美国银行(bank_us||bank_non_us)*****************/
                    if (this.props.getsProfile.base_profile.bank_type == 'US') {
                        data.bank_us = {}
                        data.bank_us.account_number = this.props.getsProfile.base_profile.account_number || '';
                        data.bank_us.account_type = this.props.getsProfile.base_profile.account_type || ''
                        data.bank_us.bank_address = this.props.getsProfile.base_profile.bank_address || ''
                        data.bank_us.bank_name = this.props.getsProfile.base_profile.bank_name || ''
                        data.bank_us.routing_number = this.props.getsProfile.base_profile.routing_number || ''
                    } else {

                        data.bank_non_us = {}
                        data.bank_non_us.account_number = this.props.getsProfile.base_profile.account_number || '';
                        data.bank_non_us.bank_address = this.props.getsProfile.base_profile.bank_address || ''
                        data.bank_non_us.bank_name = this.props.getsProfile.base_profile.bank_name || ''
                        data.bank_non_us.middle_bank_address = this.props.getsProfile.base_profile.middle_bank_address || '';
                        data.bank_non_us.middle_bank_name = this.props.getsProfile.base_profile.middle_bank_name || '';
                        data.bank_non_us.middle_bank_swift_code = this.props.getsProfile.base_profile.middle_bank_swift_code || '';
                        data.bank_non_us.swift_code = this.props.getsProfile.base_profile.swift_code || '';
                    }


                    /****************************************************************
                     let data = {
                      'first_name':this.props.getsProfile.base_profile.first_name,
                      'last_name':this.props.getsProfile.base_profile.last_name,
                      'investor_type':this.props.getsProfile.base_profile.investor_type,
                      'address_type':this.props.getsProfile.base_profile.investor_type==1?'CN':'NON_CN',
                      'bank_type':this.props.getsProfile.base_profile.bank_type,
                      'passport_expire_date':this.props.getsProfile.base_profile.passport_expire_date||'',
                      'passport_number':this.props.getsProfile.base_profile.passport_number||'',
                      'passport_url':this.props.getsProfile.base_profile.passport_url||'',
                      'id_card_expire_date':this.props.getsProfile.base_profile.id_card_expire_date||'',
                      'id_card_number':this.props.getsProfile.base_profile.id_card_number||'',
                      'id_card_url':this.props.getsProfile.base_profile.id_card_url||'',
                      'phone':this.props.getsProfile.base_profile.phone||'',
                      'signature':this.props.getsProfile.base_profile.signature||'',
                      'spouse_signature':this.props.getsProfile.base_profile.spouse_signature||'',
                      'email':this.props.getsProfile.base_profile.email||'',
                      'bill_expire_date':this.props.getsProfile.base_profile.bill_expire_date||'',
                      'bill_number':this.props.getsProfile.base_profile.bill_number||'',
                      'bill_url':this.props.getsProfile.base_profile.bill_url||'',
                      'channel_code':this.props.getsProfile.base_profile.channel_code||'',
                      'driving_license_expire_date':this.props.getsProfile.driving_license_expire_date||'',
                      'driving_license_number':this.props.getsProfile.base_profile.driving_license_number||'',
                      'driving_license_url':this.props.getsProfile.base_profile.driving_license_url||'',

                      'base_info':{
                        'date_of_birth':this.props.getsProfile.base_profile.date_of_birth||'',
                        'country_of_birth':this.props.getsProfile.base_profile.country_of_birth||'',
                        'nationality':this.props.getsProfile.base_profile.nationality||'',
                        'industry':this.props.getsProfile.base_profile.industry||'',
                        'foreign_tax_number':this.props.getsProfile.base_profile.foreign_tax_number||'',
                        'country_of_tax_residency':this.props.getsProfile.base_profile.country_of_tax_residency||'',
                        'occupation':this.props.getsProfile.base_profile.occupation||'',
                        'source_of_capital':this.props.getsProfile.base_profile.source_of_capital||'',
                        'ssn':this.props.getsProfile.base_profile.ssn||'',
                      },

                      'address_cn':{
                        'city':this.props.getsProfile.base_profile.city||'',
                        'country':this.props.getsProfile.base_profile.country||'',
                        'detail':this.props.getsProfile.base_profile.detail||'',
                        'district':this.props.getsProfile.base_profile.district||'',
                        'postal_code':this.props.getsProfile.base_profile.postal_code||'',
                        'region':this.props.getsProfile.base_profile.region||'',
                      },
                      'address_non_cn':{
                        'city':this.props.getsProfile.base_profile.city||'',
                        'country':this.props.getsProfile.base_profile.country||'',
                        'line1':this.props.getsProfile.base_profile.line1||'',
                        'line2':this.props.getsProfile.base_profile.line2||'',
                        'postal_code':this.props.getsProfile.base_profile.postal_code||'',
                        'region':this.props.getsProfile.base_profile.region||'',
                      },

                      'bank_non_us':{
                        'account_number':this.props.getsProfile.base_profile.account_number||'',
                        'bank_address':this.props.getsProfile.base_profile.bank_address||'',
                        'bank_name':this.props.getsProfile.base_profile.bank_name||'',
                        'middle_bank_address':this.props.getsProfile.base_profile.middle_bank_address||'',
                        'middle_bank_name':this.props.getsProfile.base_profile.middle_bank_name||'',
                        'middle_bank_swift_code':this.props.getsProfile.base_profile.middle_bank_swift_code||'',
                        'swift_code':this.props.getsProfile.base_profile.swift_code||''
                      },
                      'bank_us':{
                        'account_number':this.props.getsProfile.base_profile.account_number||'',
                        'account_type':this.props.getsProfile.base_profile.account_type||'',
                        'bank_address':this.props.getsProfile.base_profile.bank_address||'',
                        'bank_name':this.props.getsProfile.base_profile.bank_name||'',
                        'routing_number':this.props.getsProfile.base_profile.routing_number||'',
                      },
                      'accreditation':{
                        'debt_amount':this.props.getsProfile.base_profile.debt_amount||'',
                        'spouse_email':this.props.getsProfile.base_profile.spouse_email||'',
                        'spouse_first_name':this.props.getsProfile.base_profile.spouse_first_name||'',
                        'spouse_last_name':this.props.getsProfile.base_profile.spouse_last_name||'',
                        'spouse_phone':this.props.getsProfile.base_profile.spouse_phone||'',
                        'type':this.props.getsProfile.base_profile.routing_number||'',
                        'with_spouse':this.props.getsProfile.base_profile.routing_number||'',
                      }

                    }

                     ****************************************************************/
                    console.log(data)

                    this.props.changeMessage(e)
                    const {dispatch} = this.props
                    dispatch(updateProfile(data, this.success))
                    this.props.handleOk(e);
                }
                /**/
            }
        });
    }

    success() {
        console.log('success')
    }

    render() {
        const size = this.state.size;
        const {getFieldDecorator} = this.props.form;
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
        <Form horizontal>


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
                initialValue: "NON_US",
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

            {/*<div className={this.state.size == '非美国银行' ? 'show' : 'hide'}>*/}
            {/*<BanknoUSA {...this.props}  getFieldDecorator={this.props.form} />*/}
            {/*</div>*/}
            {/*<div className={this.state.size == '美国银行' ? 'show' : 'hide'}>*/}
            {/*<BankUSA {...this.props}  getFieldDecorator={this.props.form} />*/}
            {/*</div>*/}

            {this.state.size == 'NON_US' ? <BanknoUSA {...this.props} getFieldDecorator={this.props.form} /> :
                <BankUSA {...this.props} getFieldDecorator={this.props.form} />}

            {!this.props.single ?

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
                      }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}
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
        console.log(JSON.stringify(changedFields))
        for (let i in changedFields) {
            let key = changedFields[i].name
            let val = changedFields[i].value
            console.log(val)
            if (val != undefined && val != '' && val != null) {
                if (key == 'expire_date') {
                    let val = changedFields[i].value.format('YYYY-MM-DD')
                    props.dispatch(saveFields(key, val));
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
