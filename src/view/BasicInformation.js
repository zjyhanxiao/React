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
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.date_of_birth = values.date_of_birth.format('YYYY-MM-DD')
                values.mx_token = '25b6ca3901730fba2cb6098d34912f34'
                values.mx_secret = 'da9d83c022637e7eda9fb59299026e7c'
                console.log('Received values of form: ', JSON.stringify(values));
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
    componentWillReceiveProps(nextProps) {
        // console.log('1111111111111'+JSON.stringify(nextProps))
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
            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
                {JSON.stringify(this.props)}
                <Form horizontal>
                    <BasicInfoH {...this.props} getFieldDecorator={this.props.form}
                                disabledDate={this.disabledDate} expire_date={this.expire_date}/>
                    {/*<BasicInfoUC {...this.props} getFieldDecorator={this.props.form} />*/}
                    <Basicpassport {...this.props} getFieldDecorator={this.props.form} />
                    <FormItem {...tailFormItemLayout}>
                        <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
                            <Col span={4} offset={7}>
                                <Button style={{
                                    width: '120px',
                                    height: '50px',
                                    borderRadius: '30px',
                                    background: '#223976',
                                    color: '#fff',
                                    fontSize: '18px'
                                }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">下一步</Button>
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
        for (let i in changedFields) {
            let key = changedFields[i].name
            let val = changedFields[i].value
            if (key == 'date_of_birth') {
                let val = changedFields[i].value.format('YYYY-MM-DD')
                props.dispatch(saveFields(key, val));
            } else {
                props.dispatch(saveFields(key, val));
            }
        }
    }
})(BasicInformation);
BasicInformation.defaultProps = {};
/*BasicInformation.propTypes = {
 dispatch: PropTypes.func.isRequired
 }*/
const mapStateToProps = (state) => {
    return {
        // getsProfile: state.getsProfile
        // base_profile:state.getsProfile.base_profile
    }
}
export default connect(mapStateToProps)(BasicInformation)