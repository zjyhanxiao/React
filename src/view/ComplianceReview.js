import React, {Component, PropTypes}from 'react';
import 'antd/dist/antd.css'
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile} from '../Redux/actions/index'
import CompliancePublic from '../components/compliance/CompliancePublic'



const FormItem = Form.Item;

class ComplianceReview extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
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
      <div style={{width: 900, background: '#fff', overflow: 'hidden',display:this.props.fifth==true?'block':'none'}}>
        {JSON.stringify(this.props)}
        <Form horizontal>

          <CompliancePublic {...this.props}  getFieldDecorator={this.props.form} />



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
                }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">完成</Button>
              </Col>
            </Row>
          </FormItem>

        </Form>

      </div>
    );
  }
}

ComplianceReview = Form.create({

})(ComplianceReview);

ComplianceReview.defaultProps = {};

ComplianceReview.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}


export default connect(mapStateToProps)(ComplianceReview)
