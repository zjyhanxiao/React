import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import {saveFields,updateProfile,fetchPosts} from '../Redux/actions/index'
import BasicInfoUC from '../components/basic/BasicInfoUC'
import BasicInfoH from '../components/basic/BasicInfoH'
import Basicpassport from '../components/basic/Basicpassport'
import BasicIdCard from '../components/basic/BasicIdCard'
const FormItem = Form.Item;

class BasicInformation extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if(this.props.getsProfile.base_profile.passport_url==null){
                    alert('请上传您的护照证件')
                    return false
                }
                this.props.changeIndex(e)
            }
        });
        e.preventDefault();
    }

    changeSubmit(e) {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let data = {...this.props.getsProfile.base_profile}
                const {dispatch}=this.props
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

    birth_date(current) {
        // can not select days before today and today
        return current && current.valueOf() > Date.now();
    }

    expire_date(current) {
        // can not select days before today and today
        return current && current.valueOf() < Date.now() - 1 * 24 * 60 * 60 * 1000;
    }

    success() {
        console.log('success')
    }


    render() {
        let baseData = this.props.getsProfile.base_profile
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
        /*
         let passport_number = this.props.getsProfile.base_profile.passport_number
         let passport_expire_date = this.props.getsProfile.base_profile.passport_expire_date
         let passport_url = this.props.getsProfile.base_profile.passport_url
         let id_card_number = this.props.getsProfile.base_profile.id_card_number
         let id_card_expire_date = this.props.getsProfile.base_profile.id_card_expire_date
         let id_card_url = this.props.getsProfile.base_profile.id_card_url*/

        return (
            <div style={{
                width: 900,
                background: '#fff',
                overflow: 'hidden',
                display: this.props.second == true ? 'block' : 'none'
            }}>
                <Form horizontal>
                  {
                      this.props.getsProfile.base_profile.investor_type == 99 ?
                          <BasicInfoH {...this.props} getFieldDecorator={this.props.form}
                                      disabledDate={this.birth_date} />
                          :
                          <BasicInfoUC {...this.props}
                                       disabledDate={this.birth_date} getFieldDecorator={this.props.form} />

                  }

                    {
                        this.props.getsProfile.base_profile.investor_type == 99 ?
                            <div>
                        <Basicpassport disabledDate={this.expire_date}
                                       getFieldDecorator={this.props.form} />
                        <BasicIdCard disabledDate={this.expire_date}
                                     getFieldDecorator={this.props.form} />
                      </div>
                            :
                            <Basicpassport disabledDate={this.expire_date}
                                           getFieldDecorator={this.props.form} />
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
                          }} type="primary" name="first" onClick={this.cancelChange.bind(this)} size="large">取消</Button>
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
                            }} type="primary" htmlType="submit" name="third" onClick={this.changeSubmit.bind(this)}
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
                            }} type="primary" name="first" onClick={this.props.changeIndex} size="large">上一步</Button>
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
                              }} type="primary" htmlType="submit" name="third" onClick={this.handleSubmit.bind(this)}
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
BasicInformation = Form.create({
    onFieldsChange(props, changedFields) {
        for (let i in changedFields) {
            let key = changedFields[i].name
            let val = changedFields[i].value
            if (key == 'passport_expire_date' || key == 'id_card_expire_date') {
                if (val == '' || val == null) {
                    val = null
                } else {
                    val = val.format('YYYY-MM-DD')
                }
                props.dispatch(saveFields(key, val));
            }
            else if (
                key == 'country_of_birth' ||
                key == 'country_of_tax_residency' ||
                key == 'foreign_tax_number' ||
                key == 'industry' ||
                key == 'nationality' ||
                key == 'occupation' ||
                key == 'source_of_capital' ||
                key == 'ssn'
            ) {
                props.dispatch(saveFields('base_info', {...props.getsProfile.base_profile.base_info, [key]: val}));
            } else if (key == 'date_of_birth') {
                if (val == '' || val == null) {
                    val = null
                } else {
                    val = val.format('YYYY-MM-DD')
                }
                props.dispatch(saveFields('base_info', {...props.getsProfile.base_profile.base_info, [key]: val}));
            } else {
                props.dispatch(saveFields(key, val));
            }
        }
    }/*, mapPropsToFields(props) {
     return {
     passport_url: {
     ...props.getsProfile.base_profile.passport_url,
     value: props.getsProfile.base_profile.passport_url,
     },
     id_card_url: {
     ...props.getsProfile.base_profile.id_card_url,
     value: props.getsProfile.base_profile.id_card_url,
     }
     };
     }*/
})(BasicInformation);
BasicInformation.defaultProps = {};
BasicInformation.propTypes = {
    dispatch: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(BasicInformation);

