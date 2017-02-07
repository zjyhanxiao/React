import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import {saveFields,fetchPosts,updateProfile} from '../Redux/actions/index'
import AddressChina from '../components/address/AddressChina';
import AddressOther from '../components/address/AddressOther';
import AddressProve from '../components/address/AddressProve';
import AddressPublic from '../components/address/AddressPublic';


const FormItem = Form.Item;

class AddressInformation extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {
        this.props.form.validateFieldsAndScroll((err, values) => {
            let baseProp = this.props.getsProfile
            if (!err) {
                const {dispatch}=this.props
                if (
                    baseProp.base_profile.investor_type == '1' &&
                    baseProp.base_profile.id_card_url == null) {
                    alert('请上传您的身份证证件')
                    return false
                }
                if (baseProp.base_profile.investor_type == '2') {
                    if (baseProp.AddressType == 'drive') {
                        if (baseProp.base_profile.driving_license_url == null
                            ||
                            baseProp.base_profile.driving_license_url == ''
                        ) {
                            alert('请上传您的驾照证件')
                            return false
                        }
                        dispatch(saveFields('bill_url',null))
                        dispatch(saveFields('bill_number',null))
                        dispatch(saveFields('bill_expire_date',null))
                    }

                    if (baseProp.AddressType == 'bill') {
                        if (baseProp.base_profile.bill_url == null
                            ||
                            baseProp.base_profile.bill_url == '')
                        {
                            alert('请上传您的水电账单')
                            return false
                        }
                        dispatch(saveFields('driving_license_url',null))
                        dispatch(saveFields('driving_license_number',null))
                        dispatch(saveFields('driving_license_expire_date',null))
                    }
                }

                if (
                    baseProp.base_profile.investor_type == '99' &&
                    baseProp.base_profile.bill_url == null) {
                    alert('请上传您的水电账单')
                    return false
                }
                this.props.changeIndex(e)
            }
        })
        ;
        e.preventDefault();
    }

    changeSubmit(e) {
        this.props.form.validateFieldsAndScroll((err, values) => {
            let baseProp = this.props.getsProfile
            if (!err) {
                let data = {...this.props.getsProfile.base_profile}
                if (
                    baseProp.base_profile.investor_type == '1' &&
                    baseProp.base_profile.id_card_url == null) {
                    alert('请上传您的身份证证件')
                    return false
                }
                if (baseProp.base_profile.investor_type == '2') {
                    if (baseProp.AddressType == 'drive') {
                        if (baseProp.base_profile.driving_license_url == null
                            ||
                            baseProp.base_profile.driving_license_url == ''
                        ) {
                            alert('请上传您的驾照证件')
                            return false
                        }
                        dispatch(saveFields('bill_url',null))
                        dispatch(saveFields('bill_number',null))
                        dispatch(saveFields('bill_expire_date',null))
                    }

                    if (baseProp.AddressType == 'bill') {
                        if (baseProp.base_profile.bill_url == null
                            ||
                            baseProp.base_profile.bill_url == '')
                        {
                            alert('请上传您的水电账单')
                            return false
                        }
                        dispatch(saveFields('driving_license_url',null))
                        dispatch(saveFields('driving_license_number',null))
                        dispatch(saveFields('driving_license_expire_date',null))
                    }
                }

                if (
                    baseProp.base_profile.investor_type == '99' &&
                    baseProp.base_profile.bill_url == null) {
                    alert('请上传您的水电账单')
                    return false
                }
                dispatch(updateProfile(data))
                this.props.handleCancel()
            }
        });
        e.preventDefault();
    }
    cancelChange(){
        const {dispatch}=this.props
        dispatch(fetchPosts())
        this.props.handleCancel()
    }
    disabledDate(current) {
        // can not select days before today and today
        return current && current.valueOf() < Date.now() - 90 * 24 * 60 * 60 * 1000;
    }

    expire_date(current) {
        // can not select days before today and today
        return current && current.valueOf() < Date.now() - 1 * 24 * 60 * 60 * 1000;
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
            <div style={{
                width: 900,
                background: '#fff',
                overflow: 'hidden',
                display: this.props.third == true ? 'block' : 'none'
            }}>
                <Form horizontal>

                  {
                      this.props.getsProfile.base_profile.investor_type == 2 ?
                          <AddressPublic {...this.props} getFieldDecorator={this.props.form}
                                         disabledDate={this.disabledDate} expire_date={this.expire_date} />
                          :
                          <AddressProve {...this.props} getFieldDecorator={this.props.form}
                                        disabledDate={this.disabledDate} expire_date={this.expire_date} />
                  }
                    {
                        this.props.getsProfile.base_profile.investor_type == 1 ?
                            <AddressChina {...this.props} getFieldDecorator={this.props.form} />
                            :
                            <AddressOther {...this.props} getFieldDecorator={this.props.form} />
                    }


                    {this.props.getsProfile.Complete == true ?
                        <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
                          <Col span={3} offset={6}>
                            <Button style={{
                                width: '120px',
                                height: '50px',
                                borderRadius: '30px',
                                background: '#ffffff',
                                color: '#223976',
                                fontSize: '18px'
                            }} type="primary" name="second" onClick={this.cancelChange.bind(this)} size="large">取消</Button>
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
                              }} type="primary" htmlType="submit" name="fourth" onClick={this.changeSubmit.bind(this)}
                                      size="large">确定</Button>
                            </FormItem>
                          </Col>
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
                            }} type="primary" name="second" onClick={this.props.changeIndex} size="large">上一步</Button>
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
                              }} type="primary" htmlType="submit" name="fourth" onClick={this.handleSubmit.bind(this)}
                                      size="large">下一步</Button>
                            </FormItem>
                          </Col>
                        </Row>
                    }


        </Form>

      </div>
        );
    }
}

