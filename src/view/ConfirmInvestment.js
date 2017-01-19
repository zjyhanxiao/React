import React from 'react';
import {Row, Col, Button} from 'antd';

import {updateProfile} from '../Redux/actions/index'
import Docs from '../components/infoPages/docs';
import Signature from '../components/signature/index';



class ConfirmInvestment extends React.Component {

    constructor(props) {
        super(props)
    }


    signature(e) {
        const {dispatch}=this.props

        let data = {...this.props.getsProfile.base_profile}
        data.signature = this.props.getsProfile.base_profile.signature || null;
        data.spouse_signature = this.props.getsProfile.base_profile.spouse_signature || null;
        if(data.signature==null||(data.investor_type==2&&data.accreditation.with_spouse==true)){

        }
        dispatch(updateProfile(data, this.success))

        this.props.changeP(e)

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

                {this.props.getsProfile.base_profile != undefined && this.props.getsProfile.base_profile.accreditation.with_spouse ?
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
