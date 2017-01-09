/**
 * Created by robot on 2016/12/22.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Form, Input, Select, Row, Col, Button, DatePicker} from 'antd'
import Uploader from '../uploader/index'

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
class AddressProve extends React.Component {
    constructor() {
        super()
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
        let data = this.props.getsProfile.base_profile
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
            </Row>
            <Row>
              <Col span={20} offset={2}><p
                  style={{color: '#ff6600', fontFamily: '宋体'}}>
                {this.props.getsProfile.base_profile.investor_type == 1?
                '请上传您的中国身份证照片或扫描文件作为您的地址证明。'
                  :
                  '请上传银行、水电费、网络或电话账单照片或扫描文件作为您的地址证明，长电脑上必须包含姓名与地址，并且账单日起为3个月以内。'
                }
              </p></Col>
            </Row>
          </FormItem>
          <Row>
            <FormItem
                {...formItemLayout}
                label="有效期至"
                labelCol={{span: 2, offset: 8}}
                wrapperCol={{span: 12}}
            >
              {getFieldDecorator('id_card_expire_date', {
                  rules: [{type: 'object', required: false, message: '请输入日期!'}],
              })(
                  <DatePicker size="large" style={{width: 220}}></DatePicker>
              )}
            </FormItem>
          </Row>
          <FormItem>
            <Row>
                <Col span={8} offset={8}>
                  <FormItem style={{width: 346, margin: '0 auto'}}>
                    {getFieldDecorator('id_card_url', {
                        initialValue: data!=null&&data.id_card_url!=null?data.id_card_url:null,
                        rules: [{required: false, message: '请上传证件!'}]
                    })(
                        <Uploader {...data} />
                    )}
                  </FormItem>
                </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row>
              <Col span={10} offset={7}>
                <p style={{color: '#999999', fontFamily: '宋体', textAlign: 'center', lineHeight: '18px'}}>请在下面这些区域填写您地址证明上的地址，务必于证件上地址一样。</p>
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
AddressProve.defaultProps = {};
export default connect(mapStateToProps)(AddressProve)



