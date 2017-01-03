import React, {Component, PropTypes}from 'react';
import 'antd/dist/antd.css'
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile} from '../Redux/actions/index'
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
        // values.date_of_birth = values.date_of_birth.format('YYYY-MM-DD')
        values.mx_token='25b6ca3901730fba2cb6098d34912f34'
        values.mx_secret='da9d83c022637e7eda9fb59299026e7c'
        console.log('Received values of form: ', JSON.stringify(values));

        const { dispatch } = this.props
        dispatch(updateProfile(values,this.success))
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
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
        <Form horizontal>

          <BankFast></BankFast>
          <BankUSA {...this.props}  getFieldDecorator={this.props.form} />
          {/*<BankPublic {...this.props}  getFieldDecorator={this.props.form} />*/}
          <BanknoUSA {...this.props}  getFieldDecorator={this.props.form} />







          <FormItem {...tailFormItemLayout}>
            <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
              <Col span={4} offset={8}>
                <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#223976',
                  color: '#fff',
                  fontSize: '18px'
                }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">下一步</Button>
              </Col>
            </Row>
          </FormItem>

        </Form>

      </div>
    );
  }
}

BankInformation = Form.create({
  mapPropsToFields(props) {
    console.log(JSON.stringify(props.passport_photo))
    return {
      passport_photo: {
        ...props.passport_photo,
        value: props.passport_photo,
      },
    };
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
