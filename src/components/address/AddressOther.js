import React from 'react';
import {connect} from 'react-redux'
import {getState} from '../../Redux/actions/index'
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
let country, regionData
class AddressOther extends React.Component {
    constructor(props) {
        super(props)
        country = this.props.getsProfile.Country.map(function (item) {
            return <Option value={item.name}  key={item.name + item.id}>{item.name}</Option>
        })
    }

    changeCountry(value) {
        console.log(`selected ${value}`);
            const {dispatch} = this.props
            dispatch(getState({country: value}))

        this.props.form.setFieldsValue({
            region:''
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
        const baseData=this.props.getsProfile.base_profile.address_non_cn
        if (this.props.getsProfile.Region != undefined) {
            regionData = this.props.getsProfile.Region.map((region) => <Option key={region.encode + region.id}
                                                                               value={ region.name}>{region.name}</Option>)
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
            <Row>
              <Col span={14}><p style={{textAlign: 'center', lineHeight: '14px', color: "#ff6600"}}>您必须使用英文填写您的住宅地址（非 P.O.BOX 或 in-care-of 地址）</p></Col>
            </Row>
          </FormItem>
          <Row>
              {this.props.getsProfile.base_profile.investor_type == 2 ?

                  <FormItem
                      {...formItemLayout}
                      label="国家 / Country"
                      labelCol={{span: 5, offset: 2}}
                      wrapperCol={{span: 15}}
                  >
              {getFieldDecorator('country', {
                  initialValue: '美国',
                  rules: [{
                      type: 'string',
                      required: false,
                      message: '请选择您所在的国家！'
                  }],
              })(
                  //<Cascader options={residences} />
                  <Select disabled size="large" style={{}} onChange={handleChange}>
                  <Option value="United States of America">美国</Option>
                </Select>
              )}
            </FormItem> :
                  <FormItem
                      {...formItemLayout}
                      label="国家 / Country"
                      labelCol={{span: 5, offset: 2}}
                      wrapperCol={{span: 15}}
                  >
              {getFieldDecorator('country', {
                  initialValue: baseData.country||'中国香港',
                  rules: [{
                      type: 'string',
                      required: true,
                      message: '请选择您所在的国家！'
                  }],
              })(
                  //<Cascader options={residences} />
                  <Select size="large" style={{}} onChange={this.changeCountry.bind(this)}>
                      {country}
                </Select>
              )}
            </FormItem>

              }
          </Row>
          <Row>
            <FormItem
                {...formItemLayout}
                label="地址第一行 / Address line 1"
                labelCol={{span: 5, offset: 2}}
                wrapperCol={{span: 15}}
            >
              {getFieldDecorator('line1', {
                  initialValue: baseData.line1||'',
                  rules: [{
                      required: true, message: '请输入您所在的地址！',},{
                      pattern: /^[a-z0-9 \,\.\-\']+$/i, message: "请输入英文",}],
              })(
                  <Input type="text" size="large" style={{}} />
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
                {...formItemLayout}
                label="地址第二行 / Address line 2"
                labelCol={{span: 5, offset: 2}}
                wrapperCol={{span: 15}}
            >
              {getFieldDecorator('line2', {
                  initialValue: baseData.line2||'',
                  rules: [{
                      required: false, message: '请输入您所在的地址！',},{
                      pattern: /^[a-z0-9 \,\.\-\']+$/i, message: "请输入英文",}],
              })(
                  <Input type="text" placeholder="选填" size="large" style={{}} />
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
                {...formItemLayout}
                label="市 / City or town"
                labelCol={{span: 5, offset: 2}}
                wrapperCol={{span: 15}}
            >
              {getFieldDecorator('city', {
                  initialValue: baseData.city||'',
                  rules: [{
                      required: true, message: '请输入您所在的市！',},{
                      pattern: /^[a-z0-9 \,\.\-\']+$/i, message: "请输入英文",}],
              })(
                  <Input type="text" size="large" style={{}} />
              )}
            </FormItem>
          </Row>
                {this.props.getsProfile.Region&&this.props.getsProfile.Region.length > 0 ?
                    <Row>
                        <FormItem
                            {...formItemLayout}
                            label="州省 / State or province"
                            labelCol={{span: 5, offset: 2}}
                            wrapperCol={{span: 15}}
                        >
                          {getFieldDecorator('region', {
                              initialValue: baseData.region || '',
                              rules: [{
                                  type: 'string',
                                  required: true,
                                  message: '请选择您所在的州省！'
                              }],
                          })(
                              //<Cascader options={residences} />
                              <Select size="large" style={{}} onChange={handleChange}>
                                {regionData}
                            </Select>
                          )}
                        </FormItem>
                    </Row>
                :
                    ''
                }
          <Row>
            <FormItem
                {...formItemLayout}
                label="邮编 / Postal code"
                labelCol={{span: 5, offset: 2}}
                wrapperCol={{span: 15}}
            >
              {getFieldDecorator('postal_code', {
                  initialValue: baseData.postal_code||'',
                  rules: [{
                      required: false, message: '请输入您的邮编!',
                  }],
              })(
                  <Input type="text" size="large" style={{}} />
              )}
            </FormItem>
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
AddressOther.defaultProps = {};
export default connect(mapStateToProps)(AddressOther)

