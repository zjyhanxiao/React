import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import {saveFields} from '../Redux/actions/index'
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
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', JSON.stringify(values));
                this.props.changeIndex(e)
                /*const {dispatch} = this.props
                dispatch(updateProfile(values, this.success))*/
            }
        });
    }

    changeSubmit(e){
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', JSON.stringify(values));
                this.props.handleCancel()
                /*const {dispatch} = this.props
                 dispatch(updateProfile(values, this.success))*/
            }
        });
    }
    disabledDate(current) {
        // can not select days before today and today
        return current && current.valueOf() < Date.now() - 90 * 24 * 60 * 60 * 1000;
    }

    expire_date(current) {
        // can not select days before today and today
        return current && current.valueOf() < Date.now() - 1 * 24 * 60 * 60 * 1000;
    }

    success() {
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
            <div style={{
                width: 900,
                background: '#fff',
                overflow: 'hidden',
                display: this.props.third == true ? 'block' : 'none'
            }}>
                <Form horizontal>

                  {
                    this.props.getsProfile.base_profile.investor_type==2?
                      <AddressPublic {...this.props} getFieldDecorator={this.props.form} disabledDate={this.disabledDate} expire_date={this.expire_date} />
                      :
                      <AddressProve {...this.props} getFieldDecorator={this.props.form} disabledDate={this.disabledDate} expire_date={this.expire_date} />
                  }
                  {
                    this.props.getsProfile.base_profile.investor_type==1?
                      <AddressChina {...this.props} getFieldDecorator={this.props.form} />
                      :
                      <AddressOther {...this.props} getFieldDecorator={this.props.form} />
                  }





                    {this.props.getsProfile.Complete == true?
                        <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
                          <Col span={3} offset={6}>
                            <Button style={{
                              width: '120px',
                              height: '50px',
                              borderRadius: '30px',
                              background: '#ffffff',
                              color: '#223976',
                              fontSize: '18px'
                            }} type="primary" name="second" onClick={this.props.handleCancel} size="large">取消</Button>
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
                              }} type="primary" htmlType="submit" name="fourth" onClick={this.props.handleCancel} size="large">确定</Button>
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
                              }} type="primary" htmlType="submit" name="fourth" onClick={this.handleSubmit.bind(this)} size="large">下一步</Button>
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
            if (val != undefined && val != '' && val != null) {
                if (key == 'id_card_expire_date'||key == 'bill_expire_date'||key == 'driving_license_expire_date') {
                    let val = changedFields[i].value.format('YYYY-MM-DD')
                    props.dispatch(saveFields(key, val));
                }else if(props.getsProfile.base_profile.address_type=='NON_CN'){
                    if(
                        key=='city'||
                        key=='country'||
                        key=='line1'||
                        key=='line2'||
                        key=='postal_code'||
                        key=='region'
                    ){
                        props.dispatch(saveFields('address_non_cn', {...props.getsProfile.base_profile.address_non_cn, [key]: val}));
                    }
                }else if(props.getsProfile.base_profile.address_type=='CN'){
                    if(
                        key=='city'||
                        key=='country'||
                        key=='detail'||
                        key=='district'||
                        key=='postal_code'||
                        key=='region'
                    ){
                        props.dispatch(saveFields('address_cn', {...props.getsProfile.base_profile.address_cn, [key]: val}));
                    }
                }
                else {
                    props.dispatch(saveFields(key, val));
                }
            }

        }
    },
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
