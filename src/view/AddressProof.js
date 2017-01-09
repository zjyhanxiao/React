import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {updateProfile, saveFields} from '../Redux/actions/index'
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
                this.props.changeIndex(e)
                /*const {dispatch} = this.props
                dispatch(updateProfile(values, this.success))*/
            }
        });
    }

    disabledDate(current) {
        // can not select days before today and today
        return current && current.valueOf() < Date.now() - 90 * 24 * 60 * 60 * 1000;
    }

    expire_date(current) {
        // can not select days before today and today
        return current && current.valueOf() < Date.now() - 1 * 24 * 60 * 60 * 1000;
    }

    success() {
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
            <div style={{
                width: 900,
                background: '#fff',
                overflow: 'hidden',
                display: this.props.third == true ? 'block' : 'none'
            }}>
        {/*{JSON.stringify(this.props.passport_photo)}*/}
                <Form horizontal>
          <AddressProve {...this.props} getFieldDecorator={this.props.form} disabledDate={this.disabledDate}
                        expire_date={this.expire_date} />
          {/*<AddressPublic {...this.props} getFieldDecorator={this.props.form} disabledDate={this.disabledDate}
                         expire_date={this.expire_date} />*/}
          <AddressChina {...this.props} getFieldDecorator={this.props.form} disabledDate={this.disabledDate}
                        expire_date={this.expire_date} />
          {/*<AddressOther {...this.props} getFieldDecorator={this.props.form} disabledDate={this.disabledDate}
                        expire_date={this.expire_date} />*/}




          <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
            <Col span={3} offset={6}>
              <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#ffffff',
                  color: '#223976',
                  fontSize: '18px'
              }} type="primary" name="second" onClick={this.props.changeIndex} size="large">上一步</Button>
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
                }} type="primary" htmlType="submit" name="fourth" onClick={this.handleSubmit.bind(this)} size="large">下一步</Button>
              </FormItem>
            </Col>
          </Row>

        </Form>

      </div>
        );
    }
}

AddressInformation = Form.create({
    onFieldsChange(props, changedFields) {
        console.log(JSON.stringify(changedFields))
        for (let i in changedFields) {
            let key = changedFields[i].name
            let val = changedFields[i].value
            console.log(val)
            if (val != undefined && val != '' && val != null) {
                if (key == 'id_card_expire_date') {
                    let val = changedFields[i].value.format('YYYY-MM-DD')
                    props.dispatch(saveFields(key, val));
                } else {
                    props.dispatch(saveFields(key, val));
                }
            }

        }
    },
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
