import React, {Component, PropTypes}from 'react';
import 'antd/dist/antd.css'
import {Form, Row, Col, Button,Radio} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile,saveFields} from '../Redux/actions/index'
import BankFast from '../components/bank/BankFast'
import BanknoUSA from '../components/bank/BanknoUSA'
import BankUSA from '../components/bank/BankUSA'

const FormItem = Form.Item;

class BankInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:{},
      size: '非美国银行'
    }
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
    console.log(e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', JSON.stringify(values));

        /*const { dispatch } = this.props
        dispatch(updateProfile(values,this.success))*/
      }
    });
  }

  success(){
    console.log('success')
  }

  render() {
    const size = this.state.size;
    // const {getFieldDecorator} = this.props.form;
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
      <div style={{width: 900, background: '#fff', overflow: 'hidden',display:this.props.fourth==true?'block':'none'}}>
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




          {/*<FormItem*/}
            {/*{...formItemLayout}*/}
            {/*label="Radio.Group"*/}
          {/*>*/}
            {/*{getFieldDecorator('radio-group')(*/}
              {/*<RadioGroup>*/}
                {/*<Radio value="a">item 1</Radio>*/}
                {/*<Radio value="b">item 2</Radio>*/}
                {/*<Radio value="c">item 3</Radio>*/}
              {/*</RadioGroup>*/}
            {/*)}*/}
          {/*</FormItem>*/}




          <Row style={{paddingTop: '10px'}}>
            <Col span={6} offset={5}>
              <Radio.Group value={size} onChange={this.handleSizeChange} style={{width:'100%',height:'32px'}}>
                <Radio.Button value="非美国银行" style={{width:'100%',height:'32px',borderRadius:'32px',textAlign:'center'}}>非美国银行</Radio.Button>
              </Radio.Group>
            </Col>
            <Col span={2} style={{textAlign:'center',lineHeight:'32px'}}>OR</Col>
            <Col span={6}>
              <Radio.Group value={size} onChange={this.handleSizeChange} style={{width:'100%',height:'32px'}}>
                <Radio.Button value="美国银行" style={{width:'100%',height:'32px',borderRadius:'32px',textAlign:'center'}}>美国银行</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>

          <div className={this.state.size == '非美国银行' ? 'show' : 'hide'}>
            <BanknoUSA {...this.props}  getFieldDecorator={this.props.form} />
          </div>
          <div className={this.state.size == '美国银行' ? 'show' : 'hide'}>
            <BankUSA {...this.props}  getFieldDecorator={this.props.form} />
          </div>





          {/*<BankFast></BankFast>*/}
          {/*<BankUSA {...this.props}  getFieldDecorator={this.props.form} />*/}
          {/*<BanknoUSA {...this.props}  getFieldDecorator={this.props.form} />*/}


          <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
            <Col span={3} offset={6}>
              <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                background: '#ffffff',
                color: '#223976',
                fontSize: '18px'
              }} type="primary" name="third" onClick={this.props.changeIndex} size="large">上一步</Button>
            </Col>



            <Col span={3} offset={6}>
              <FormItem {...tailFormItemLayout}>
                <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#223976',
                  color: '#fff',
                  fontSize: '18px'
                }} type="primary" htmlType="submit" name="fifth" onClick={this.handleSubmit.bind(this)} size="large">下一步</Button>
              </FormItem>
            </Col>
          </Row>

        </Form>

      </div>
    );
  }
}

BankInformation = Form.create({
    onFieldsChange(props, changedFields) {
        for (let i in changedFields) {
            let key = changedFields[i].name
            let val = changedFields[i].value
            if (key == 'date_of_birth') {
                let val = changedFields[i].value.format('YYYY-MM-DD')
                props.dispatch(saveFields(key, val));
            } else {
                props.dispatch(saveFields(key, val));
            }
        }
    }
})(BankInformation);
BankInformation.defaultProps = {};

BankInformation.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}


export default connect(mapStateToProps)(BankInformation)
