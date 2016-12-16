require('components/Main.css');

import 'antd/dist/antd.min.css'
import React from 'react';
import $ from 'jquery';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button} from 'antd';
import DatePickerComponent from 'components/datePicker/index'
import Avatar from 'components/uploader/index'
import Signature from 'components/signature/index'

const FormItem = Form.Item;
const Option = Select.Option;

//const residences = [{
//  value: 'zhejiang',
//  label: 'Zhejiang',
//  children: [{
//    value: 'hangzhou',
//    label: 'Hangzhou',
//    children: [{
//      value: 'xihu',
//      label: 'West Lake',
//    }],
//  }],
//}, {
//  value: 'jiangsu',
//  label: 'Jiangsu',
//  children: [{
//    value: 'nanjing',
//    label: 'Nanjing',
//    children: [{
//      value: 'zhonghuamen',
//      label: 'Zhong Hua Men',
//    }],
//  }],
//}];
function handleChange(value) {
    console.log(`selected ${value}`);
}
class RegistrationForm extends React.Component {
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
                let data=values;/*
                data=$.extend({},data,{mx_token:'dcce91f6a09f4888170fde606ec6bae7',mx_secret:'6f22f5e20a888325716d4def4e463e12'})*/
                data.mx_token='dcce91f6a09f4888170fde606ec6bae7'
                data.mx_secret='6f22f5e20a888325716d4def4e463e12'
                console.log(data);
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
                            <Col span={11} offset={1}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '5px'}}>
                                投资人姓名必须与汇款银行帐号上的姓名一致,且一旦提交不可修改。</p></Col>
                        </Row>
                    </FormItem>


                    <Row style={{marginTop: '10px'}}>


                    </Row>


                    <FormItem
                        {...formItemLayout}
                        label="姓氏"
                        hasFeedback
                    >
                        {getFieldDecorator('last_name', {
                            initialValue:'yang',
                            rules: [{
                                required: true, message: '请输入您的姓的汉语拼音!',
                                pattern: /^[a-z \,\.\-\']+$/i,
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="text" onBlur={this.handlePasswordBlur}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="名"
                        hasFeedback
                    >
                        {getFieldDecorator('first_name', {
                            initialValue:'yang',
                            rules: [{
                                required: true, message: '请输入您的名的汉语拼音!',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="text" onBlur={this.handlePasswordBlur}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="出生日期"
                        hasFeedback
                    >
                        {getFieldDecorator('date_of_birth', {
                            initialValue:'1988-11-19',
                            rules: [{
                                //required: true, message: '请输入您的出生日期！',
                            }, {
                                //validator: this.checkPassowrd,
                            }],
                        })(
                            <DatePickerComponent></DatePickerComponent>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="出生国家"
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
                            <Select size="large" style={{width: 200}} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="CN">中国</Option>
                                <Option value="disabled">Disabled</Option>
                                <Option value="yiminghe">Yiminghe</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="纳税国"
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
                            <Select size="large" style={{width: 200}} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="CN">中国</Option>
                                <Option value="disabled">Disabled</Option>
                                <Option value="yiminghe">Yiminghe</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="国籍"
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
                            <Select size="large" style={{width: 200}} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="CN">中国</Option>
                                <Option value="disabled">Disabled</Option>
                                <Option value="yiminghe">Yiminghe</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="行业"
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
                            <Select size="large" style={{width: 200}} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="CN">Lucy</Option>
                                <Option value="disabled">Disabled</Option>
                                <Option value="yiminghe">Yiminghe</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="职业"
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
                            <Select size="large" style={{width: 200}} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled">Disabled</Option>
                                <Option value="yiminghe">Yiminghe</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="资金来源"
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
                            <Select size="large" style={{width: 200}}>
                                <Option value="jack">Jack</Option>
                                <Option value="savings">存款</Option>
                                <Option value="disabled">Disabled</Option>
                                <Option value="yiminghe">Yiminghe</Option>
                            </Select>
                        )}

                    </FormItem>
                    <FormItem>
                        <Row style={{marginTop: '30px'}}>
                            <Col span={2} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体', height: '30px'}}>
                                证件上传</h2></Col>
                        </Row>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="护照号"
                        hasFeedback
                    >
                        {getFieldDecorator('passport_code', {
                            initialValue:'E35456464',
                            rules: [{
                                required: true, message: '请输入您的护照号!',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="text" onBlur={this.handlePasswordBlur}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="有效期至"
                        hasFeedback
                    >
                        {getFieldDecorator('sss', {
                            rules: [{
                                //required: true, message: '请输入您的出生日期！',
                            }, {
                                //validator: this.checkPassowrd,
                            }],
                        })(
                            <DatePickerComponent></DatePickerComponent>
                        )}
                    </FormItem>
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
RegistrationForm = Form.create({})(RegistrationForm);
/*const RegistrationForm = Form.create()(React.createClass({
    getInitialState() {
        return {
            passwordDirty: false,
        };
    },

}));*/
RegistrationForm.defaultProps = {};

export default RegistrationForm;


/*************************************************
 import 'antd/dist/antd.min.css'
 import React from 'react';
 import { Row, Col,Button,Input,Select} from 'antd';
 import DatePickerComponent from 'components/datePicker/index'
 import Avatar from 'components/uploader/index'
 import Signature from 'components/signature/index'

 const Option = Select.Option;

 function handleChange(value) {
  console.log(`selected ${value}`);
}

 class AppComponent extends React.Component {

  render() {
    return (
      <div style={{ width: 900 ,background:'#fff'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col span={2} offset={2}><h2 style={{color: '#159bd6',fontFamily:'宋体'}}>个人信息</h2></Col>
          <Col span={11} offset={1}><p style={{color: '#ff6600',fontFamily:'宋体',marginTop:'5px'}}>投资人姓名必须与汇款银行帐号上的姓名一致,且一旦提交不可修改。</p></Col>
        </Row>

        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>姓氏</Col>
          <Col span={7}><Input placeholder="姓的汉语拼音" style={{width: '240px',height:'32px'}}/></Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>名</Col>
          <Col span={7}><Input placeholder="名的汉语拼音" style={{width: '240px',height:'32px'}}/></Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>出生日期</Col>
          <Col span={7}><DatePickerComponent style={{ height: '32px' }}></DatePickerComponent></Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>出生国家</Col>
          <Col span={7}>
              <Select size="large" defaultValue="CN" style={{ width: 240 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="CN">Lucy</Option>
                <Option value="disabled">Disabled</Option>
                <Option value="yiminghe">Yiminghe</Option>
              </Select>
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>纳税国</Col>
          <Col span={7}>
            <Select size="large" defaultValue="CN" style={{ width: 240 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="CN">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="yiminghe">Yiminghe</Option>
            </Select>
          </Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>国籍</Col>
          <Col span={7}>
              <Select size="large" defaultValue="CN" style={{ width: 240 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="CN">Lucy</Option>
                <Option value="disabled">Disabled</Option>
                <Option value="yiminghe">Yiminghe</Option>
              </Select>
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>行业</Col>
          <Col span={7}>
            <Select size="large" defaultValue="CN" style={{ width: 240 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="CN">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="yiminghe">Yiminghe</Option>
            </Select>
          </Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>职业</Col>
          <Col span={7}>
            <Select size="large" defaultValue="CN" style={{ width: 240 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="CN">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="yiminghe">Yiminghe</Option>
            </Select>
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>资金来源</Col>
          <Col span={7}>
            <Select size="large" defaultValue="CN" style={{ width: 240 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="CN">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="yiminghe">Yiminghe</Option>
            </Select>
          </Col>
        </Row>

        <Row style={{marginTop:'30px'}}>
          <Col span={2} offset={2}><h2 style={{color: '#159bd6',fontFamily:'宋体',height:'30px'}}>证件上传</h2></Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>护照号</Col>
          <Col span={7}><Input placeholder="" style={{width: '240px',height:'32px'}}/></Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>有效期至</Col>
          <Col span={7}><DatePickerComponent></DatePickerComponent></Col>
        </Row>
        <Row style={{marginTop:'40px'}}>
          <Col span={10} offset={7}><Avatar></Avatar></Col>
        </Row>
        <Row style={{marginTop:'20px'}}>
          <Col span={12} offset={6} style={{color:'#999999',fontFamily:'宋体',textAlign:'center'}}>如果您的护照证件 (例如:旧版中国护照) 不包含签名部分,请将证件置于白纸之上,</Col>
        </Row>
        <Row>
          <Col span={12} offset={6} style={{color:'#999999',fontFamily:'宋体',textAlign:'center'}}>并于证件下方签名, 拍照或扫描上传。证件必须为原件, 不能为复印件。</Col>
        </Row>
        <Row style={{marginTop:'50px',paddingBottom:'40px'}}>
          <Col span={4} offset={10}>
            <Button style={{width: '100%',height:'50px',borderRadius:'30px',background:'#223976',color:'#fff',fontSize:'18px'}}>下一步</Button></Col>
        </Row>
      </div>
    );
  }
}

 AppComponent.defaultProps = {
};

 export default AppComponent;
 ***********************************************************/
