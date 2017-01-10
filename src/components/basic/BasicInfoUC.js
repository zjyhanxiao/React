/**
 * Created by robot on 2016/12/26.
 */

import './BasicInfo.css'
import React from 'react';
import {connect} from 'react-redux'
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
let country
function handleChange(value) {
    console.log(`selected ${value}`);
}
class BasicInfoUC extends React.Component {
    constructor(props) {
        super(props)

        country = this.props.country.map(function (item) {
            return <Option value={item.encode} key={item.id}>{item.name}</Option>
        })
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
            <Row style={{paddingTop: '30px'}}>
              <Col span={2} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>个人信息</h2></Col>
              <Col span={11} offset={1}>
                <p style={{fontFamily: '宋体', marginTop: '2px'}}>(
                  {this.props.getsProfile.base_profile.first_name} {this.props.getsProfile.base_profile.last_name} {this.props.getsProfile.base_profile.investor_type==1?'中国大陆投资人':'美国投资人'}
                  )</p>
              </Col>
            </Row>
          </FormItem>




          <Row>
            <Col span={12}>
              <FormItem
                  {...formItemLayout}
                  label="出生日期"
                  labelCol={{span: 4, offset: 4}}
                  wrapperCol={{span: 14}}
              >
                {getFieldDecorator('date_of_birth', {
                    rules: [{type: 'object', required: false, message: '请输入日期!'}],
                })(
                    <DatePicker size="large" style={{width: 240}}></DatePicker>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                  {...formItemLayout}
                  label="出生国家"
                  labelCol={{span: 4, offset: 2}}
                  wrapperCol={{span: 14}}
              >
                {getFieldDecorator('country_of_birth', {
                    initialValue: 'China',
                    rules: [{
                        type: 'string',
                        required: false,
                        message: '请选择您的出生国家！'
                    }],
                })(
                    //<Cascader options={residences} />
                    <Select size="large" style={{width: 240}} onChange={handleChange}>
                        {country}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>


                {this.props.getsProfile.base_profile.investor_type == 2 ?
                    <div>
              <Row>
                <Col span={12}>
                  <FormItem
                      {...formItemLayout}
                      label="SSN"
                      labelCol={{span: 4, offset: 4}}
                      wrapperCol={{span: 14}}
                  >
                    {getFieldDecorator('ssn', {
                        rules: [{
                            required: false, message: '请输入您的SSN!',
                        }],
                    })(
                        <Input type="text" size="large" style={{width: 240}} />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                      {...formItemLayout}
                      label="国籍"
                      labelCol={{span: 4, offset: 2}}
                      wrapperCol={{span: 14}}
                  >
                    {getFieldDecorator('nationality', {
                        initialValue: 'China',
                        rules: [{
                            type: 'string',
                            required: false,
                            message: '请选择您的国籍！'
                        }],
                    })(
                        //<Cascader options={residences} />
                        <Select size="large" style={{width: 240}} onChange={handleChange}>
                        {country}
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
                  labelCol={{span: 4, offset: 4}}
                  wrapperCol={{span: 14}}
              >
                {getFieldDecorator('industry', {
                    rules: [{
                        type: 'string',
                        required: false,
                        message: '请选择您的行业！'
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
                  labelCol={{span: 4, offset: 2}}
                  wrapperCol={{span: 14}}
              >
                {getFieldDecorator('occupation', {
                    initialValue: 'lucy',
                    rules: [{
                        type: 'string',
                        required: false,
                        message: '请选择您的职业！'
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


                {this.props.getsProfile.base_profile.investor_type == 1 ?
                    <Row>
              <Col span={12}>
                <FormItem
                    {...formItemLayout}
                    label="资金来源"
                    labelCol={{span: 4, offset: 4}}
                    wrapperCol={{span: 14}}
                >
                  {getFieldDecorator('source_of_capital', {
                      rules: [{
                          type: 'string',
                          required: false,
                          message: '请选择您的资金来源！'
                      }],
                  })(
                      //<Cascader options={residences} />
                      <Select size="large" style={{width: 240}} onChange={handleChange}>
                      <Option value="savings">存款/Savings</Option>
                      <Option value="heritage">继承/Heritage</Option>
                      <Option value="other">其他/Others</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>

              </Col>
            </Row>
                    :
                    ''
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


