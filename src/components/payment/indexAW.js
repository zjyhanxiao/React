/**
 * Created by robot on 2016/12/27.
 */
require('components/payment/indexAWC.css');

import React from 'react';
import {Row, Col,Tabs,Button} from 'antd';
import Wire from './Wire'
import ACH from './ACH'
import Check from './Check'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class IndexAW extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{},
      first:true,
      second:false,
      current:'first'
    }
  }

  handleClick(event){
    event.preventDefault();
    console.log(event.target.getAttribute('name'))
    this.setState({
      first:false,
      second:false,
      third:false,
      current:'first'
    })
    // console.log(event.target.getAttribute('name'))
    // console.log(event.target)
    // event.target.nextSibling.className = '';
    // event.target.previousSibling.className = '';
    event.target.className = 'active'
    if(event.target.getAttribute('name') == 'first'){
      event.target.nextSibling.className = '';
    }else if(event.target.getAttribute('name') == 'second'){
      event.target.previousSibling.className = '';
    }
    this.setState({
      [event.target.getAttribute('name')]:true,
      current:event.target.getAttribute('name')
    })
  }

  render() {
    return (
      <div style={{width:'900PX',margin:'50px auto',textAlign:'center'}}>
        {/*<Tabs onChange={callback} type="card" animated={false}>*/}
          {/*<TabPane tab="自动扣款 / ACH" key="1"><ACH></ACH></TabPane>*/}
          {/*<TabPane tab="银行电汇 / Wire" key="2"><Wire></Wire></TabPane>*/}
        {/*</Tabs>*/}

        <div style={{overflow:'hidden'}}>
          <div className="active" style={{width:'440px',height:'60px',background:'#ffffff',float:'left',textAlign:'center',lineHeight:'60px',fontSize:'18px',color:'#c9c9c9',border:'3px solid #ffffff',borderRadius:'4px 4px 0 0'}} name="first" onClick={this.handleClick.bind(this)}>自动扣款 / ACH</div>
          <div style={{width:'440px',height:'60px',background:'#ffffff',float:'left',marginLeft:'20px',textAlign:'center',lineHeight:'60px',fontSize:'18px',color:'#c9c9c9',border:'3px solid #ffffff',borderRadius:'4px 4px 0 0',boxShadow: '0px 5px 0px #888888'}} name="second" onClick={this.handleClick.bind(this)}>银行电汇 / Wrie</div>
        </div>

        <div style={{background:'#ffffff'}}>
          <div style={{display:this.state.first==true?'block':'none'}}><ACH></ACH></div>
          <div style={{display:this.state.second==true?'block':'none'}}><Wire></Wire></div>
        </div>



        <div style={{width:'100%',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
          <Row style={{paddingTop: '50px', paddingBottom: '40px'}}>
            <Col span={8} offset={8}>
              <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                background: '#223976',
                color: '#fff',
                fontSize: '18px'
              }} type="primary" htmlType="submit" size="large">下一步</Button>
            </Col>
          </Row>
        </div>
        <p style={{width: '100%', textAlign:'center'}}>如有疑问，请邮件联系invest@meixinfinance.com。</p>

      </div>

    );
  }
}

IndexAW.defaultProps = {};

export default IndexAW;
