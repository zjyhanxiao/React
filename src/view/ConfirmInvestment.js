import React from 'react';
import {Row,Col,Button} from 'antd';

import ItemAmount from '../components/infoPages/ItemAmount';
import ItemName from '../components/infoPages/ItemName';
import Docs from '../components/infoPages/docs';
import Signature from '../components/signature/index';



class ConfirmInvestment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      a:true,
      profile:{}
    }
  }


  render() {
    return (
      <div style={{overflow: 'hidden',display: this.props.two == true ? 'block' : 'none'}}>




        <div style={{width:'900px',margin:'0 auto'}}>
          <Docs/>
        </div>


        <div style={{width:'900px',margin:'0 auto',background:'#ffffff'}}>
          <Row style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <Col span={20} offset={2}>
              <Signature {...this.props} />
            </Col>
          </Row>
        </div>

        <div style={{width:'900px',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
          <Row style={{paddingTop: '50px', paddingBottom: '40px'}}>
            <Col span={8} offset={8}>
              <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                background: '#223976',
                color: '#fff',
                fontSize: '18px'
              }} type="primary" htmlType="submit" name="three" onClick={this.props.changeP} size="large">下一步</Button>
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
