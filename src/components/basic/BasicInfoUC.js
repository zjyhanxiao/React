/**
 * Created by robot on 2016/12/26.
 */

import './BasicInfo.css'
import React from 'react';
import {connect} from 'react-redux'
import {Form, Input,Select, Row, Col, Button,DatePicker} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class BasicInfoUC extends React.Component {
  constructor() {
    super();
    this.state = {
      a:true,
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

          <FormItem>
            <Row style={{paddingTop: '30px'}}>
              <Col span={2} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>个人信息</h2></Col>
              <Col span={11} offset={1}>
                <p style={{ fontFamily: '宋体', marginTop: '2px'}}>(Yue Chen Zhao 美国投资人)</p>
              </Col>
            </Row>
          </FormItem>




          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="出生日期"
                hasFeedback
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('dateOfBirth', {
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
                {getFieldDecorator('countryOfBirth', {
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


          {this.state.a?
            <div>
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="SSN"
                    hasFeedback
                    labelCol={{span: 4,offset: 4}}
                    wrapperCol={{span: 14}}
                  >
                    {getFieldDecorator('SSN', {
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
            </div>
            :
            ''
          }







          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="行业"
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('industry', {
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




          {this.state.a?
          ''
          :
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="资金来源"
                  labelCol={{span: 4,offset: 4}}
                  wrapperCol={{span: 14}}
                >
                  {getFieldDecorator('sourceOfCapital', {
                    initialValue:'CN',
                    rules: [{
                      type: 'string',
                      required: true,
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

              </Col>
            </Row>
          }



      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}
BasicInfoUC.defaultProps = {};
export default connect(mapStateToProps)(BasicInfoUC)


