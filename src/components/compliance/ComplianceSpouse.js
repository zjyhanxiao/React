/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';
import {connect} from 'react-redux'
import {Form, Input, Select, Row, Col, Button,DatePicker} from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class ComplianceSpouse extends React.Component {
  constructor(props) {
    super(props);
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

    const { size } = this.props;
    const state = this.state;
    const {getFieldDecorator} = this.props.getFieldDecorator;
    console.log(getFieldDecorator)
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



    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">美国</Option>
      </Select>
    );


    return (
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>

          <FormItem>
            <Row style={{paddingTop: '0px'}}>
              <Col span={20} offset={2}><p style={{color:'#223976',textAlign:'center'}}>请完成一下配偶相关信息</p></Col>
            </Row>
          </FormItem>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label='姓氏'
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('spouse_last_name', {
                  rules: [{
                    required: true, message: '请输入您配偶姓的汉语拼音!',
                  },{pattern: /^[a-z \,\.\-\']+$/i, message: '请输入汉语拼音!',}],
                })(
                  <Input type='text' size='large' style={{width: 240}}/>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label='名'
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('spouse_first_name', {
                  //initialValue:'yang',
                  rules: [{
                    required: true, message: '请输入您配偶名的汉语拼音!',
                  },{pattern: /^[a-z \,\.\-\']+$/i, message: '请输入汉语拼音!',}],
                })(
                  <Input type='text'  size='large' style={{width: 240}}/>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>



              <FormItem
                {...formItemLayout}
                label="电话"
                labelCol={{span: 4,offset: 4}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Please input your phone number!' }],
                })(
                  <Input addonBefore={prefixSelector} style={{width: 170}}/>
                )}
              </FormItem>













            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label='邮箱'
                labelCol={{span: 4,offset: 2}}
                wrapperCol={{span: 14}}
              >
                {getFieldDecorator('spouse_email', {
                  //initialValue:'yang',
                  rules: [{
                    type:'email',
                    required: true, message: '请输入您配偶的邮箱！',
                  }],
                })(
                  <Input type='text' size='large' style={{width: 240}}/>
                )}
              </FormItem>
            </Col>
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
ComplianceSpouse.defaultProps = {};
export default connect(mapStateToProps)(ComplianceSpouse)


/***************
<FormItem
{...formItemLayout}
label='电话'
labelCol={{span: 4,offset: 4}}
wrapperCol={{span: 13}}
>
<span>
<Select
value={state.currency}
size={size}
style={{ width: '32%',marginRight:'3%'}}
>
<Option value='rmb'>RMB</Option>
  <Option value='dollar'>Dollar</Option>
  </Select>
  <Input
type='text'
size={size}
value={state.number}
style={{ width: '64%',height:'32px'}}
/>
</span>
</FormItem>
  *********************/
