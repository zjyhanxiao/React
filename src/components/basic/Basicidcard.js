/**
 * Created by robot on 2016/12/21.
 */





import React from 'react';
import {Form, Input,Select, Row, Col, Button,DatePicker} from 'antd';
import Avatar from 'components/uploader/index'


const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class Basicidcard extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
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
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    const mapPropsToFields={

    }
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };
    return (

      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>

        <Form horizontal>
          <Row style={{paddingTop: '30px'}}>
            <Col span={12}>
              <Col span={5} offset={4}>
                <h2 style={{color: '#159bd6', fontFamily: '宋体', height: '30px'}}>
                  护照上传</h2>
              </Col>
              <Col span={12}>
                <p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '7px'}}>请上传您的护照信息页面照片或扫描文件</p>
              </Col>
            </Col>
            <Col span={12}>
              <Col span={5} offset={2}>
                <h2 style={{color: '#159bd6', fontFamily: '宋体', height: '30px'}}>
                  身份证上传</h2>
              </Col>
              <Col span={11} offset={1}>
                <p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '7px'}}>
                  投资人姓名必须与汇款银行帐号上的姓名一致,且一旦提交不可修改。</p>
              </Col>
            </Col>
          </Row>

          <Row style={{marginTop:'20px'}}>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="护照号"
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('passport_code', {
                  initialValue:'E35456464',
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
                label="身份证号"
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('passport_code', {
                  initialValue:'',
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
          </Row>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="有效期至"
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('sss', {
                  rules: [{ type: 'object', required: true, message: '请输入日期!' }],
                })(
                  <DatePicker size="large" style={{width: 240}}></DatePicker>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="有效期至"
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('sss', {
                  rules: [{ type: 'object', required: true, message: '请输入日期!' }],
                })(
                  <DatePicker size="large" style={{width: 240}}></DatePicker>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={2}>
              <Avatar></Avatar>
            </Col>
            <Col span={8} offset={3}>
              <Avatar></Avatar>
            </Col>
          </Row>
          <Row style={{paddingTop: '10px'}}>
            <Col span={8} offset={2}>
              <p style={{color: '#999999', fontFamily: '宋体', textAlign: 'center'}}>如果您的护照证件
                (例如:旧版中国护照) 不包含签名部分,请将证件置于白纸之上,并于证件下方签名,
                拍照或扫描上传。证件必须为原件, 不能为复印件。</p>
            </Col>
            <Col span={8} offset={3}>
              <p style={{color: '#999999', fontFamily: '宋体', textAlign: 'center'}}></p>
            </Col>
          </Row>


        </Form>
      </div>
    );
  }
}
Basicidcard = Form.create({
  mapPropsToFields(props) {
    return {
      last_name: {
        ...props.last_name,
        value: props.last_name,
      },
    };
  }
})(Basicidcard);

Basicidcard.defaultProps = {};

export default Basicidcard;





















/*
*/

/***********************
 * <FormItem {...tailFormItemLayout}>
 <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
 <Col span={8} offset={7}>
 <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#223976',
                  color: '#fff',
                  fontSize: '18px'
                }} type="primary" htmlType="submit" onClick= {this.handleSubmit.bind(this)} size="large">下一步</Button>
 </Col>
 </Row>
 </FormItem>
 */
