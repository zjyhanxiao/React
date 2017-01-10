import React, {Component, PropTypes}from 'react'
import {Form, Row, Col, Button} from 'antd'
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile, saveFields,getState} from '../Redux/actions/index'
import Identity from '../components/identity/identity'

const FormItem = Form.Item;

class IdentityConfirmation extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', JSON.stringify(values));
          if(this.props.getsProfile.base_profile.investor_type==1){
              const {dispatch} = this.props
              dispatch(getState({"parent":2}))
          }
          if(this.props.getsProfile.base_profile.investor_type==2){
              const {dispatch} = this.props
              dispatch(getState({"parent":3}))
          }
        this.props.changeIndex(e)
        // const { dispatch } = this.props
        // dispatch(updateProfile(this.props.getsProfile.base_profile,this.success))
      }
    });
  }

  success(){
    console.log('success')
  }

  render() {
    const {getFieldDecorator} = this.props.form;
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
      <div style={{width: 900, background: '#fff', overflow: 'hidden',display:this.props.first==true?'block':'none'}}>
        {/*{JSON.stringify(this.props.passport_photo)}*/}
        <Form horizontal>

          {/*<AddressOther {...this.props}  getFieldDecorator={this.props.form} />*/}

          <Identity  {...this.props}  getFieldDecorator={this.props.form} />


          <FormItem {...tailFormItemLayout}>
            <Row style={{marginTop: '0', paddingBottom: '40px'}}>
              <Col span={4} offset={8}>
                <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#223976',
                  color: '#fff',
                  fontSize: '18px'
                }} type="primary" htmlType="submit" name="second" onClick={this.handleSubmit.bind(this)} size="large">下一步</Button>
              </Col>
            </Row>
          </FormItem>

        </Form>

      </div>
    );
  }
}

IdentityConfirmation = Form.create({
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
})(IdentityConfirmation);

IdentityConfirmation.defaultProps = {};

IdentityConfirmation.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}


export default connect(mapStateToProps)(IdentityConfirmation)
