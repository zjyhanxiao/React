import React from 'react'
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd'
import moment from 'moment'
import {connect} from 'react-redux'
const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
let country
const industry = [
    {
        'name': '计算机/互联网/通讯/电子',
        'list': [
            "硬件工程师,Hardware Engineer",
            "软件工程师,Software Engineer",
            "测试工程师,Test Engineer",
            "产品经理,Product Manager",
            "项目经理,Project Manager",
            "网站策划,Web Producer",
            "网站编辑,Web Editor"
        ]
    },
    {
        'name': '销售/商务/客服',
        'list': [
            "销售经理,Sales Manager",
            "渠道分销经理,Channel Distribution Manager",
            "客户经理,Sales Account Manager",
            "区域销售经理,Regional Sales Manager",
            "销售代表,Sales Representative Executive",
            "渠道分销专员,ChannelDistribution Representative",
            "客户代表,Sales Account Representative",
            "电话销售,Telesales",
            "经销商,Distributor",
            "商务经理,Business Manager",
            "售前售后技术支持经理,Technical Support Manager",
            "售前售后技术支持工程师,Technical Support Engineer",
            "咨询热线呼叫中心服务人员,Customer Hot LineCall Center Staff"
        ]
    },
    {
        'name': '财务/证券/银行/保险/律师',
        'list': [
            "首席财务官,Chief Financial Officer",
            "财务总监,Finance Director",
            "财务顾问,Finance Consultant",
            "会计,Accountant",
            "出纳员,Cashier",
            "审计经理主管,Audit Manager",
            "统计员,Statistician",
            "金融经济研究员,Financial Analyst",
            "投资基金项目经理,Investment Manager",
            "投资理财顾问,Investment Financial Management Advisor",
            "投资银行业务, Investment Banking Specialist",
            "融资专员,Treasury Specialist",
            "拍卖师,Auction",
            "清算人员,Settlement Officer",
            "高级客户经理客户经理,Senior Relationship Manager",
            "保险精算师,Actuary",
            "保险产品开发项目策划,Product Development Planner",
            "保险代理经纪人客户经理,Agent BrokerAccount Manager",
            "理财顾问财务规划师,Financial AdvisorFinancial Planner",
            "储蓄经理人,Agency Management Associate",
            "律师,Lawyer",
            "法务经理,Corporate Counsel/Compliance Officer",
            "专利顾问,Patent Advisor"
        ]
    },
]
class BasicInfoH extends React.Component {
    constructor(props) {
        super(props)

        country = this.props.country.map(function (item) {
            return <Option value={item.encode} key={item.id}>{item.name}</Option>
        })
        this.state = {
            industry: industry.map(function (item) {
                return item.name
            }),
            occupation: null
        }
    }
    industryChange(value) {
        console.log(`selected ${value}`);
        let data = industry.map(function (item) {
            if (item.name == value) {
                return item.list
            }
        })
        data.map(function (item) {
            if (item != null) {
                data = item
            }
        })
        this.setState({
            occupation: data
        })
    }
    render() {
        const {getFieldDecorator} = this.props.getFieldDecorator
        const industryData = this.state.industry.map(function (item, index) {
            return <Option value={item} key={item + '_' + index}>{item}</Option>
        })
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        return (

            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
                <FormItem>
                    <Row style={{paddingTop: '30px'}}>
                        <Col span={2} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>个人信息</h2></Col>
                        <Col span={11} offset={1}><p style={{fontFamily: '宋体', marginTop: '2px'}}>(
                          {this.props.getsProfile.base_profile.first_name} {this.props.getsProfile.base_profile.last_name} 非美国-其他国家 / 港澳台地区投资人
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
                                //initialValue: (this.props != null && this.props.date_of_birth != null) ? moment(this.props.date_of_birth) : null,
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
                                initialValue: this.props.getsProfile.base_profile.investor_type==99?'Hong Kong':'China',
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


                <Row>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="国籍"
                            labelCol={{span: 4, offset: 4}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('nationality', {
                                initialValue: this.props.getsProfile.base_profile.investor_type==99?'Hong Kong':'China',
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
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="资金来源"
                            labelCol={{span: 4, offset: 2}}
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
                                //initialValue: 'CN',
                                rules: [{
                                    type: 'string',
                                    required: false,
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
                                rules: [{
                                    type: 'string',
                                    required: false,
                                    message: '请选择您的职业！'
                                }],
                            })(
                                <Select size="large" style={{width: 240}} onChange={handleChange}>
                                    {this.state.occupation != null ?
                                        this.state.occupation.map(function (item, index) {
                                            return <Option value={item.split(',')[1]} key={item.split(',')[1] + '_' + index}>{item.split(',')[0]}</Option>

                                        })
                                        :
                                        <Option value='' />
                                    }
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
                                initialValue: this.props.getsProfile.base_profile.investor_type==99?'Hong Kong':'China',
                                rules: [{
                                    type: 'string',
                                    required: false,
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
                                //initialValue: this.props.passport_code,
                                rules: [{
                                    required: false, message: '请输入您的纳税号！',
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

BasicInfoH.defaultProps = {}

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(BasicInfoH)
