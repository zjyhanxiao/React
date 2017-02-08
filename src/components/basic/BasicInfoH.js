import React from 'react'
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd'
import moment from 'moment'
import {connect} from 'react-redux'
import {getOccupation} from '../../Redux/actions/index'
const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
let country,industryData,occupationData
class BasicInfoH extends React.Component {
    constructor(props) {
        super(props)
        country = this.props.getsProfile.Country.map(function (item) {
            return <Option value={item.name} key={item.encode+item.id}>{item.name}</Option>
        })
        industryData = this.props.getsProfile.Industry.map(function (item) {
            return <Option value={item.nameCn} key={item.nameEn+item.id}>{item.nameCn}</Option>
        })
    }
    industryChange(value) {
        console.log(`selected ${value}`);
            const {dispatch} = this.props
            dispatch(getOccupation({industry: value}))

        this.props.form.setFieldsValue({
            occupation: ''
        })
    }
    render() {
        let baseData = this.props.getsProfile.base_profile;
        const {getFieldDecorator} = this.props.getFieldDecorator
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        if (this.props.getsProfile.Occupation != null) {
            occupationData = this.props.getsProfile.Occupation.map((item) => <Option key={item.nameEn+item.id}
                                                                               value={item.nameCn}>{item.nameCn}</Option>)
        }
        return (

            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
                <FormItem>
                    <Row style={{paddingTop: '30px'}}>
                        <Col span={2} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>个人信息</h2></Col>
                        <Col span={11} offset={1}><p style={{fontFamily: '宋体', marginTop: '2px'}}>(
                          {baseData.first_name} {baseData.last_name} 非美国-其他国家 / 港澳台地区投资人
                          )</p></Col>
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
                              initialValue: baseData.base_info.date_of_birth != null &&
                              baseData.base_info.date_of_birth != ''
                                  ?
                                  moment(baseData.base_info.date_of_birth)
                                  :
                                  null,
                                rules: [{type: 'object', required: true, message: '请输入日期!'}],
                            })(
                                <DatePicker disabledDate={this.props.disabledDate} size="large" style={{width: 240}} />
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
                              initialValue: baseData.base_info.country_of_birth||'',
                                rules: [{
                                    type: 'string',
                                    required: true,
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


                <Row>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="国籍"
                            labelCol={{span: 4, offset: 4}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('nationality', {
                              initialValue: baseData.base_info.nationality||'',
                                rules: [{
                                    type: 'string',
                                    required: true,
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
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="资金来源"
                            labelCol={{span: 4, offset: 2}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('source_of_capital', {
                              initialValue: baseData.base_info.source_of_capital||'',
                                rules: [{
                                    type: 'string',
                                    required: true,
                                    message: '请选择您的资金来源！'
                                }],
                            })(
                                //<Cascader options={residences} />
                                <Select size="large" style={{width: 240}} onChange={handleChange}>
                                  <Option value="存款/Savings">存款/Savings</Option>
                                  <Option value="继承/Heritage">继承/Heritage</Option>
                                  <Option value="其他/Other">其他/Other</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                </Row>


                <Row>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="行业"
                            labelCol={{span: 4, offset: 4}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('industry', {
                              initialValue: baseData.base_info.industry||'',
                                rules: [{
                                    type: 'string',
                                    required: true,
                                    message: '请选择您的行业！'
                                }],
                            })(
                                //<Cascader options={residences} />
                                <Select size="large" style={{width: 240}} onChange={this.industryChange.bind(this)}>
                                    {industryData}
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
                              initialValue: baseData.base_info.occupation||'',
                                rules: [{
                                    type: 'string',
                                    required: true,
                                    message: '请选择您的职业！'
                                }],
                            })(
                                <Select size="large" style={{width: 240}} onChange={handleChange}>
                                   {occupationData}
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                </Row>


                <Row style={{paddingBottom: '30px'}}>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="纳税国"
                            labelCol={{span: 4, offset: 4}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('country_of_tax_residency', {
                              initialValue: baseData.base_info.country_of_tax_residency||'',
                                rules: [{
                                    type: 'string',
                                    required: true,
                                    message: '请选择您的纳税国！'
                                }],
                            })(
                                //<Cascader options={residences} />
                                <Select size="large" style={{width: 240}} onChange={handleChange}>
                                    {country}
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="纳税号"
                            labelCol={{span: 4, offset: 2}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('foreign_tax_number', {
                              initialValue: baseData.base_info.foreign_tax_number||'',
                                //initialValue: this.props.passport_code,
                                rules: [{
                                    required: false, message: '请输入您的纳税号！',
                                }],
                            })(
                                <Input type="text" placeholder="如选择的纳税国没有税号则无需填写" size="large" style={{width: 240}}/>
                            )}
                        </FormItem>
                    </Col>
                </Row>


            </div>
        );
    }
}

BasicInfoH.defaultProps = {}

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(BasicInfoH)
