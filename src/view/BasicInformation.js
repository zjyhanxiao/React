import React, {Component, PropTypes}from 'react';
import 'antd/dist/antd.css'
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import moment from 'moment'
import {updateProfile, saveFields} from '../Redux/actions/index'
import BasicInfoUC from '../components/basic/BasicInfoUC'
import BasicInfoH from '../components/basic/BasicInfoH'
import Basicpassport from '../components/basic/Basicpassport'
const FormItem = Form.Item;
class BasicInformation extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', JSON.stringify(values));
                this.props.changeIndex(e)
                /*const {dispatch} = this.props
                 dispatch(updateProfile(values, this.success))*/
            }
        });
        e.preventDefault();
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
                display: this.props.second == true ? 'block' : 'none'
            }}>
                <Form horizontal>
                    <BasicInfoH {...this.props.getsProfile} getFieldDecorator={this.props.form}
                                disabledDate={this.disabledDate} expire_date={this.expire_date} />
                    {/*<BasicInfoUC {...this.props} getFieldDecorator={this.props.form} />*/}
                    <Basicpassport {...this.props.getsProfile} getFieldDecorator={this.props.form} />
                    {/*<Basicpassport {...this.props.getsProfile} getFieldDecorator={this.props.form} />*/}


                    <FormItem {...tailFormItemLayout}>
                        <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
                            <Col span={4} offset={8}>
                                <Button style={{
                                    width: '120px',
                                    height: '50px',
                                    borderRadius: '30px',
                                    background: '#223976',
                                    color: '#fff',
                                    fontSize: '18px'
                                }} type="primary" name="third" htmlType="submit" onClick={this.handleSubmit.bind(this)}
                                        size="large">下一步</Button>
                            </Col>
                        </Row>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
BasicInformation = Form.create({
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
/*    mapPropsToFields(props) {
        console.log('aaaaa' + JSON.stringify(props))
        let data = props.getsProfile.base_profile
        if (data != null && data.passport_photo != undefined && data.passport_photo != null) {
            return {
                passport_photo: {
                    ...props.getsProfile.base_profile.passport_photo,
                    value: props.getsProfile.base_profile.passport_photo,
                }
            };
        }
    },*/
})(BasicInformation);
BasicInformation.defaultProps = {};
/*
 BasicInformation.propTypes = {
 dispatch: PropTypes.func.isRequired
 }
 const mapStateToProps = (state) => {
 return {
 getsProfile: state.getsProfile
 }
 }
 */


export default BasicInformation

