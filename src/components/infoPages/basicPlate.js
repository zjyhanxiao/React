import React from 'react';
import {Modal, Button, Row, Col} from 'antd';
import moment from 'moment'
import {updateProfile,getOccupation} from '../../Redux/actions/index'
import BasicInformation from '../../view/BasicInformation'


let id_card_expired = true, driving_license_expired = true, bill_expired = true, passport_expired = true
class BasicPlate extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            second:true,
            modelKey:1,
        }
    }

    showModal = () => {
        const {dispatch} = this.props
        dispatch(getOccupation({industry: this.props.getsProfile.base_profile.base_info.industry}))
        this.setState({
            visible: true
        });
    }
    handleOk = () => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
      this.setState({
        visible: false,
          modelKey:this.state.modelKey+1
      });
    }

    render() {
        const data=this.props.getsProfile.base_profile||null
        if (data && data.id_card_expire_date != '' && data.id_card_expire_date != null) {
            if (moment(data.id_card_expire_date).fromNow().split('ago').length > 1
            ) {
                id_card_expired = false
            } else {
                id_card_expired = true
            }
        }
        if (data && data.driving_license_expire_date != '' && data.driving_license_expire_date != null) {
            if (moment(data.driving_license_expire_date).fromNow().split('ago').length > 1) {
                driving_license_expired = false
            } else {
                driving_license_expired = true
            }
        }
        if (data && data.bill_expire_date != '' && data.bill_expire_date != null) {
            if (moment(moment(data.bill_expire_date).add(90, 'days').format('YYYY-MM-DD', 'en')).fromNow().split('ago').length > 1) {
                bill_expired = false
            } else {
                bill_expired = true
            }
        }
        if (data && data.passport_expire_date != '' && data.passport_expire_date != null) {
            if (moment(data.passport_expire_date).fromNow().split('ago').length > 1) {
                passport_expired = false
            } else {
                passport_expired = true
            }
        }
        return (
            <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>

          <div>
            <Row style={{paddingTop: '30px'}}>
              <Col span={12} offset={2}>
                <p style={{fontWeight: '900', fontSize: '16px'}}>基本信息&nbsp;&nbsp;<span style={{fontWeight: '300', fontSize: '12px'}}>（
                      {data&&data.first_name!=null?data.first_name:''} {data&&data.last_name!=null?data.last_name:''}
                      , {data&&data.investor_type!=null?data.investor_type == 1 ? '非美国-中国大陆投资人' : '':''}{data&&data.investor_type!=null?data.investor_type == 2 ? '美国投资人' : '':''}{data&&data.investor_type!=null?data.investor_type == 99 ? '非美国-其他国家 / 港澳台地区投资人' : '':''}
                      ）</span>
                </p>
              </Col>
              <Col span={1} offset={7}>
                <a style={{marginBottom: '-5px', color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>修改</a>
              </Col>
            </Row>
      <Modal title="" visible={this.state.visible} key={'basic'+this.state.modelKey}
             closable={false} footer={''} width={900}>
        <BasicInformation {...this.state} {...this.props} handleCancel={this.handleCancel} />
      </Modal>




            <Row style={{margin: '15px 0',}}>
              <Col span={20} offset={2}>
                <p style={{width: '100%', height: '1px', background: '#cccccc'}}></p>
              </Col>
            </Row>

            <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>出生日期</span></Col>
              <Col span={7}><p>{data&&data.base_info.date_of_birth!=null?data.base_info.date_of_birth:''}</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>出生国家</span></Col>
              <Col span={6}><p>{data&&data.base_info.country_of_birth!=null?data.base_info.country_of_birth:''}</p></Col>
            </Row>

              {
                  data&&data.investor_type!=null&&data.investor_type == 2 ?
                      <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>SSN</span></Col>
                  <Col span={7}><p>{data&&data.base_info.ssn!=null?data.base_info.ssn:''}</p></Col>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>国籍</span></Col>
                  <Col span={6}><p>{data&&data.base_info.nationality!=null?data.base_info.nationality:''}</p></Col>
                </Row>
                      :
                      ''
              }

              {
                  data&&data.investor_type!=null&&data.investor_type == 99 ?
                      <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>国籍</span></Col>
                  <Col span={7}><p>{data&&data.base_info.nationality!=null?data.base_info.nationality:''}</p></Col>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>资金来源</span></Col>
                  <Col span={6}><p>{data&&data.base_info.source_of_capital!=null?data.base_info.source_of_capital:''}</p></Col>
                </Row>
                      :
                      ''
              }


              <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>行业</span></Col>
              <Col span={7}><p>{data&&data.base_info.industry!=null?data.base_info.industry:''}</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>职业</span></Col>
              <Col span={6}><p>{data&&data.base_info.occupation!=null?data.base_info.occupation:''}</p></Col>
            </Row>

              {
                  data&&data.investor_type!=null&&data.investor_type == 1 ?
                      <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>资金来源</span></Col>
                  <Col span={7}><p>{data&&data.base_info.source_of_capital!=null?data.base_info.source_of_capital:''}</p></Col>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}></span></Col>
                  <Col span={6}><p></p></Col>
                </Row>
                      :
                      ''
              }

              {
                  data&&data.investor_type!=null&&data.investor_type == 99 ?
                      <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>纳税国</span></Col>
                  <Col span={7}><p>{data&&data.base_info.country_of_tax_residency!=null?data.base_info.country_of_tax_residency:''}</p></Col>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>纳税号</span></Col>
                  <Col span={6}><p>{data&&data.base_info.foreign_tax_number!=null?data.base_info.foreign_tax_number:''}</p></Col>
                </Row>
                      :
                      ''
              }


              <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>护照号</span></Col>
              <Col span={7}><p>{data&&data.passport_number!=null?data.passport_number:''}</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>有效期</span></Col>
              <Col span={6}><p>{data&&data.passport_expire_date!=null?data.passport_expire_date:''}</p></Col>
            </Row>
              {!passport_expired ?
                  <Row style={{}}>
                    <Col span={20} offset={2}><p style={{color: '#fe593e'}}>护照证件已经失效，请重新<a
                        style={{color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>上传</a></p></Col>
                  </Row>
                  :
                  ''
              }


              {
                  data&&data.investor_type!=null&&data.investor_type == 99 ?
                      <div>
                        <Row style={{marginTop: '5px'}}>
                          <Col span={3} offset={2}><span style={{fontWeight: '600'}}>身份证号</span></Col>
                          <Col span={7}><p>{data&&data.id_card_number!=null&&data.id_card_number!=''?data.id_card_number: ''}</p></Col>
                          <Col span={3} offset={2}><span style={{fontWeight: '600'}}>有效期</span></Col>
                          <Col span={6}><p>{data&&data.id_card_expire_date!=null?data.id_card_expire_date: ''}</p></Col>
                        </Row>
                                {!id_card_expired ?
                                    <Row style={{}}>
                                      <Col span={20} offset={2}><p style={{color: '#fe593e'}}>身份证证件已经失效，请重新<a
                                          style={{color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>上传</a></p></Col>

                                    </Row>
                                    : ''
                                }
                      </div>
                      :
                      ''
              }

          </div>




      </div>
        );
    }
}

BasicPlate.defaultProps = {};

export default BasicPlate;
