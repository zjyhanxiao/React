/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';
import {Form, Input, Select, Row, Col, Button,DatePicker} from 'antd';
import Avatar from 'components/uploader/index'

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class ComplianceSpouse extends React.Component {
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

    const { size } = this.props;
    const state = this.state;
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
            <Row style={{paddingTop: '0px'}}>
              <Col span={20} offset={2}><p style={{color:'#223976',textAlign:'center'}}>请完成一下配偶相关信息</p></Col>
            </Row>
          </FormItem>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="姓氏"
                hasFeedback
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('last_name', {
                  rules: [{
                    required: true, message: '请输入您的姓的汉语拼音!',
                  },{pattern: /^[a-z \,\.\-\']+$/i, message: '请输入汉语拼音!',} ,{
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="text" size="large" style={{width: 240}} onBlur={this.handlePasswordBlur}/>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="名"
                hasFeedback
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('first_name', {
                  //initialValue:'yang',
                  rules: [{
                    required: true, message: '请输入您的名的汉语拼音!',
                  },{pattern: /^[a-z \,\.\-\']+$/i, message: '请输入汉语拼音!',} ,{
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="text" size="large" style={{width: 240}} onBlur={this.handlePasswordBlur}/>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="电话"
                hasFeedback
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 13}}
              >
                <span>
                  <Select
                    value={state.currency}
                    size={size}
                    style={{ width: '32%',marginRight:'3%'}}
                    onChange={this.handleCurrencyChange}
                  >
                    <Option value="rmb">RMB</Option>
                    <Option value="dollar">Dollar</Option>
                  </Select>
                  <Input
                    type="text"
                    size={size}
                    value={state.number}
                    onChange={this.handleNumberChange}
                    style={{ width: '64%',height:'32px'}}
                  />
                </span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="邮箱"
                hasFeedback
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('first_name', {
                  //initialValue:'yang',
                  rules: [{
                    required: true, message: '请输入您的名的汉语拼音!',
                  },{pattern: /^[a-z \,\.\-\']+$/i, message: '请输入汉语拼音!',} ,{
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="text" size="large" style={{width: 240}} onBlur={this.handlePasswordBlur}/>
                )}
              </FormItem>
            </Col>
          </Row>

        </Form>
      </div>
    );
  }
}

ComplianceSpouse = Form.create({})(ComplianceSpouse);

ComplianceSpouse.defaultProps = {};

export default ComplianceSpouse;
