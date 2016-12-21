/**
 * Created by robot on 2016/12/20.
 */
import React from 'react';
import {Form, Row, Col,DatePicker,Checkbox,Button} from 'antd';
import ComplianceSpouse from 'components/complianceSpouse/index'

const FormItem = Form.Item;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class CompliancePubllic extends React.Component {
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
              <Col span={6} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>投资人合规审查</h2></Col>
            </Row>
            <Row style={{}}>
              <Col span={20} offset={2}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px',lineHeight:'12px'}}>
                为了确认您的自然投资人身份，您需进行收入或净值审查。</p></Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row style={{paddingTop: '10px'}}>
              <Col span={9} offset={2}>
                <div style={{width: '100%',height:'125px',border:'1px solid #335095',borderRadius:'5px'}}>
                  <span style={{display:'block',width: '100%',fontSize:'14px',color:'#223976',textAlign:'center'}}>收入审查</span>
                  <p style={{fontFamily:'宋体',color:'#223976',marginRight:'20px',marginLeft:'20px',fontSize:'12px',lineHeight:'20px'}}>过去两年内您的个人年总收入超过20万美金，或与配偶联合年总收入超过30万美金，同时今年收入预期和前两年接近。
                  </p>
                </div>
              </Col>
              <Col span={2}>
                <div style={{width: '100%',height:'125px',lineHeight:'125px',textAlign:'center',fontSize:'18px'}}>or</div></Col>
              <Col span={9}>
                <div style={{width: '100%',height:'125px',border:'1px solid #cccccc',borderRadius:'5px'}}>
                  <span style={{display:'block',width: '100%',fontSize:'14px',color:'#cccccc',textAlign:'center'}}>净值审查</span>
                  <p style={{fontFamily:'宋体',color:'#cccccc',marginRight:'20px',marginLeft:'20px',fontSize:'12px',lineHeight:'20px'}}>您个人或与配偶联合资产超过1百万美金，包括退休金、401K、IRA、任何现金、投资基金、股票、投资房产(但不包括自己现居住的一处房产)及其他任何资产。
                  </p>
                </div>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row style={{paddingTop: '10px'}}>
              <Col span={9} offset={2}>
                <div style={{width: '100%',height:'125px',lineHeight:'20px'}}>
                  注：请向美信金融递交过去两年的Form W-2, Form 1099, Schedule K-1 of Form 1065或已填完的Form 1040，来证明您的收入或与配偶的合计收入。您可以修改上述文件非必要部分以免泄露个人身份信息。

                </div>
              </Col>
              <Col span={2}></Col>
              <Col span={9}>
                <div style={{width: '100%',height:'125px',lineHeight:'20px',display:'none'}}>
                  注：请确认您的全部个人负债或您与您的配偶的全部共同负债                ，并且向美信金融递交以下文件。
                  (i) 银行账单、券商账单、证券增持、存款证明、税务评估和/或 第三方出具的评估报告。账单与报告应当显示您的个人资产或与配偶的共同资产或
                  (ii) 由TransUnion, EquiFax或Experian为您或您与配偶出具的顾客信用报告的复印件。

                </div>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row style={{paddingTop: '30px'}}>
              <Col span={20} offset={2}><Checkbox style={{color:'#223976'}} onChange={onChange}>我的审查资料包括配偶信息</Checkbox></Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row style={{}}>
              <Col span={20} offset={2}><p style={{width:'100%',height:'1px',backgroundColor:'#223976'}}></p></Col>
            </Row>
          </FormItem>






          <ComplianceSpouse></ComplianceSpouse>






          <FormItem>
            <Row style={{}}>
              <Col span={20} offset={2}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px',lineHeight:'12px'}}>
                注：如您需要向美信金融递交上述合格投资人证明材料，请您用邮件发送至invest@meixinfinance.com。</p></Col>
            </Row>
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
              <Col span={4} offset={7}>
                <Button style={{
                                    width: '120px',
                                    height: '50px',
                                    borderRadius: '30px',
                                    background: '#223976',
                                    color: '#fff',
                                    fontSize: '18px'
                                }} type="primary" htmlType="submit" onClick= {this.handleSubmit.bind(this)} size="large">完成</Button>
              </Col>
            </Row>
          </FormItem>

        </Form>

      </div>
    );
  }
}

CompliancePubllic = Form.create({})(CompliancePubllic);

CompliancePubllic.defaultProps = {};

export default CompliancePubllic;

