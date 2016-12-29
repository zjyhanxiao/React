import React, {Component, PropTypes}from 'react';
import 'antd/dist/antd.css'
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {fetchPosts} from '../Redux/actions/index'
import BasicInfoUC from '../components/basic/BasicInfoUC'
import BasicInfoH from '../components/basic/BasicInfoH'
import Basicpassport from '../components/basic/Basicpassport'
const FormItem = Form.Item;

class BasicInformation extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(fetchPosts())
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.date_of_birth = values.date_of_birth.format('YYYY-MM-DD')
                values.mx_token='25b6ca3901730fba2cb6098d34912f34'
                values.mx_secret='da9d83c022637e7eda9fb59299026e7c'
                console.log('Received values of form: ', values);
            }
        });
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
                    <BasicInfoH {...this.props.getsProfile.base_profile} getFieldDecorator={this.props.form}  />
                    {/*<BasicInfoUC />*/}
                    <Basicpassport {...this.props.getsProfile.base_profile}  getFieldDecorator={this.props.form} />
                    <FormItem {...tailFormItemLayout}>
                        <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
                            <Col span={4} offset={7}>
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

BasicInformation = Form.create({
    mapPropsToFields(props) {
        return {
            date_of_birth: {
                ...props.date_of_birth,
                value: moment(props.date_of_birth),
            },
            passport_code: {
                ...props.passport_code,
                value: props.passport_code,
            },
            passport_photo: {
                ...props.passport_photo,
                value: props.passport_photo,
            },
        };
    }
})(BasicInformation);

BasicInformation.defaultProps = {};

BasicInformation.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(BasicInformation)
