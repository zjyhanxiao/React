import React from 'react';
import {Row, Col, Button} from 'antd';
import cookie from 'react-cookie'
import {updateProfile, saveFields, updateSignature, createOrder} from '../Redux/actions/index'

import ItemAmount from '../components/infoPages/ItemAmount';
import ItemName from '../components/infoPages/ItemName';
import Docs from '../components/infoPages/docs';
import Signature from '../components/signature/index';


class ConfirmInvestment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a: true,
            profile: {}
        }
    }

    signature(e) {
        this.props.changeP(e)
        let data = {}
        data.signature = this.props.getsProfile.base_profile.signature || '';
        data.spouseSignature = this.props.getsProfile.base_profile.spouse_signature || '';
        const {dispatch} = this.props
        dispatch(updateSignature(data, this.success))
        // dispatch(createOrder(this.props, this.success))
    }

    success() {
        const {dispatch} = this.props
        let data = {}
        data.product_id = this.props.getsProfile.Product.product_id
        data.invest_amount = this.props.getsProfile.invest_amount
        data.mx_token=cookie.load('mx_token')||'7f23a1447d1093661b84972fbc3845aa'
        data.mx_secret=cookie.load('mx_secret')||'bf89a88d6fa2434a83de33d6a0cf3a51'
        dispatch(createOrder(data, this.success))
    }

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
              <Signature id='spouse_signature' getSignature={this.signature} {...this.props}
                         mode={{
                             people: '配偶签名',
                             notice: '温馨提示：此处必须有您配偶亲自签名。'
                         }}
              />

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

                {this.state.a ?
                    ''
                    :
                    ''}

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
