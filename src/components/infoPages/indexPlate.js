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




  render() {
    const data=this.props.getsProfile.base_profile
    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden',display:this.props.one==true?'block':'none'}}>
        <BasicPlate  {...this.props} />
        <AddressPlate  {...this.props} />
        <BankPlate  {...this.props} />


        {data!=undefined&&data.accreditation.with_spouse!=undefined?
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
            }} type="primary" htmlType="submit" name="two" onClick={this.props.changeP} size="large">下一步</Button>
          </Col>
        </Row>

      </div>
    );
  }
}

IndexPlate.defaultProps = {};

export default IndexPlate;
