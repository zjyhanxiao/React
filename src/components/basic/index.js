import 'antd/dist/antd.min.css'
import React from 'react';
import {Form, Input, Button, DatePicker} from 'antd';
import moment from 'moment'
import Uploader from '../uploader/index'
const FormItem = Form.Item;
// const Option = Select.Option;

class BasicInfo extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidUpdate() {
        // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'+JSON.stringify(this.props))
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.date_of_birth = values.date_of_birth.format('YYYY-MM-DD')
                console.log(values)
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
                {'@@@@@@@@@@@@@@' + JSON.stringify(this.props)}
                <Form inline>
                    <FormItem label='first_name'>
                        {getFieldDecorator('first_name', {
                            initialValue: this.props.first_name,
                            rules: [{required: true, message: 'first_name is required!'}]
                        })(<Input />)}
                    </FormItem>
                    <FormItem label='email'>
                        {getFieldDecorator('email', {
                            initialValue: this.props.email,
                            rules: [{type: 'email', required: true, message: 'email is required!'}]
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
BasicInfo = Form.create({})(BasicInfo);

BasicInfo.defaultProps = {};

export default BasicInfo;


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
