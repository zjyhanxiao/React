import React, {Component, PropTypes}from 'react';
import 'antd/dist/antd.css'
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile,saveFields} from '../Redux/actions/index'
import BankFast from '../components/bank/BankFast'
import BanknoUSA from '../components/bank/BanknoUSA'
import BankPublic from '../components/bank/BankPublic'
import BankUSA from '../components/bank/BankUSA'

const FormItem = Form.Item;

class BankInformation extends React.Component {
  constructor(props) {
    super(props)
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

          <BankFast></BankFast>
          <BankUSA {...this.props}  getFieldDecorator={this.props.form} />
          {/*<BankPublic {...this.props}  getFieldDecorator={this.props.form} />*/}
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
                }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">下一步</Button>
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
