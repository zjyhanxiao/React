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
class BasicPassport extends React.Component {
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
        let data=this.props.getsProfile.base_profile
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
        console.log(JSON.stringify(this.props.test))
        return (

            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
                <FormItem>
                    <Row style={{marginTop: '30px'}}>
                        <Col span={3} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体', height: '30px'}}>{this.props.test.type}</h2></Col>
                      <Col span={12}><p style={{color: '#ff6600', fontFamily: '宋体', height: '30px'}}>{this.props.test.explain}</p></Col>
                    </Row>
                </FormItem>

                <Row>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label={this.props.test.typeNumber}
                            labelCol={{span: 4, offset: 4}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator(this.props.test.numberfield, {
                              initialValue: this.props.test.numberfieldDefault||'',
                                //initialValue: 'E35456464',
                                rules: [{
                                    required: true, message: '请输入您的护照号!',
                                }],
                            })(
                                <Input type="text" size="large" style={{width: 240}}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            {...formItemLayout}
                            label="有效期至"
                            labelCol={{span: 4, offset: 2}}
                            wrapperCol={{span: 14}}
                        >
                            {getFieldDecorator(this.props.test.validityfield, {
                              initialValue: this.props.test.validityfieldDefault!=''?moment(this.props.test.validityfieldDefault):null,
                                rules: [{type: 'object', required: true, message: '请输入日期!'}],
                            })(
                                <DatePicker size="large" style={{width: 240}}></DatePicker>
                            )}
                        </FormItem>
                    </Col>
                </Row>


              {/*required:this.props.test.certificate*/}
                <FormItem style={{width: 346, margin: '0 auto'}}>
                    {getFieldDecorator(this.props.test.urlfield, {
                      initialValue: this.props.test.urlfieldDefault,
                        rules: [{ required:false, message: '请上传证件!'}]
                    })(
                        <Uploader {...data} />
                    )}
                </FormItem>
                <FormItem>
                    <Row>
                        <Col span={10} offset={7}>
                            <p style={{color: '#999999', fontFamily: '宋体', textAlign: 'center', lineHeight: '18px'}}>{this.props.test.notice}</p>
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
BasicPassport.defaultProps = {};
export default connect(mapStateToProps)(BasicPassport)
