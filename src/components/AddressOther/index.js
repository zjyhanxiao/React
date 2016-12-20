/**
 * Created by robot on 2016/12/19.
 */
import React from 'react';
import {Form, Input, Select, Row, Col,Button,DatePicker} from 'antd';
import Avatar from 'components/uploader/index'

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class AddressOther extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    console.log(getFieldDecorator)
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
        <Form horizontal>
          <FormItem>
            <Row>
              <Col span={14} offset={5}><p style={{textAlign:'center',lineHeight:'14px',color:"#ff6600"}}>Please note: you must use your residence address</p></Col>
            </Row>
            <Row>
              <Col span={14} offset={5}><p style={{textAlign:'center',lineHeight:'14px',color:"#ff6600"}}>do not use a P.O. box or in-care-of address.</p></Col>
            </Row>
            <Row style={{paddingTop: '20px'}}>
              <Col span={22} offset={1}><p style={{width:'100%',height:'1px',backgroundColor:'#223976'}}></p></Col>
            </Row>
          </FormItem>
          <Row>
            <FormItem
              {...formItemLayout}
              label="国家 / Country"
              labelCol={{span: 5,offset: 2}}
              wrapperCol={{span: 15}}
            >
              {getFieldDecorator('country_of_birth', {
                initialValue:'CN',
                rules: [{
                  type: 'string',
                  required: false,
                  message: 'Please select your habitual residence!'
                }],
              })(
                //<Cascader options={residences} />
                <Select size="large" style={{}} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="CN">中国</Option>
                  <Option value="disabled">Disabled</Option>
                  <Option value="yiminghe">Yiminghe</Option>
                </Select>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="地址第一行 / Address line 1"
              hasFeedback
              labelCol={{span: 5,offset: 2}}
              wrapperCol={{span: 15}}
            >
              {getFieldDecorator('last_name', {
                rules: [{
                  required: true, message: '请输入您的姓的汉语拼音!',
                } ,{
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="text" size="large" style={{}} onBlur={this.handlePasswordBlur}/>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="地址第二行 / Address line 2"
              hasFeedback
              labelCol={{span: 5,offset: 2}}
              wrapperCol={{span: 15}}
            >
              {getFieldDecorator('last_name', {
                rules: [{
                  required: true, message: '请输入您的姓的汉语拼音!',
                } ,{
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="text" size="large" style={{}} onBlur={this.handlePasswordBlur}/>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="市 / City or town"
              hasFeedback
              labelCol={{span: 5,offset: 2}}
              wrapperCol={{span: 15}}
            >
              {getFieldDecorator('last_name', {
                rules: [{
                  required: true, message: '请输入您的姓的汉语拼音!',
                } ,{
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="text" size="large" style={{}} onBlur={this.handlePasswordBlur}/>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="州省 / State or province"
              labelCol={{span: 5,offset: 2}}
              wrapperCol={{span: 15}}
            >
              {getFieldDecorator('country_of_birth', {
                initialValue:'CN',
                rules: [{
                  type: 'string',
                  required: false,
                  message: 'Please select your habitual residence!'
                }],
              })(
                //<Cascader options={residences} />
                <Select size="large" style={{}} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="CN">中国</Option>
                  <Option value="disabled">Disabled</Option>
                  <Option value="yiminghe">Yiminghe</Option>
                </Select>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="邮编 / Po"
              hasFeedback
              labelCol={{span: 5,offset: 2}}
              wrapperCol={{span: 15}}
            >
              {getFieldDecorator('last_name', {
                rules: [{
                  required: true, message: '请输入您的姓的汉语拼音!',
                } ,{
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="text" size="large" style={{}} onBlur={this.handlePasswordBlur}/>
              )}
            </FormItem>
          </Row>


        </Form>
      </div>
    );
  }
}

AddressOther = Form.create({})(AddressOther);

AddressOther.defaultProps = {};

export default AddressOther;