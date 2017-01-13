import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile, saveFields} from '../Redux/actions/index'
import CompliancePublic from '../components/compliance/CompliancePublic'



const FormItem = Form.Item;

class ComplianceReview extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.changeMessage(e)
        console.log('Received values of form: ', JSON.stringify(values));
        this.props.handleOk(e);
        console.log(this.props.getsProfile.base_profile)

        var data = {}
        var country = this.props.getsProfile.base_profile.country
        var industry = this.props.getsProfile.base_profile.industry
        var occupation = this.props.getsProfile.base_profile.occupation
        var region = this.props.getsProfile.base_profile.region
        var country_of_birth = this.props.getsProfile.base_profile.country_of_birth
        var nationality = this.props.getsProfile.base_profile.nationality

        data.first_name = this.props.getsProfile.base_profile.first_name;
        data.last_name = this.props.getsProfile.base_profile.last_name;
        data.investor_type = this.props.getsProfile.base_profile.investor_type;
        data.address_type = this.props.getsProfile.base_profile.investor_type == 1 ? 'CN' : 'NON_CN';
        data.passport_expire_date = this.props.getsProfile.base_profile.passport_expire_date || '';
        data.passport_number = this.props.getsProfile.base_profile.passport_number || '';
        data.passport_url = this.props.getsProfile.base_profile.passport_url || '';
        data.bill_expire_date = this.props.getsProfile.base_profile.bill_expire_date || '';
        data.bill_url = this.props.getsProfile.base_profile.bill_url || '';
        data.driving_license_expire_date = this.props.getsProfile.base_profile.driving_license_expire_date || '';
        data.driving_license_url = this.props.getsProfile.base_profile.driving_license_url || '';

        data.base_info = {}
        data.base_info.date_of_birth = this.props.getsProfile.base_profile.date_of_birth || '';
        data.base_info.country_of_birth = country_of_birth || '';
        data.base_info.industry = industry || '';
        data.base_info.occupation = occupation || '';
        data.base_info.ssn = this.props.getsProfile.base_profile.ssn || '';
        data.base_info.nationality = nationality || '';

        data.address_non_cn = {}
        data.address_non_cn.city = this.props.getsProfile.base_profile.city || '';
        data.address_non_cn.country = this.props.getsProfile.base_profile.country|| '';
        data.address_non_cn.line1 = this.props.getsProfile.base_profile.line1 || '';
        data.address_non_cn.line2 = this.props.getsProfile.base_profile.line2 || '';
        data.address_non_cn.postal_code = this.props.getsProfile.base_profile.postal_code || '';
        data.address_non_cn.region = region || '';


        data.accreditation = {}
        data.accreditation.debt_amount = this.props.getsProfile.base_profile.debt_amount || '';
        data.accreditation.spouse_email = this.props.getsProfile.base_profile.spouse_email || '';
        data.accreditation.spouse_first_name = this.props.getsProfile.base_profile.spouse_first_name || '';
        data.accreditation.spouse_last_name = this.props.getsProfile.base_profile.spouse_last_name || '';
        data.accreditation.spouse_phone = this.props.getsProfile.base_profile.spouse_phone || '';
        data.accreditation.type = this.props.getsProfile.base_profile.type || '';
        data.accreditation.with_spouse = this.props.getsProfile.base_profile.with_spouse || '';
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


        console.log(data)


        const { dispatch } = this.props
        dispatch(updateProfile(data,this.success))
      }
    });
  }

  success(){
    console.log('success')
  }

  render() {
    // const {getFieldDecorator} = this.props.form;
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
      <div style={{width: 900, background: '#fff', overflow: 'hidden',display:this.props.fifth==true?'block':'none'}}>
        <Form horizontal>

          <CompliancePublic {...this.props}  getFieldDecorator={this.props.form} />

            {!this.props.is_single?

                <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
            <Col span={3} offset={6}>
              <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#ffffff',
                  color: '#223976',
                  fontSize: '18px'
              }} type="primary" name="fourth" onClick={this.props.changeIndex} size="large">上一步</Button>
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
                }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">完成</Button>
              </FormItem>
            </Col>
          </Row>:

                <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
            <Col span={3} offset={6}>
              <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#ffffff',
                  color: '#223976',
                  fontSize: '18px'
              }} type="primary" name="fourth" onClick={this.props.handleCancel} size="large">取消</Button>
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
                }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">确定</Button>
              </FormItem>
            </Col>
          </Row>
            }



        </Form>

      </div>
    );
  }
}

ComplianceReview = Form.create({
  onFieldsChange(props, changedFields) {
    console.log(JSON.stringify(changedFields))
    for (let i in changedFields) {
      let key = changedFields[i].name
      let val = changedFields[i].value
      console.log(val)
      if (val != undefined && val != '' && val != null) {
        if (key == 'date_of_birth') {
          let val = changedFields[i].value.format('YYYY-MM-DD')
          props.dispatch(saveFields(key, val));
        } else {
          props.dispatch(saveFields(key, val));
        }
      }

    }
  },
})(ComplianceReview);

ComplianceReview.defaultProps = {};

ComplianceReview.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}


export default connect(mapStateToProps)(ComplianceReview)
