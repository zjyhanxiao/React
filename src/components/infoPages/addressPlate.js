import React from 'react';
import {Modal, Button, Row, Col} from 'antd';
import moment from 'moment'
import { is, fromJS} from 'immutable';
import {updateProfile, getState, getCity, getCounty, changeAddressType} from '../../Redux/actions/index'
import AddressProof from '../../view/AddressProof'


class AddressPlate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            third: true,
            is_single: true,
            modelKey: 1,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(JSON.stringify(nextState))
        return !is(fromJS(this.props.getsProfile.base_profile), fromJS(nextProps.getsProfile.base_profile)) || !is(fromJS(this.state),fromJS(nextState))
    }

    showModal = () => {

        if (this.props.getsProfile.base_profile.investor_type == 1) {
            const {dispatch} = this.props
            dispatch(getState({country: this.props.getsProfile.base_profile.address_cn.country}))
            dispatch(getCity({
                country: this.props.getsProfile.base_profile.address_cn.country,
                region: this.props.getsProfile.base_profile.address_cn.region
            }))

            dispatch(getCounty({
                country: this.props.getsProfile.base_profile.address_cn.country,
                region: this.props.getsProfile.base_profile.address_cn.region,
                city: this.props.getsProfile.base_profile.address_cn.city
            }))
        }
        if (this.props.getsProfile.base_profile.investor_type == 2) {
            const {dispatch} = this.props
            dispatch(getState({country: this.props.getsProfile.base_profile.address_non_cn.country}))
            if (this.props.getsProfile.base_profile.bill_url != null && this.props.getsProfile.base_profile.bill_url != '') {
                dispatch(changeAddressType('bill'))
            } else {
                dispatch(changeAddressType('drive'))
            }
        }
        if (this.props.getsProfile.base_profile.investor_type == 99) {
            const {dispatch} = this.props
            dispatch(getState({country: this.props.getsProfile.base_profile.address_non_cn.country}))
        }
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
        console.log(e);
        this.setState({
            visible: false,
            modelKey: this.state.modelKey + 1
        });

    }

    render() {
        const data = this.props.getsProfile.base_profile
        return (
            <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>

              <Row style={{paddingTop: '30px'}}>
                <Col span={12} offset={2}>
                  <p style={{fontWeight: '900', fontSize: '16px'}}>地址&nbsp;
                  </p>
                </Col>
                <Col span={1} offset={7}>
                  <a style={{marginBottom: '-5px', color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>修改</a>
                </Col>
              </Row>




    <Modal title="" visible={this.state.visible} key={'address' + this.state.modelKey}
           closable={false} footer={''} width={900}>
      <AddressProof {...this.state} handleCancel={this.handleCancel} />
    </Modal>


        <Row style={{margin: '15px 0',}}>
          <Col span={20} offset={2}>
            <p style={{width: '100%', height: '1px', background: '#cccccc'}}></p>
          </Col>
        </Row>
                {data && data.address_type == 'CN' ?
                    <Row style={{marginTop: '5px'}}>
                    <Col span={20} offset={2}><p>
                      {data.address_cn.region} {data.address_cn.city} {data.address_cn.district}
                    </p></Col>
                    <Col span={20} offset={2}><p>
                      {data.address_cn.detail}
                    </p></Col>
                    <Col span={20} offset={2}><p>
                      {data.address_cn.postal_code}
                    </p></Col>
                  </Row>

                    :
                    data && data.address_type == 'NON_CN' ?
                        <Row style={{marginTop: '5px'}}>
                    <Col span={20} offset={2}><p>
                      {data.address_non_cn.line1}
                    </p></Col>
                    <Col span={20} offset={2}><p>
                      {data.address_non_cn.line2 || ''}
                    </p></Col>
                    <Col span={20} offset={2}><p>
                      {data.address_non_cn.city}, {data.address_non_cn.region} {data.address_non_cn.postal_code}
                    </p></Col>
                    <Col span={20} offset={2}><p>
                      {data.address_non_cn.country}
                    </p></Col>
                  </Row>

                        :
                        ''
                }
                {data && data.investor_type == 1 && data.id_card_expired
                    ?
                    <Row style={{}}>
                      <Col span={20} offset={2}><p style={{color: '#fe593e'}}>地址证明已经失效，请重新<a
                          style={{color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>上传</a></p></Col>
                    </Row>
                    :
                    data && data.investor_type == 2 && (data.bill_expired || data.driving_license_expired) ?
                        <Row style={{}}>
                          <Col span={20} offset={2}><p style={{color: '#fe593e'}}>地址证明已经失效，请重新<a
                              style={{color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>上传</a></p></Col>
                        </Row>
                        :
                        data && data.investor_type == 99 && data.bill_expired
                            ?
                            <Row style={{}}>
                              <Col span={20} offset={2}><p style={{color: '#fe593e'}}>地址证明已经失效，请重新<a
                                  style={{color: '#159bd6', cursor: 'pointer'}}
                                  onClick={this.showModal}>上传</a></p></Col>
                            </Row>
                            :
                            ''
                }

      </div>
        );
    }
}

AddressPlate.defaultProps = {};

export default AddressPlate;
