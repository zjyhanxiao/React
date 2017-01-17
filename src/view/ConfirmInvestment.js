import React from 'react';
import {Row, Col, Button} from 'antd';
import cookie from 'react-cookie'
import {updateProfile, saveFields, updateSignature, createOrder,getPayment} from '../Redux/actions/index'

import ItemAmount from '../components/infoPages/ItemAmount';
import ItemName from '../components/infoPages/ItemName';
import Docs from '../components/infoPages/docs';
import Signature from '../components/signature/index';
import $ from 'jquery'


class ConfirmInvestment extends React.Component {

    constructor(props) {
        super(props)
    }



    signature(e) {

      let pro = this.props.getsProfile.base_profile
      if (
        pro.bank_non_us.middle_bank_address != null &&
        pro.bank_non_us.middle_bank_name != null &&
        pro.bank_non_us.middle_bank_swift_code != null
      ) {
        const {dispatch}=this.props
        dispatch(saveFields('bank_non_us', {
          ...props.getsProfile.base_profile.bank_non_us,
          'have_middlebank': 1
        }));
      }
        const {dispatch} = this.props
        dispatch(updateProfile(this.props.getsProfile.base_profile, this.success))

        let data = {}
        data.signature = this.props.getsProfile.base_profile.signature || '';
        data.spouseSignature = this.props.getsProfile.base_profile.spouse_signature || '';
        dispatch(updateSignature(data))

        this.props.changeP(e)
        // dispatch(createOrder(this.props, this.success))

    }

    // success(props) {
    //   console.log('1')
    //     const {dispatch} = props
    //     let data = {}
    //     console.log(this.props.getsProfile.Product.id)
    //     data.product_id = this.props.getsProfile.Product.id
    //     data.invest_amount = this.props.getsProfile.invest_amount
    //     data.mx_token=cookie.load('mx_token')||'7f23a1447d1093661b84972fbc3845aa'
    //     data.mx_secret=cookie.load('mx_secret')||'bf89a88d6fa2434a83de33d6a0cf3a51'
    //     dispatch(createOrder(data, this.success))
    // }

    render() {
        return (
            <div style={{overflow: 'hidden', display: this.props.two == true ? 'block' : 'none'}}>




        <div style={{width: '900px', margin: '0 auto'}}>
          <Docs {...this.props} />
        </div>




        <div style={{width: '900px', margin: '0 auto', background: '#ffffff'}}>
          <Row style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <Col span={20} offset={2}>

              <Signature id='signature' getSignature={this.signature} {...this.props}
                         mode={{
                             people: '投资人签名',
                             notice: '请注意：您的签名必须与已上传的证件上所提供的签名。'
                         }}
              />

              {this.props.getsProfile.base_profile!=undefined&&this.props.getsProfile.base_profile.accreditation.with_spouse!=undefined?
                <Signature id='spouse_signature' getSignature={this.signature} {...this.props}
                           mode={{
                             people: '配偶签名',
                             notice: '温馨提示：此处必须有您配偶亲自签名。'
                           }}
                />
                :
                ''
              }


            </Col>
          </Row>
        </div>

        <div style={{width: '900px', margin: '0 auto', textAlign: 'center', background: '#ffffff'}}>
          <Row style={{paddingTop: '50px', paddingBottom: '40px'}}>
            <Col span={8} offset={8}>
              <Button style={{
                  width: '120px',
                  height: '50px',
                  borderRadius: '30px',
                  background: '#223976',
                  color: '#fff',
                  fontSize: '18px'
              }} type="primary" htmlType="submit" name="three" onClick={this.signature.bind(this)}
                      size="large">确认订单</Button>
            </Col>
          </Row>
        </div>



      </div>
        );
    }
}

ConfirmInvestment.defaultProps = {};

export default ConfirmInvestment;


/*****
 <div style={{width:'920px',margin:'0 auto',position:'relative',border:'1px solid #eee',borderRadius:'3px'}}>
 <ItemName/>
 <div style={{position:'absolute',top:'30px',left:'60px'}}>
 <ItemAmount/>
 </div>
 </div>
 *****/
