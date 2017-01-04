
import React, {Component, PropTypes}from 'react';
import 'antd/dist/antd.css'
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile} from '../Redux/actions/index'
import AddressChina from '../components/address/AddressChina';
import AddressOther from '../components/address/AddressOther';
import AddressProve from '../components/address/AddressProve';
import AddressPublic from '../components/address/AddressPublic';


const FormItem = Form.Item;

class AddressInformation extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
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
        {/*{JSON.stringify(this.props.passport_photo)}*/}
        <Form horizontal>



          <AddressProve {...this.props}  getFieldDecorator={this.props.form} />
          <AddressPublic {...this.props}  getFieldDecorator={this.props.form} />
          <AddressChina {...this.props}  getFieldDecorator={this.props.form} />
          <AddressOther {...this.props}  getFieldDecorator={this.props.form} />




          <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
            <Col span={3} offset={6}>
              <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                background: '#ffffff',
                color: '#223976',
                fontSize: '18px'
              }} type="primary" onClick={this.goback} size="large">上一步</Button>
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

AddressInformation = Form.create({
  mapPropsToFields(props) {
    return {
      passport_photo: {
        ...props.passport_photo,
        value: props.passport_photo,
      },
    };
  }
})(AddressInformation);

AddressInformation.defaultProps = {};

AddressInformation.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}


export default connect(mapStateToProps)(AddressInformation)
