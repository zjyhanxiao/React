/**
 * Created by robot on 2016/12/20.
 */
// require('./BasicInfo.css');

import 'antd/dist/antd.min.css'
import React from 'react';
import {Form, Input,Select, Row, Col, Button,DatePicker} from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
const BasicInfo = Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            first_name: {
                ...props.getsByProfile.first_name,
                value: props.getsByProfile.first_name,
            },
            email: {
                ...props.getsByProfile.email,
                value: props.getsByProfile.email,
            },
        };
    },

})((props) => {
    const { getFieldDecorator } = props.form;
    return (
        <Form inline>
          <FormItem label="first_name">
              {getFieldDecorator('first_name', {
                  rules: [{ required: true, message: 'first_name is required!' }],
              })(<Input />)}
          </FormItem>
          <FormItem label="email">
              {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'email is required!' }],
              })(<Input />)}
          </FormItem>
        </Form>
    );
});

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
      }} type="primary" htmlType="submit" onClick= {this.handleSubmit.bind(this)} size="large">下一步</Button>
 </Col>
 </Row>
 </FormItem>
 *********************/
