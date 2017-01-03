import 'antd/dist/antd.min.css'
import React from 'react';
import {Form, Input, Button, DatePicker} from 'antd';
import moment from 'moment'

import Uploader from '../uploader/index'
import { connect } from 'react-redux'
import { updateProfile} from '../../Redux/actions/index'
const FormItem = Form.Item;
// const Option = Select.Option;

class BasicInfo extends React.Component {
    constructor(props) {
        super(props)
    }


    componentWillMount() {
    }

    componentWillReceiveProps(nextProps){
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.date_of_birth = values.date_of_birth.format('YYYY-MM-DD')
                values.mx_token='25b6ca3901730fba2cb6098d34912f34'
                values.mx_secret='da9d83c022637e7eda9fb59299026e7c'
                console.log(values)
                /*$.ajax({
                    type:'post',
                    url:'https://api.meixinglobal.com/web/profile/update',
                    data:JSON.stringify(values),
                    "contentType": "application/json; charset=utf-8",
                })*/
                const { dispatch } = this.props
                dispatch(updateProfile(values))
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form
        // this.props.form.setFieldsValue('passport_photo', this.state.passport_photo);
        return (
            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
                {'@@@@@@@@@@@@@@' + JSON.stringify(this.props)}
                <Form inline>
                    <FormItem label='last_name'>
                        {getFieldDecorator('last_name', {
                            initialValue: this.props.last_name,
                            rules: [{required: true, message: 'last_name is required!'}]
                        })(<Input />)}
                    </FormItem>
                    <FormItem label='first_name'>
                        {getFieldDecorator('first_name', {
                            initialValue: this.props.first_name,
                            rules: [{ required: true, message: 'first_name is required!'}]
                        })(<Input />)}
                    </FormItem>
                    <FormItem label='date_of_birth'>
                        {getFieldDecorator('date_of_birth', {
                            initialValue: moment(this.props.date_of_birth),
                            rules: [{type: 'object', required: true, message: '请输入日期!'}]
                        })(
                            <DatePicker format="YYYY-MM-DD" size="large" style={{width: 240}}></DatePicker>
                        )}
                    </FormItem>
                    <FormItem label='passport_photo'>
                        {getFieldDecorator('passport_photo', {
                            initialValue: this.props.passport_photo,
                            rules: [{required: true, message: '请上传证件!'}]
                        })(
                            <Uploader {...this.props.passport_photo} style={{width: 346}}/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button onClick={this.handleSubmit.bind(this)}>提交</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
BasicInfo = Form.create({
    mapPropsToFields(props) {
        return {
            passport_photo: {
                ...props.passport_photo,
                value: props.passport_photo,
            },
        };
    }
})(BasicInfo);

BasicInfo.defaultProps = {};

const mapStateToProps=(state) =>{
    return {
        getsProfile:state.getsProfile
    }
}


export default connect(mapStateToProps)(BasicInfo)


/********************
 <FormItem {...tailFormItemLayout}>
 <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
 <Col span={8} offset={7}>
 <Button style={{
        width: '120px',
        height: '50px',
        borderRadius: '30px',
        background: '#223976',
        color: '#fff',
        fontSize: '18px'
      }} type='primary' htmlType='submit' onClick= {this.handleSubmit.bind(this)} size='large'>下一步</Button>
 </Col>
 </Row>
 </FormItem>
 *********************/
