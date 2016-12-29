/**
 * Created by robot on 2016/12/27.
 */

require('components/identity/identity.css');

import React from 'react';
import {Form, Input, Row, Col, Button,Radio} from 'antd';
import Avatar from 'components/uploader/index'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class Identity extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{},
      size: '非美国投资人',
      value:'1'
    }
  }

  onChange=(e)=> {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
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
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '20px',
      color:'#223976'
    };

    return (

      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>

        <Form horizontal>

          <FormItem>
            <Row style={{paddingTop: '30px'}}>
              <Col span={20} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体',color:'#'}}>请务必填写您的真实有效信息，姓名和投资人类型一旦确认不可修改</h2></Col>
              <Col span={11} offset={2}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px'}}>
                注：投资人姓名必须与汇款银行帐号上的姓名一致。</p></Col>
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

          <FormItem>
            <Row style={{paddingTop: '30px'}}>
              <Col span={3} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>投资人类型</h2></Col>
            </Row>
          </FormItem>





          <FormItem>
            <Row style={{paddingTop: '10px'}}>
              <Col span={9} offset={2}>
                <Radio.Group value={this.state.size} onChange={this.handleSizeChange} style={{width:'100%',height:'90px'}}>
                  <Radio.Button value="非美国投资人" style={{width:'100%',height:'90px',borderRadius:'5px',textAlign:'center'}}>
                    <span style={{display:'block',width: '100%',fontSize:'14px',textAlign:'center'}}>非美国投资人 (Non-US Investor)</span>
                    我不是证券法S条例下定义的美国人，并且我定居在美国境外。
                  </Radio.Button>
                </Radio.Group>
              </Col>
              <Col span={2}>
                <div style={{width: '100%',height:'90px',lineHeight:'90px',textAlign:'center',fontSize:'18px'}}>or</div>
              </Col>
              <Col span={9}>
                <Radio.Group value={this.state.size} onChange={this.handleSizeChange} style={{width:'100%',height:'90px'}}>
                  <Radio.Button value="美国投资人" style={{width:'100%',height:'90px',borderRadius:'5px',textAlign:'center'}}>
                    <span style={{display:'block',width: '100%',fontSize:'14px',textAlign:'center'}}>美国投资人 (US Investor)</span>
                    我满足美国公民，绿卡持有者，在美国居住，或在美国工作这四项条件中的任一项。
                  </Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          </FormItem>

          <FormItem>
            <Row style={{paddingTop: '10px'}}>
              <Col span={9} offset={2}>

                <div style={{height:'200px'}} className={this.state.size=='非美国投资人'?'show':'hide'}>
                  <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio style={radioStyle} value={1}>本人为中国大陆投资人（持有中国有效身份证）</Radio>
                    <Radio style={radioStyle} value={2}>本人为其他国家港澳台投资人</Radio>
                  </RadioGroup>
                </div>

              </Col>
              <Col span={2}>
                <div></div>
              </Col>
              <Col span={9}>

                <div style={{height:'200px'}} className={this.state.size=='美国投资人'?'show':'hide'}>
                  <div>
                    <p style={{color:'#ff6600',lineHeight:'20px'}}>满足以下两项条件中的任意一项，即可成为合格投资人。</p>
                    <p style={{lineHeight:'20px'}}>1.我个人或与配偶的联合资产超过100万美金，包括退休金、401K、IRA、任何险金、投资基金、股票、投资房产及其他任何财产（注：不包括自己现居住的一处房产）。</p>
                    <p style={{lineHeight:'20px',marginBottom:'10px'}}>2.我过去两年内个人年总收入超过20万美金，或与配偶联合年总收入超过30万美金，同时今年收入预期和前两年接近。具有顾客信用报告的复印件。</p>
                  </div>
                  <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio style={radioStyle} value={3}>我是合格投资人</Radio>
                    <Radio style={radioStyle} value={4}>我不是合格投资人</Radio>
                  </RadioGroup>
                </div>
              </Col>
            </Row>
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Row style={{paddingTop: '20px', paddingBottom: '40px',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
              <Col span={8} offset={8}>
                <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#223976',
                  color: '#fff',
                  fontSize: '18px'
                }} type="primary" htmlType="submit" size="large">下一步</Button>
              </Col>
            </Row>

          </FormItem>







        </Form>
      </div>
    );
  }
}
Identity = Form.create({
  mapPropsToFields(props) {
    return {
      last_name: {
        ...props.last_name,
        value: props.last_name,
      },
    };
  }
})(Identity);

Identity.defaultProps = {};

export default Identity;