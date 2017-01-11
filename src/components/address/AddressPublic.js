/**
 * Created by robot on 2016/12/19.
 */

import React from 'react';
import {connect} from 'react-redux'
import {Form, Input, Select, Row, Col, Button,DatePicker} from 'antd';
import Uploader from '../uploader/index'

const FormItem = Form.Item;
const Option = Select.Option;


class AddressPublic extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  handleChange=(value)=> {
    console.log(`selected ${value}`);
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
            <Col span={3} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>地址证明上传</h2></Col>
            <Col span={10} offset={1}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px'}}>
              {this.props.getsProfile.base_profile.file_type == 'jack'?
                '你的账单必须包含姓名与地址，并且账单日起为三个月内'
                :
                ''
              }
            </p></Col>
          </Row>
        </FormItem>
        <Row>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="证件类型"
              labelCol={{span: 4,offset: 4}}
              wrapperCol={{span: 14}}
            >
              {getFieldDecorator('file_type', {
                initialValue:'CN',
                rules: [{
                  type: 'string',
                  required: true,
                  message: '请选择证件类型！'
                }],
              })(
                //<Cascader options={residences} />
                <Select size="large" style={{width: 240}} onChange={this.handleChange}>
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
              label={this.props.getsProfile.base_profile.file_type=='jack'?'账单日期':'有效期至'}
              labelCol={{span: 4,offset: 2}}
              wrapperCol={{span: 14}}
            >
              {getFieldDecorator(this.props.getsProfile.base_profile.file_type=='jack'?'bill_expire_date':'driving_license_expire_date', {
                rules: [{ type: 'object', required: true, message: '请输入日期!' }],
              })(
                <DatePicker size="large" style={{width: 240}}></DatePicker>
              )}
            </FormItem>
          </Col>
        </Row>
          <FormItem>
            <Row style={{paddingTop: '30px'}}>
                <Col span={8} offset={8}>
                  <FormItem style={{width: 346, margin: '0 auto'}}>
                    {getFieldDecorator(this.props.getsProfile.base_profile.file_type=='jack'?'bill_url':'driving_license_url', {
                      initialValue: this.props.passport_photo,
                      rules: [{required: false, message: '请上传证件!'}]
                    })(
                      <Uploader {...this.props.passport_photo}/>
                    )}
                  </FormItem>
                </Col>
            </Row>
            <Row style={{marginTop: '10px'}}>
              <Col span={12} offset={6} style={{color: '#999999', fontFamily: '宋体', textAlign: 'center'}}>请在下面区域填写您地址证明上的地址，务必与证件上的地址确保一致。</Col>
            </Row>
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
AddressPublic.defaultProps = {};
export default connect(mapStateToProps)(AddressPublic)






