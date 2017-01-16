/**
 * Created by robot on 2016/12/19.
 */
import React from 'react';
import {connect} from 'react-redux'
import {Form, Input, Select, Row, Col, Button,DatePicker,Radio} from 'antd';

const FormItem = Form.Item;

class BankUSA extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{},
      size: 'Checking'
    }
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
    console.log(e.target.value)
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
    const size = this.state.size;
    const {getFieldDecorator} = this.props.getFieldDecorator;
    let baseData=this.props.getsProfile.base_profile.bank_us
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
                  required: true, message: '请填写您的银行地址!'
                }],
              })(
                <Input type="textarea" style={{width: '100%',height:88,resize:'none'}} />
              )}
            </FormItem>
          </Row>
          <Row>
          <FormItem
            {...formItemLayout}
            label="ABA / Routing number"
            labelCol={{span: 4,offset: 2}}
            wrapperCol={{span: 16}}
          >
            {getFieldDecorator('routing_number', {
                initialValue: baseData.routing_number || '',
              rules: [{
                required: true, message: '请输入ABA / Routing number',
              }],
            })(
              <Input type="text" size="large" style={{}}/>
            )}
          </FormItem>
        </Row>
          <Row>
            <FormItem
              {...formItemLayout}
              label="账户名 / Account number"
              labelCol={{span: 4,offset: 2}}
              wrapperCol={{span: 16}}
            >
              {getFieldDecorator('account_number', {
                  initialValue: baseData.account_number || '',
                rules: [{
                  required: true, message: '请输入您的银行账户名！',
                }],
              })(
                <Input type="text" size="large" style={{}}/>
              )}
            </FormItem>
          </Row>



        <FormItem
          {...formItemLayout}
          label="账户类型 / Account type"
          labelCol={{span: 4,offset: 2}}
          wrapperCol={{span: 16}}
        >
          {getFieldDecorator('account_type', {
              initialValue: baseData.account_type || '',
            rules: [{
              required: true, message: '请选择您的账户类型!',
            }],
          })(
            <Radio.Group onChange={this.handleSizeChange} style={{width:'100%',height:'32px'}}>
              <Radio.Button value="Checking" style={{width:'40%',height:'32px',borderRadius:'32px',textAlign:'center',float:'left'}}>Checking</Radio.Button>
              <div style={{width:'20%',height:'32px',float:'left'}}></div>
              <Radio.Button value="Savings" style={{width:'40%',height:'32px',borderRadius:'32px',textAlign:'center',float:'left'}}>Savings</Radio.Button>
            </Radio.Group>
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
BankUSA.defaultProps = {};
export default connect(mapStateToProps)(BankUSA)




