/**
 * Created by robot on 2016/12/19.
 */
import React from 'react';
import {Form, Input, Select, Row, Col, Button,DatePicker} from 'antd';
import Avatar from 'components/uploader/index'

const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class BankPublic extends React.Component {
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
    return (
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>

        <Form horizontal>
          <FormItem>
            <Row style={{paddingTop: '30px'}}>
              <Col span={6} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>打款／回款银行信息</h2></Col>
            </Row>
            <Row style={{}}>
            <Col span={20} offset={2}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px',lineHeight:'12px'}}>
              请注意：您的汇款与收款银行必须一致，而且银行账户上的姓名应当为投资人姓名。请仔细填写以下信息，以免回款时给您带来不便。</p></Col>
          </Row>
          </FormItem>
          <FormItem>
            <Row style={{paddingTop: '30px'}}>
              <Col span={6} offset={5}><Button type="ghost" style={{width:'100%',height:'32px',borderRadius:'32px',border:'1px solid #223976',color:'#223976'}}>非美国银行</Button></Col>
              <Col span={2} style={{textAlign:'center',lineHeight:'32px'}}>OR</Col>
              <Col span={6}><Button type="ghost"  style={{width:'100%',height:'32px',borderRadius:'32px',border:'1px solid #cccccc',color:'#cccccc'}}>美国银行</Button></Col>
            </Row>
          </FormItem>

        </Form>
      </div>
    );
  }
}

BankPublic = Form.create({})(BankPublic);

BankPublic.defaultProps = {};

export default BankPublic;
