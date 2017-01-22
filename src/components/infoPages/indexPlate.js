import React from 'react';
import {Row, Col, Button} from 'antd'

import AddressPlate from './addressPlate'
import BankPlate from './bankPlate'
import BasicPlate from './basicPlate'
import CompliancePlate from './compliancePlate'

import $ from 'jquery'

class IndexPlate extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e){
      if(this.props.getsProfile.invest_amount%this.props.getsProfile.Product.invest_par_value!=0){
        alert('投资金额必须为'+this.props.getsProfile.Product.invest_par_value+'的整数倍')
          return false
      }
      this.props.changeP(e)
  }



  render() {
    const data=this.props.getsProfile.base_profile
    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden',display:this.props.one==true?'block':'none'}}>
        <BasicPlate  {...this.props} />
        <AddressPlate  {...this.props} />
        <BankPlate  {...this.props} />


        {data!=undefined&&data.investor_type==2?
          <CompliancePlate  {...this.props} />
          :
          ''
        }

        <Row style={{
          paddingTop: '40px',
          paddingBottom: '40px',
          margin: '0 auto',
          textAlign: 'center',
          background: '#ffffff'}}>
          <Col span={8} offset={8}>
            <Button style={{
              width: '120px',
              height: '50px',
              borderRadius: '30px',
              background: '#223976',
              color: '#fff',
              fontSize: '18px'
            }} type="primary" htmlType="submit" name="two" onClick={this.handleClick.bind(this)} size="large">下一步</Button>
          </Col>
        </Row>

      </div>
    );
  }
}

IndexPlate.defaultProps = {};

export default IndexPlate;
