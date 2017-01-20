/**
 * Created by robot on 2016/12/19.
 */
import React from 'react';
import {connect} from 'react-redux'
import {Form, Input, Select, Row, Col, Button,DatePicker} from 'antd';

const FormItem = Form.Item;

class BanknoUSA extends React.Component {
  constructor() {
    super()
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
      let baseData=this.props.getsProfile.base_profile.bank_non_us||null
    const {getFieldDecorator} = this.props.getFieldDecorator;
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
                labelCol={{span: 6}}
                wrapperCol={{span: 18}}
              >
                {getFieldDecorator('bank_name', {
                    initialValue: baseData.bank_name || '',
                  rules: [{
                    required: true, message: '请输入您的银行名称！',
                  }],
                })(
                  <Input type="text" size="large" style={{}}/>
                )}
              </FormItem>
            </Col>
            <Col span={3} offset={1}>
              <Button onClick={this.props.showBank} type="primary" style={{width:'100%',height:'32px',backgroundColor:'#223976',borderRadius:'0px'}}>查找常用银行</Button>
            </Col>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="银行地址 / Bank addresss"
              labelCol={{span: 4,offset: 2}}
              wrapperCol={{span: 16}}
            >
              {getFieldDecorator('bank_address', {
                  initialValue: baseData.bank_address || '',
                rules: [{
                  required: true, message: '请填写您的银行地址！'
                }],
              })(
                <Input type="textarea" style={{width: '100%',height:88,resize:'none'}} />
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="Swiftcode"
              labelCol={{span: 4,offset: 2}}
              wrapperCol={{span: 16}}
            >
              {getFieldDecorator('swift_code', {
                  initialValue: baseData.swift_code || '',
                rules: [{
                  required: true, message: '请输入SwiftCode!',
                }],
              })(
                <Input type="text" size="large" style={{}}/>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="账户号 / Account number"
              labelCol={{span: 4,offset: 2}}
              wrapperCol={{span: 16}}
            >
              {getFieldDecorator('account_number', {
                  initialValue: baseData.account_number || '',
                rules: [{
                  required: true, message: '请输入您的银行账户号!',
                }],
              })(
                <Input type="text" size="large" style={{}}/>
              )}
            </FormItem>
          </Row>




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
            labelCol={{span: 20,offset:2}}
            wrapperCol={{span: 20,offset:2}}
          >
            {getFieldDecorator('middle_bank_name', {
                initialValue: baseData.middle_bank_name || '',
              rules: [{
                required: true, message: '请输入您的指定的中间行名称！',
              }],
            })(
              <Input type="text" size="large" style={{}}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="中间行地址 / Intermediary (correspondent) bank address"
            labelCol={{span: 20,offset:2}}
            wrapperCol={{span: 20,offset:2}}
          >
            {getFieldDecorator('middle_bank_address', {
                initialValue: baseData.middle_bank_address || '',
              rules: [{
                required: true, message: '请输入您的指定的中间行地址！',
              }],
            })(
              <Input type="textarea" size="large" style={{height:'80px',resize:'none'}}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="中间行Swiftcode / Intermediary (correspondent) bank Swiftcode"
            labelCol={{span: 20,offset:2}}
            wrapperCol={{span: 20,offset:2}}
          >
            {getFieldDecorator('middle_bank_swift_code', {
                initialValue: baseData.middle_bank_swift_code || '',
              rules: [{
                required: true, message: '请输入中间行Swiftcode',
              }],
            })(
              <Input type="text" size="large" style={{}}/>
            )}
          </FormItem>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}
BanknoUSA.defaultProps = {};
export default connect(mapStateToProps)(BanknoUSA)






/****************************
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
 ***************************/
