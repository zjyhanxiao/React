/**
 * Created by robot on 2016/12/19.
 */

import React from 'react';
import {connect} from 'react-redux'
import {Form, Input, Select, Row, Col, Button,DatePicker} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class AddressChina extends React.Component {
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
    const {getFieldDecorator} = this.props.getFieldDecorator;
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




          <Row>
            <Col span={12}>
             <Row> <FormItem
               {...formItemLayout}
               label="省/直辖市"
               hasFeedback
               labelCol={{span: 4,offset: 4}}
               wrapperCol={{span: 14}}
             >
               {getFieldDecorator('country_h', {
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
             </FormItem></Row>
              <Row><FormItem
                {...formItemLayout}
                label="市/州/地区"
                hasFeedback
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('country_h', {
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
              </FormItem></Row>
              <Row><FormItem
                {...formItemLayout}
                label="县/区"
                hasFeedback
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('country_h', {
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
              </FormItem></Row>
            </Col>
            <Col span={12}>
              <Row><FormItem
                {...formItemLayout}
                label="详细地址"
                hasFeedback
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('last_name', {
                  initialValue:'yang',
                  rules: [{
                    required: true, message: '请填写您的详细地址!'
                  }, {
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="textarea" style={{width: 240,height:88}} />
                )}
              </FormItem></Row>
              <Row><FormItem
                {...formItemLayout}
                label="邮编"
                hasFeedback
                labelCol={{span: 4,offset: 2}}
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
              </FormItem></Row>
            </Col>
          </Row>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}
AddressChina.defaultProps = {};
export default connect(mapStateToProps)(AddressChina)







/*<FormItem {...tailFormItemLayout}>
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
 </FormItem>*/
