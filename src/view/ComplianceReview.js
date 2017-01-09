import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile, saveFields} from '../Redux/actions/index'
import CompliancePublic from '../components/compliance/CompliancePublic'



const FormItem = Form.Item;

class ComplianceReview extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', JSON.stringify(values));
        this.props.handleOk(e);
        console.log(
          this.props.getsProfile.base_profile)
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
        <Form horizontal>

          <CompliancePublic {...this.props}  getFieldDecorator={this.props.form} />


          <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
            <Col span={3} offset={6}>
              <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                background: '#ffffff',
                color: '#223976',
                fontSize: '18px'
              }} type="primary" name="fourth" onClick={this.props.changeIndex} size="large">上一步</Button>
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
                }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">完成</Button>
              </FormItem>
            </Col>
          </Row>


          {/*<FormItem {...tailFormItemLayout}>*/}
             {/*<Row style={{marginTop: '50px', paddingBottom: '40px'}}>*/}
               {/*<Col span={4} offset={8}>*/}
                 {/*<Button style={{width: '120px', height: '50px', borderRadius: '30px', background: '#223976', color: '#fff', fontSize: '18px'}} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">完成</Button>*/}
               {/*</Col>*/}
             {/*</Row>*/}
          {/*</FormItem>*/}

        </Form>

      </div>
    );
  }
}

ComplianceReview = Form.create({
  onFieldsChange(props, changedFields) {
    console.log(JSON.stringify(changedFields))
    for (let i in changedFields) {
      let key = changedFields[i].name
      let val = changedFields[i].value
      console.log(val)
      if (val != undefined && val != '' && val != null) {
        if (key == 'date_of_birth') {
          let val = changedFields[i].value.format('YYYY-MM-DD')
          props.dispatch(saveFields(key, val));
        } else {
          props.dispatch(saveFields(key, val));
        }
      }

    }
  },
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
