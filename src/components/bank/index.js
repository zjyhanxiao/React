/**
 * Created by robot on 2016/12/19.
 */
import 'antd/dist/antd.min.css'
import React from 'react';
import {Form, Input, Select, Row, Col, Button,DatePicker} from 'antd';

const FormItem = Form.Item;

class Bank extends React.Component {
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
            <Row style={{paddingTop: '20px'}}>
              <Col span={22} offset={1}><p style={{width:'100%',height:'1px',backgroundColor:'#223976'}}></p></Col>
            </Row>
          </FormItem>
          <Row>
            <Col span={16} offset={2}>
              <FormItem
                {...formItemLayout}
                label="银行名称 / Bank name"
                hasFeedback
                labelCol={{span: 6}}
                wrapperCol={{span: 18}}
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
            </Col>
            <Col span={3} offset={1}>
              <Button type="primary" style={{width:'100%',height:'32px',backgroundColor:'#223976',borderRadius:'0px'}}>查找常用银行</Button>
            </Col>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="银行地址 / Bank addresss"
              hasFeedback
              labelCol={{span: 4,offset: 2}}
              wrapperCol={{span: 16}}
            >
              {getFieldDecorator('last_name', {
                initialValue:'yang',
                rules: [{
                  required: true, message: '请填写您的详细地址!'
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="textarea" style={{width: '100%',height:88}} />
              )}
            </FormItem>
          </Row>
          <Row>
          <FormItem
            {...formItemLayout}
            label="Swiftcode"
            hasFeedback
            labelCol={{span: 4,offset: 2}}
            wrapperCol={{span: 16}}
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
              label="账户名 / Account number"
              hasFeedback
              labelCol={{span: 4,offset: 2}}
              wrapperCol={{span: 16}}
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

Bank = Form.create({})(Bank);

Bank.defaultProps = {};

export default Bank;

