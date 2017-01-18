import React, {Component, PropTypes}from 'react';
import {Form, Row, Col, Button} from 'antd';
import {connect} from 'react-redux'
import moment from 'moment'
import {saveFields} from '../Redux/actions/index'
import BasicInfoUC from '../components/basic/BasicInfoUC'
import BasicInfoH from '../components/basic/BasicInfoH'
import Basicpassport from '../components/basic/Basicpassport'
const FormItem = Form.Item;

class BasicInformation extends React.Component {
    constructor(props) {
        super(props)
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
    changeSubmit(e){
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', JSON.stringify(values));
                this.props.handleCancel()
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
        let passport_number=this.props.getsProfile.base_profile.passport_number
        let passport_expire_date=this.props.getsProfile.base_profile.passport_expire_date
        let passport_url=this.props.getsProfile.base_profile.passport_url
        let id_card_number=this.props.getsProfile.base_profile.id_card_number
        let id_card_expire_date=this.props.getsProfile.base_profile.id_card_expire_date
        let id_card_url=this.props.getsProfile.base_profile.id_card_url

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
                          <BasicInfoH {...this.props} getFieldDecorator={this.props.form}
                                      disabledDate={this.disabledDate} expire_date={this.expire_date} />
                          :
                          <BasicInfoUC {...this.props}  getFieldDecorator={this.props.form} />

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
                                           urlfield: 'passport_url',
                                         numberfieldDefault: passport_number||'',
                                         validityfieldDefault:passport_expire_date||'',
                                         urlfieldDefault:passport_url||'',

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
                                           urlfield: 'id_card_url',
                                         numberfieldDefault: id_card_number||'',
                                         validityfieldDefault:id_card_expire_date||'',
                                         urlfieldDefault:id_card_url||'',
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
                                               urlfield: 'passport_url',
                                               numberfieldDefault: passport_number||'',
                                               validityfieldDefault:passport_expire_date||'',
                                               urlfieldDefault:passport_url||'',
                                           }}
                                           getFieldDecorator={this.props.form} />
                    }






                  {this.props.getsProfile.Complete == true?

                      <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
                        <Col span={3} offset={6}>
                          <Button style={{
                            width: '120px',
                            height: '50px',
                            borderRadius: '30px',
                            background: '#ffffff',
                            color: '#223976',
                            fontSize: '18px'
                          }} type="primary" name="first" onClick={this.props.handleCancel} size="large">取消</Button>
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
                            }} type="primary" htmlType="submit" name="third" onClick={this.changeSubmit.bind(this)}
                                    size="large">确定</Button>
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

                    }







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
                if (key == 'passport_expire_date' || key == 'id_card_expire_date') {
                    let val = changedFields[i].value.format('YYYY-MM-DD')
                    props.dispatch(saveFields(key, val));
                }
                else if (
                    key == 'country_of_birth' ||
                    key == 'country_of_tax_residency' ||
                    key == 'foreign_tax_number' ||
                    key == 'industry' ||
                    key == 'nationality' ||
                    key == 'occupation' ||
                    key == 'source_of_capital' ||
                    key == 'ssn'
                ) {
                    props.dispatch(saveFields('base_info', {...props.getsProfile.base_profile.base_info, [key]: val}));
                } else if (key == 'date_of_birth') {
                    let val = changedFields[i].value.format('YYYY-MM-DD')
                    props.dispatch(saveFields('base_info', {...props.getsProfile.base_profile.base_info, [key]: val}));
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

