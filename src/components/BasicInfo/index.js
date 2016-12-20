/**
 * Created by robot on 2016/12/20.
 */
require('components/BasicInfo/index.css');

import 'antd/dist/antd.min.css'
import React from 'react';
import $ from 'jquery';
import {Form, Input,Select, Row, Col, Button,DatePicker} from 'antd';
import Avatar from 'components/uploader/index'


const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class BasicInfo extends React.Component {
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
        let data=values;
        data.date_of_birth.format('YYYY-MM-DD')
        data.sss.format('YYYY-MM-DD')
        data.mx_token='dcce91f6a09f4888170fde606ec6bae7'
        data.mx_secret='6f22f5e20a888325716d4def4e463e12'
        $.ajax({
          type:'post',
          url:'https://api.meixinglobal.com/web/profile/update',
          data:JSON.stringify(data),
          contentType: "application/json; charset=utf-8",
          success:function (d) {
            console.log(JSON.stringify(d));
          }
        })
      }else{
        console.log(values);
      }
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    const mapPropsToFields={

    }
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
            <Row style={{paddingTop: '30px'}}>
              <Col span={2} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>个人信息</h2></Col>
              <Col span={11} offset={1}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px'}}>
                投资人姓名必须与汇款银行帐号上的姓名一致,且一旦提交不可修改。</p></Col>
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
                label="出生日期"
                hasFeedback
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('date_of_birth', {
                  rules: [{ type: 'object', required: true, message: '请输入日期!' }],
                })(
                  <DatePicker size="large" style={{width: 240}}></DatePicker>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="出生国家"
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
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
                  <Select size="large" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="CN">中国</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="yiminghe">Yiminghe</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="纳税国"
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('tax_country', {
                  initialValue:'CN',
                  rules: [{
                    type: 'string',
                    required: false,
                    message: 'Please select your habitual residence!'
                  }],
                })(
                  //<Cascader options={residences} />
                  <Select size="large" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="CN">中国</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="yiminghe">Yiminghe</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="国籍"
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('nationality', {
                  initialValue:'CN',
                  rules: [{
                    type: 'string',
                    required: false,
                    message: 'Please select your habitual residence!'
                  }],
                })(
                  //<Cascader options={residences} />
                  <Select size="large" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="CN">中国</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="yiminghe">Yiminghe</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="行业"
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('residence', {
                  initialValue:'CN',
                  rules: [{
                    type: 'string',
                    required: false,
                    message: 'Please select your habitual residence!'
                  }],
                })(
                  //<Cascader options={residences} />
                  <Select size="large" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="CN">Lucy</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="yiminghe">Yiminghe</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="职业"
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('occupation', {
                  initialValue:'lucy',
                  rules: [{
                    type: 'string',
                    required: false,
                    message: 'Please select your habitual residence!'
                  }],
                })(
                  //<Cascader options={residences} />
                  <Select size="large" style={{width: 240}} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="yiminghe">Yiminghe</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="资金来源"
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('source_of_income', {
                  initialValue:'savings',
                  rules: [{
                    type: 'string',
                    required: false,
                    message: 'Please select your habitual residence!'
                  }],
                })(
                  //<Cascader options={residences} />
                  <Select size="large" style={{width: 240}}>
                    <Option value="jack">Jack</Option>
                    <Option value="savings">存款</Option>
                    <Option value="disabled">Disabled</Option>
                    <Option value="yiminghe">Yiminghe</Option>
                  </Select>
                )}

              </FormItem>
            </Col>
            <Col span={12}>
            </Col>
          </Row>

          <FormItem>
            <Row style={{marginTop: '30px'}}>
              <Col span={2} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体', height: '30px'}}>
                证件上传</h2></Col>
            </Row>
          </FormItem>

          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="护照号"
                hasFeedback
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('passport_code', {
                  initialValue:'E35456464',
                  rules: [{
                    required: true, message: '请输入您的护照号!',
                  }, {
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
                label="有效期至"
                hasFeedback
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('sss', {
                  rules: [{ type: 'object', required: true, message: '请输入日期!' }],
                })(
                  <DatePicker size="large" style={{width: 240}}></DatePicker>
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem>
            <Row style={{paddingTop: '30px'}}>
              <Row style={{marginTop: '40px'}}>
                <Col span={10} offset={7}><Avatar></Avatar></Col>
              </Row>
            </Row>
          </FormItem>
          <FormItem>
            <Row style={{marginTop: '20px'}}>
              <Col span={12} offset={6} style={{color: '#999999', fontFamily: '宋体', textAlign: 'center'}}>如果您的护照证件
                (例如:旧版中国护照) 不包含签名部分,请将证件置于白纸之上,</Col>
            </Row>
            <Row>
              <Col span={12} offset={6} style={{color: '#999999', fontFamily: '宋体', textAlign: 'center'}}>并于证件下方签名,
                拍照或扫描上传。证件必须为原件, 不能为复印件。</Col>
            </Row>
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
                                }} type="primary" htmlType="submit" onClick= {this.handleSubmit.bind(this)} size="large">下一步</Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
    );
  }
}
BasicInfo = Form.create({})(BasicInfo);

BasicInfo.defaultProps = {};

export default BasicInfo;
