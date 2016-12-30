import React from 'react';
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd';
import moment from 'moment'
import Uploader from '../uploader/index'
import {connect} from 'react-redux'
import {updateProfile} from '../../Redux/actions/index'

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
class Basicpassport extends React.Component {
    constructor(props) {
        super(props)
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
        const mapPropsToFields = {}
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
        };
        return (

            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>

                <FormItem>
                    <Row style={{marginTop: '30px'}}>
                        <Col span={2} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体', height: '30px'}}>
                            护照上传</h2></Col>
                    </Row>
                </FormItem>

                <Row>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="护照号"
                            hasFeedback
                            labelCol={{span: 4, offset: 4}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('passport_code', {
                                initialValue: 'E35456464',
                                rules: [{
                                    required: true, message: '请输入您的护照号!',
                                }, {
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
                            label="有效期至"
                            hasFeedback
                            labelCol={{span: 4, offset: 2}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator('sss', {
                                rules: [{type: 'object', required: true, message: '请输入日期!'}],
                            })(
                                <DatePicker size="large" style={{width: 240}}></DatePicker>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <FormItem style={{width: 346, margin: '0 auto'}}>
                    {getFieldDecorator('passport_photo', {
                        initialValue: this.props.passport_photo,
                        rules: [{required: true, message: '请上传证件!'}]
                    })(
                        <Uploader {...this.props.passport_photo}/>
                    )}
                </FormItem>
                <FormItem>
                    <Row>
                        <Col span={10} offset={7}>
                            <p style={{color: '#999999', fontFamily: '宋体', textAlign: 'center', lineHeight: '18px'}}>
                                如果您的护照证件
                                (例如:旧版中国护照) 不包含签名部分,请将证件置于白纸之上,并于证件下方签名,
                                拍照或扫描上传。证件必须为原件, 不能为复印件。</p>
                        </Col>
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
Basicpassport.defaultProps = {};
export default connect(mapStateToProps)(Basicpassport)
