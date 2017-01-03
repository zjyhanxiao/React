/**
 * Created by robot on 2016/12/20.
 */

require('components/compliance/CompliancePublic.css');
import React from 'react';
import {connect} from 'react-redux'
import {Form, Row, Col,DatePicker,Checkbox,Button,Radio,Input} from 'antd';
import ComplianceSpouse from './complianceSpouse'

const FormItem = Form.Item;

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

class CompliancePublic extends React.Component {
  constructor() {
    super();
    this.state = {
      a:false,
      profile:{},
      size: '收入审查',
      b:''
    }
  }

  onChange = (e) => {
    this.setState({ a: e.target.checked });
    console.log(e.target.checked)
  }

  Change = (e) => {
    this.setState({ b: e.target.value });
    console.log("负债金额为 "+e.target.value)
  }


  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
    console.log(e.target.value)
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
    // console.log(getFieldDecorator)


    const formItemLayout = {
      // labelCol: {span: 6},
      // wrapperCol: {span: 14},
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
              <Col span={6} offset={2}><h2 style={{color: '#159bd6', fontFamily: '宋体'}}>投资人合规审查</h2></Col>
            </Row>
            <Row style={{}}>
              <Col span={20} offset={2}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px',lineHeight:'12px'}}>
                为了确认您的自然投资人身份，您需进行收入或净值审查。</p></Col>
            </Row>
          </FormItem>


          <FormItem {...formItemLayout}>
            <Row style={{paddingTop: '10px'}}>
              <Col span={9} offset={2}>
                <Radio.Group value={this.state.size} onChange={this.handleSizeChange} style={{width:'100%',height:'125px'}}>
                  <Radio.Button value="收入审查" style={{width:'100%',height:'125px',borderRadius:'5px',textAlign:'center'}}>
                    <span style={{display:'block',width: '100%',fontSize:'14px',textAlign:'center'}}>收入审查</span>
                    过去两年内您的个人年总收入超过20万美金，或与配偶联合年总收入超过30万美金，同时今年收入预期和前两年接近。
                  </Radio.Button>
                </Radio.Group>
              </Col>


              <Col span={2}>
                <div style={{width: '100%',height:'125px',lineHeight:'125px',textAlign:'center',fontSize:'18px'}}>or</div>
              </Col>


              <Col span={9}>
                <Radio.Group value={this.state.size} onChange={this.handleSizeChange} style={{width:'100%',height:'125px'}}>
                  <Radio.Button value="净值审查" style={{width:'100%',height:'125px',borderRadius:'5px',textAlign:'center'}}>
                    <span style={{display:'block',width: '100%',fontSize:'14px',textAlign:'center'}}>净值审查</span>
                    您个人或与配偶联合资产超过1百万美金，包括退休金、401K、IRA、任何现金、投资基金、股票、投资房产(但不包括自己现居住的一处房产)及其他任何资产。
                  </Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          </FormItem>



          <FormItem {...formItemLayout}>
            <Row style={{}}>
              <Col span={9} offset={2}>
                <div style={{width:'100%',height:'125px',lineHeight:'20px',color:'#cccccc'}} className={this.state.size=='收入审查'?'show':'hide'}>
                  注：请向美信金融递交过去两年的Form W-2, Form 1099, Schedule K-1 of Form 1065或已填完的Form 1040，来证明您的收入或与配偶的合计收入。您可以修改上述文件非必要部分以免泄露个人身份信息。

                </div>
              </Col>
              <Col span={2}></Col>
              <Col span={9}>
                <div style={{width:'100%',height:'125px',lineHeight:'20px',color:'#cccccc'}} className={this.state.size=='净值审查'?'show':'hide'}>
                  <Row>
                    <Col span={8}>
                      <p style={{fontSize:'16px',color:'#223976',lineHeight:'30px',textAlign:'center'}}>负债金额</p>
                    </Col>

                    <Col  span={16}>
                      <span style={{display:'inline-block',width:'200px',height:'30px',color:'#223976',fontSize:'16px',border:'1px solid #cccccc'}}>&nbsp;$ <input type="number" step="100" min="0" onChange={this.Change} style={{display:'inline',width:'180px',height:'27px',fontSize:'16px',color:'#ff6600',border:'none',outline:'none',textAlign:'center'}} />
                      </span>
                    </Col>
                  </Row>

                  <p>
                    注：请确认您的全部个人负债或您与您的配偶的全部共同负债，并且向美信金融递交以下文件。
                    (i) 银行账单、券商账单、证券增持、存款证明、税务评估和/或 第三方出具的评估报告。账单与报告应当显示您的个人资产或与配偶的共同资产或
                    (ii) 由TransUnion, EquiFax或Experian为您或您与配偶出具的顾客信用报告的复印件。
                  </p>
                </div>
              </Col>
            </Row>
          </FormItem>

          <FormItem {...formItemLayout}>
            <Row style={{paddingTop: '30px'}}>
              <Col span={20} offset={2}><Checkbox style={{color:'#223976'}} onChange={this.onChange}>我的审查资料包括配偶信息</Checkbox></Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row style={{}}>
              <Col span={20} offset={2}><p style={{width:'100%',height:'1px',backgroundColor:'#223976'}}></p></Col>
            </Row>
          </FormItem>



          {this.state.a?
            <ComplianceSpouse a={this.props.getFieldDecorator}></ComplianceSpouse>
          :
          ''
          }








          <FormItem>
            <Row style={{}}>
              <Col span={20} offset={2}><p style={{color: '#ff6600', fontFamily: '宋体', marginTop: '2px',lineHeight:'12px'}}>
                注：如您需要向美信金融递交上述合格投资人证明材料，请您用邮件发送至invest@meixinfinance.com。</p></Col>
            </Row>
          </FormItem>

          {/*// <FormItem {...tailFormItemLayout}>*/}
          {/*//   <Row style={{marginTop: '50px', paddingBottom: '40px'}}>*/}
          {/*//     <Col span={4} offset={7}>*/}
          {/*//       <Button style={{*/}
          {/*//                           width: '120px',*/}
          {/*//                           height: '50px',*/}
          {/*//                           borderRadius: '30px',*/}
          {/*//                           background: '#223976',*/}
          {/*//                           color: '#fff',*/}
          {/*//                           fontSize: '18px'*/}
          {/*//                       }} type="primary" htmlType="submit" onClick= {this.handleSubmit.bind(this)} size="large">完成</Button>*/}
              {/*/!*</Col>*!/*/}
            {/*/!*</Row>*!/*/}
          {/*/!*</FormItem>*!/*/}


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}
CompliancePublic.defaultProps = {};
export default connect(mapStateToProps)(CompliancePublic)

