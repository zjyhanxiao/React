/**
 * Created by robot on 2016/12/19.
 */
import 'antd/dist/antd.min.css'
import React from 'react';
import {Form, Input, Select, Row, Col, Button,DatePicker} from 'antd';

const FormItem = Form.Item;

class IntermediaryBank extends React.Component {
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
        <Form vertical>
          <FormItem>
            <Row style={{paddingTop: '30px'}}>
              <Col span={6} offset={2}><h2 style={{color: '#555555', fontFamily: '宋体'}}>中间行信息（选填）</h2></Col>
            </Row>
            <Row style={{}}>
              <Col span={20} offset={2}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px',lineHeight:'12px'}}>
                请填写您回款银行收美元时所使用的中间行信息。如您的银行不指定任何中间行，以下信息无需填写。</p></Col>
            </Row>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="中间行名称 / Intermediary (correspondent) bank name"
            hasFeedback
            labelCol={{span: 20,offset:2}}
            wrapperCol={{span: 20,offset:2}}
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
          <FormItem
            {...formItemLayout}
            label="中间行地址 / Intermediary (correspondent) bank address"
            hasFeedback
            labelCol={{span: 20,offset:2}}
            wrapperCol={{span: 20,offset:2}}
          >
            {getFieldDecorator('last_name', {
              rules: [{
                required: true, message: '请输入您的姓的汉语拼音!',
              } ,{
                validator: this.checkConfirm,
              }],
            })(
              <Input type="textarea" size="large" style={{height:'80px'}} onBlur={this.handlePasswordBlur}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="中间行Swiftcode / Intermediary (correspondent) bank Swiftcode"
            hasFeedback
            labelCol={{span: 20,offset:2}}
            wrapperCol={{span: 20,offset:2}}
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
                                }} type="primary" htmlType="submit" onClick= {this.handleSubmit.bind(this)} size="large">完成</Button>
              </Col>
            </Row>
          </FormItem>

        </Form>
      </div>
    );
  }
}

IntermediaryBank = Form.create({})(IntermediaryBank);

IntermediaryBank.defaultProps = {};

export default IntermediaryBank;
