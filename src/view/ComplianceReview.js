import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import {saveFields,changeComplete,fetchPosts,updateProfile} from '../Redux/actions/index'
import CompliancePublic from '../components/compliance/CompliancePublic'


const FormItem = Form.Item;

class ComplianceReview extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let pro = this.props.getsProfile.base_profile
                const {dispatch}=this.props
                dispatch(updateProfile(pro))
                dispatch(fetchPosts())
                dispatch(changeComplete(true))
                document.getElementsByClassName('ant-modal-wrap')[0].scrollTop=0
                this.props.handleOk(e);
            }
        })
        e.preventDefault();
    }

    changeSubmit(e){
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', JSON.stringify(values));
                let data = {...this.props.getsProfile.base_profile}
                const {dispatch}=this.props
                dispatch(updateProfile(data))
                dispatch(fetchPosts())
                document.getElementsByClassName('ant-modal-wrap')[0].scrollTop=0
                this.props.handleCancel()
                /*const {dispatch} = this.props
                 dispatch(updateProfile(values, this.success))*/
            }
        });
    }
    cancelChange(){
        const {dispatch}=this.props
        dispatch(fetchPosts())
        this.props.handleCancel()
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
                display: this.props.fifth == true ? 'block' : 'none'
            }}>
        <Form horizontal>

          <CompliancePublic {...this.props} getFieldDecorator={this.props.form} />


            {this.props.getsProfile.Complete == true ?
                    <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
                  <Col span={3} offset={6}>
                    <Button style={{
                        width: '120px',
                        height: '50px',
                        borderRadius: '30px',
                        background: '#ffffff',
                        color: '#223976',
                        fontSize: '18px'
                    }} type="primary" name="fourth" onClick={this.cancelChange.bind(this)} size="large">取消</Button>
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
                      }} type="primary" htmlType="submit" onClick={this.changeSubmit.bind(this)} size="large">确定</Button>
                    </FormItem>
                  </Col>
                </Row>

                    :
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
                      }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}
                              size="large">完成</Button>
                    </FormItem>
                  </Col>
                </Row>
            }



        </Form>

      </div>
        );
    }
}

ComplianceReview = Form.create({
    onFieldsChange(props, changedFields) {
        for (let i in changedFields) {
            let key = changedFields[i].name
            let val = changedFields[i].value
            if (val != undefined) {
                if (
                    key == 'debt_amount' ||
                    key == 'spouse_email' ||
                    key == 'spouse_first_name' ||
                    key == 'spouse_last_name' ||
                    key == 'spouse_phone' ||
                    key == 'type' ||
                    key == 'with_spouse'
                ) {
                    props.dispatch(saveFields('accreditation', {
                        ...props.getsProfile.base_profile.accreditation,
                        [key]: val
                    }));
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
