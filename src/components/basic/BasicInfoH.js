import React from 'react'
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd'
import moment from 'moment'
import {connect} from 'react-redux'
const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
class BasicInfoH extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {getFieldDecorator} = this.props.getFieldDecorator
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        }
        return (

            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
                <FormItem>
                    <Row style={{paddingTop: '30px'}}>
                        <Col span={2} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>个人信息</h2></Col>
                        <Col span={11} offset={1}><p style={{fontFamily: '宋体', marginTop: '2px'}}>
                            (Yue Chen Zhao 非美国-其他国家 / 港澳台地区投资人)</p></Col>
                    </Row>
                </FormItem>


                <Row>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="出生日期"
                            hasFeedback
                            labelCol={{span: 4, offset: 4}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('date_of_birth', {
                                initialValue: moment(this.props.date_of_birth),
                                rules: [{type: 'object', required: true, message: '请输入日期!'}],
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
                                initialValue: 'CN',
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
                                initialValue: 'CN',
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
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="资金来源"
                            labelCol={{span: 4, offset: 2}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('nationality', {
                                initialValue: 'CN',
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
                            {getFieldDecorator('residence', {
                                initialValue: 'CN',
                                rules: [{
                                    type: 'string',
                                    required: false,
                                    message: 'Please select your habitual residence!'
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
                                    message: 'Please select your habitual residence!'
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


                <Row style={{paddingBottom: '30px'}}>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="纳税国"
                            labelCol={{span: 4, offset: 4}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('nationality', {
                                initialValue: 'CN',
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
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="纳税号"
                            hasFeedback
                            labelCol={{span: 4, offset: 2}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('passport_code', {
                                initialValue: this.props.passport_code,
                                rules: [{
                                    required: true, message: '请输入您的护照号!',
                                }],
                            })(
                                <Input type="text" size="large" style={{width: 240}} onBlur={this.handlePasswordBlur}/>
                            )}
                        </FormItem>
                    </Col>
                </Row>


            </div>
        );
    }
}
/*BasicInfoH = Form.create({
    mapPropsToFields(props) {
        return {
            date_of_birth: {
                ...props.date_of_birth,
                value: moment(props.date_of_birth),
            },
            passport_code: {
                ...props.passport_code,
                value: props.passport_code,
            },
            passport_photo: {
                ...props.passport_photo,
                value: props.passport_photo,
            },
        };
    }
})(BasicInfoH);*/

BasicInfoH.defaultProps = {}

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(BasicInfoH)
