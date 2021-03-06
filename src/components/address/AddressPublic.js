import React from 'react';
import {connect} from 'react-redux'
import moment from 'moment'
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd';
import Uploader from '../uploader/index'
import {changeAddressType} from '../../Redux/actions/index'

const FormItem = Form.Item;
const Option = Select.Option;


class AddressPublic extends React.Component {
    constructor() {
        super();
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
        const {dispatch} =this.props
        dispatch(changeAddressType(value))
    }


    render() {
        const {getFieldDecorator} = this.props.getFieldDecorator;
        const base_data = this.props.getsProfile.base_profile
        let addressPhoto = null
        if (this.props.getsProfile.AddressType == 'drive') {
            if (base_data && base_data.driving_license_url != null && base_data.driving_license_url != '') {
                addressPhoto = base_data.driving_license_url
            } else {
                addressPhoto = 'https://www.meixinfinance.com/vendor/img/shenfenzheng.png'
            }
        } else if(this.props.getsProfile.AddressType == 'bill') {
            if (base_data && base_data.bill_url != null && base_data.bill_url != '') {
                addressPhoto = base_data.bill_url
            } else {
                addressPhoto = 'https://www.meixinfinance.com/vendor/img/shenfenzheng.png'
            }
        }
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
              {this.props.getsProfile.AddressType == 'bill' ?
                  '你的账单必须包含姓名与地址，并且账单日期为三个月内'
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
                labelCol={{span: 4, offset: 4}}
                wrapperCol={{span: 14}}
            >
              {getFieldDecorator('file_type', {
                  initialValue: this.props.getsProfile.AddressType == 'drive'
                      ?
                      'drive'
                      :
                      this.props.getsProfile.AddressType == 'bill'
                          ?
                          'bill'
                          :
                          'drive',
                  rules: [{
                      type: 'string',
                      required: true,
                      message: '请选择证件类型！'
                  }],
              })(
                  //<Cascader options={residences} />
                  <Select size="large" style={{width: 240}} onChange={this.handleChange}>
                  <Option value="drive">美国驾照 （推荐选项）</Option>
                  <Option value="bill">银行、水电费、网络或电话账单</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
                {...formItemLayout}
                label={this.props.getsProfile.AddressType == 'bill' ? '账单日期' : '有效期至'}
                labelCol={{span: 4, offset: 2}}
                wrapperCol={{span: 14}}
            >
              {getFieldDecorator(this.props.getsProfile.AddressType == 'bill' ? 'bill_expire_date' : 'driving_license_expire_date', {
                  initialValue: this.props.getsProfile.AddressType == 'bill' && base_data.bill_expire_date != '' && base_data.bill_expire_date != null
                      ?
                      moment(base_data.bill_expire_date)
                      :
                      this.props.getsProfile.AddressType == 'drive' && base_data.driving_license_expire_date != '' && base_data.driving_license_expire_date != null
                          ?
                          moment(base_data.driving_license_expire_date)
                          :
                          null,
                  rules: [{type: 'object', required: true, message: '请输入日期!'}],
              })(
                  <DatePicker size="large" style={{width: 240}} />
              )}
            </FormItem>
          </Col>
        </Row>
          <FormItem>
            <Row style={{paddingTop: '30px'}}>
                <Col span={8} offset={8}>
                  <FormItem style={{width: 346, margin: '0 auto'}}>
                    {getFieldDecorator(this.props.getsProfile.AddressType == 'bill' ? 'bill_url' : 'driving_license_url', {
                        initialValue: this.props.getsProfile.AddressType == 'bill'
                            ?
                            this.props.getsProfile.base_profile.bill_url
                            :
                            this.props.getsProfile.AddressType == 'drive'
                                ?
                                this.props.getsProfile.base_profile.driving_license_url
                                :
                                null,
                        rules: [{required: false, message: '请上传证件!'}]
                    })(
                        <Uploader {...this.props}
                                  cardUrl={addressPhoto} />
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