AddressInformation = Form.create({
    onFieldsChange(props, changedFields) {
        for (let i in changedFields) {
            let key = changedFields[i].name
            let val = changedFields[i].value
            if (val != undefined) {
                if (key == 'id_card_expire_date' || key == 'bill_expire_date' || key == 'driving_license_expire_date') {
                    if (val == '' || val == null) {
                        val = null
                    } else {
                        val = val.format('YYYY-MM-DD')
                    }
                    props.dispatch(saveFields(key, val));
                } else if (props.getsProfile.base_profile.address_type == 'NON_CN') {
                    if (
                        key == 'city' ||
                        key == 'country' ||
                        key == 'line1' ||
                        key == 'line2' ||
                        key == 'postal_code' ||
                        key == 'region'
                    ) {
                        props.dispatch(saveFields('address_non_cn', {
                            ...props.getsProfile.base_profile.address_non_cn,
                            [key]: val
                        }));
                    }
                } else if (props.getsProfile.base_profile.address_type == 'CN') {
                    if (
                        key == 'city' ||
                        key == 'country' ||
                        key == 'detail' ||
                        key == 'district' ||
                        key == 'postal_code' ||
                        key == 'region'
                    ) {
                        props.dispatch(saveFields('address_cn', {
                            ...props.getsProfile.base_profile.address_cn,
                            [key]: val
                        }));
                    }
                }
                else {
                    props.dispatch(saveFields(key, val));
                }
            }

        }
    }/*, mapPropsToFields(props) {
     return {
     bill_url: {
     ...props.getsProfile.base_profile.bill_url,
     value: props.getsProfile.base_profile.bill_url,
     },
     driving_license_url: {
     ...props.getsProfile.base_profile.driving_license_url,
     value: props.getsProfile.base_profile.driving_license_url,
     },
     id_card_url: {
     ...props.getsProfile.base_profile.id_card_url,
     value: props.getsProfile.base_profile.id_card_url,
     }
     };
     }*/
})(AddressInformation);

AddressInformation.defaultProps = {};

AddressInformation.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(AddressInformation)
