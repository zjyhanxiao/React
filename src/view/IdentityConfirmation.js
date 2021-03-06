import React, {Component, PropTypes}from 'react'
import {Form} from 'antd'
import {connect} from 'react-redux'
import {saveFields} from '../Redux/actions/index'
import Identity from '../components/identity/identity'

class IdentityConfirmation extends React.Component {
  constructor(props) {
    super(props)
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
        <Form horizontal>
          <Identity  {...this.props}  getFieldDecorator={this.props.form} />

        </Form>

      </div>
    );
  }
}

IdentityConfirmation = Form.create({
  onFieldsChange(props, changedFields) {
    for (let i in changedFields) {
      let key = changedFields[i].name
      let val = changedFields[i].value
      if (val != undefined && val != '' && val != null) {
          props.dispatch(saveFields(key, val));
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
