import React from 'react';
import {Modal, Button, Row, Col} from 'antd';
import {updateProfile} from '../../Redux/actions/index'
import BasicInformation from '../../view/BasicInformation'


class BasicPlate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            huzhao: false,
            shenfenzheng: false,
            touziren: true,
            touziren1: false,
            second: true,
            is_single:true
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
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
      });
    }

    render() {
        const data=this.props.getsProfile.base_profile
        return (
            <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>

          <div>
            <Row style={{paddingTop: '30px'}}>
              <Col span={12} offset={2}>
                <p style={{fontWeight: '900', fontSize: '16px'}}>基本信息&nbsp;&nbsp;<span style={{fontWeight: '100', fontSize: '12px'}}>（
                      {data!=undefined&&data.first_name!=undefined?data.first_name:''} {data!=undefined&&data.last_name!=undefined?data.last_name:''}
                      , {data!=undefined&&data.investor_type!=undefined?data.investor_type == 1 ? '非美国-中国大陆投资人' : '':''}{data!=undefined&&data.investor_type!=undefined?data.investor_type == 2 ? '美国投资人' : '':''}{data!=undefined&&data.investor_type!=undefined?data.investor_type == 99 ? '非美国-其他国家 / 港澳台地区投资人' : '':''}
                      ）</span>
                </p>
              </Col>
              <Col span={1} offset={7}>
                <a style={{marginBottom: '-5px', color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>修改</a>
              </Col>
            </Row>
      <Modal title="" visible={this.state.visible}
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
              <Col span={7}><p>{data!=undefined&&data.base_info.date_of_birth!=undefined?data.base_info.date_of_birth:''}</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>出生国家</span></Col>
              <Col span={6}><p>{data!=undefined&&data.base_info.country_of_birth!=undefined?data.base_info.country_of_birth:''}</p></Col>
            </Row>

              {
                  data!=undefined&&data.investor_type!=undefined&&data.investor_type == 2 ?
                      <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>SSN</span></Col>
                  <Col span={7}><p>{data!=undefined&&data.base_info.ssn!=undefined?data.base_info.ssn:''}</p></Col>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>国籍</span></Col>
                  <Col span={6}><p>{data!=undefined&&data.base_info.nationality!=undefined?data.base_info.nationality:''}</p></Col>
                </Row>
                      :
                      ''
              }

              {
                  data!=undefined&&data.investor_type!=undefined&&data.investor_type == 99 ?
                      <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>国籍</span></Col>
                  <Col span={7}><p>{data!=undefined&&data.base_info.nationality!=undefined?data.base_info.nationality:''}</p></Col>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>资金来源</span></Col>
                  <Col span={6}><p>{data!=undefined&&data.base_info.source_of_capital!=undefined?data.base_info.source_of_capital:''}</p></Col>
                </Row>
                      :
                      ''
              }


              <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>行业</span></Col>
              <Col span={7}><p>{data!=undefined&&data.base_info.industry!=undefined?data.base_info.industry:''}</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>职业</span></Col>
              <Col span={6}><p>{data!=undefined&&data.base_info.occupation!=undefined?data.base_info.occupation:''}</p></Col>
            </Row>

              {
                  data!=undefined&&data.investor_type!=undefined&&data.investor_type == 1 ?
                      <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>资金来源</span></Col>
                  <Col span={7}><p>{data!=undefined&&data.base_info.source_of_capital!=undefined?data.base_info.source_of_capital:''}</p></Col>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}></span></Col>
                  <Col span={6}><p></p></Col>
                </Row>
                      :
                      ''
              }

              {
                  data!=undefined&&data.investor_type!=undefined&&data.investor_type == 99 ?
                      <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>纳税国</span></Col>
                  <Col span={7}><p>{data!=undefined&&data.base_info.country_of_tax_residency!=undefined?data.base_info.country_of_tax_residency:''}</p></Col>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>纳税号</span></Col>
                  <Col span={6}><p>{data!=undefined&&data.base_info.foreign_tax_number!=undefined?data.base_info.foreign_tax_number:''}</p></Col>
                </Row>
                      :
                      ''
              }


              <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>护照号</span></Col>
              <Col span={7}><p>{data!=undefined&&data.passport_number!=undefined?data.passport_number:''}</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>有效期</span></Col>
              <Col span={6}><p>{data!=undefined&&data.passport_expire_date!=undefined?data.passport_expire_date:''}</p></Col>
            </Row>
              {this.state.huzhao ?
                  <Row style={{}}>
                    <Col span={20} offset={2}><p style={{color: '#fe593e'}}>护照证件已经失效，请重新<a
                        style={{color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>上传</a></p></Col>
                  </Row>
                  :
                  ''
              }


              {
                  data!=undefined&&data.investor_type!=undefined&&data.investor_type == 99 ?
                      <div>
                        <Row style={{marginTop: '5px'}}>
                          <Col span={3} offset={2}><span style={{fontWeight: '600'}}>身份证号</span></Col>
                          <Col span={7}><p>{data!=undefined&&data.id_card_number!=undefined?data.id_card_number: ''}</p></Col>
                          <Col span={3} offset={2}><span style={{fontWeight: '600'}}>有效期</span></Col>
                          <Col span={6}><p>{data!=undefined&&data.id_card_expire_date!=undefined?data.id_card_expire_date: ''}</p></Col>
                        </Row>
                                {this.state.shenfenzheng ?
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
