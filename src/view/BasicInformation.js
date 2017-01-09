import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import moment from 'moment'
import {updateProfile, saveFields} from '../Redux/actions/index'
import BasicInfoUC from '../components/basic/BasicInfoUC'
import BasicInfoH from '../components/basic/BasicInfoH'
import Basicpassport from '../components/basic/Basicpassport'
const FormItem = Form.Item;

class BasicInformation extends React.Component {
    constructor() {
        super()
    }

    handleSubmit(e) {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', JSON.stringify(values));
                this.props.changeIndex(e)
                /*const {dispatch} = this.props
                 dispatch(updateProfile(values, this.success))*/
            }
        });
        e.preventDefault();
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
                display: this.props.second == true ? 'block' : 'none'
            }}>
                <Form horizontal>
                  {
                      this.props.getsProfile.base_profile.investor_type == 99 ?
                          <BasicInfoH {...this.props.getsProfile} getFieldDecorator={this.props.form}
                                      disabledDate={this.disabledDate} expire_date={this.expire_date} />
                          :
                          <BasicInfoUC {...this.props.getsProfile} getFieldDecorator={this.props.form} />

                  }

                    {
                        this.props.getsProfile.base_profile.investor_type == 99 ?
                            <div>
                        <Basicpassport {...this.props.getsProfile}
                                       test={{
                                           type: '护照上传',
                                           explain: '请上传您的护照信息页照片或扫面文件',
                                           notice: '如果您的护照证件(例如:旧版中国护照) 不包含签名部分,请将证件置于白纸之上,并于证件下方签名,拍照或扫描上传。证件必须为原件, 不能为复印件。',
                                           certificate: true,
                                           typeNumber: '护照号',
                                           numberfield: 'passport_number',
                                           validityfield: 'passport_expire_date',
                                           urlfield: 'passport_url'
                                       }}
                                       getFieldDecorator={this.props.form} />
                        <Basicpassport {...this.props.getsProfile}
                                       test={{
                                           type: '身份证上传',
                                           explain: '如您所在的国家为您发行了身份证，请在此处上传。如没有，可不必上传。',
                                           notice: '',
                                           certificate: false,
                                           typeNumber: '身份证号',
                                           numberfield: 'id_card_number',
                                           validityfield: 'id_card_expire_date',
                                           urlfield: 'id_card_url'
                                       }}
                                       getFieldDecorator={this.props.form} />
                      </div>
                            :
                            <Basicpassport {...this.props.getsProfile}
                                           test={{
                                               type: '护照上传',
                                               explain: '请上传您的护照信息页照片或扫面文件',
                                               notice: '如果您的护照证件(例如:旧版中国护照) 不包含签名部分,请将证件置于白纸之上,并于证件下方签名,拍照或扫描上传。证件必须为原件, 不能为复印件。',
                                               certificate: true,
                                               typeNumber: '护照号',
                                               numberfield: 'passport_number',
                                               validityfield: 'passport_expire_date',
                                               urlfield: 'passport_url'
                                           }}
                                           getFieldDecorator={this.props.form} />
                    }


                    <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
            <Col span={3} offset={6}>
              <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#ffffff',
                  color: '#223976',
                  fontSize: '18px'
              }} type="primary" name="first" onClick={this.props.changeIndex} size="large">上一步</Button>
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
                }} type="primary" htmlType="submit" name="third" onClick={this.handleSubmit.bind(this)}
                        size="large">下一步</Button>
              </FormItem>
            </Col>
          </Row>
                </Form>
            </div>
        );
    }
}
BasicInformation = Form.create({
    onFieldsChange(props, changedFields) {
        for (let i in changedFields) {
            let key = changedFields[i].name
            let val = changedFields[i].value
            if (val != undefined && val != '' && val != null) {
                if (key == 'date_of_birth' || key == 'passport_expire_date') {
                    let val = changedFields[i].value.format('YYYY-MM-DD')
                    props.dispatch(saveFields(key, val));
                } else {
                    props.dispatch(saveFields(key, val));
                }
            }

        }
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


export default connect(mapStateToProps)(BasicInformation);

