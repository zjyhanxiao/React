/**
 * Created by robot on 2016/12/26.
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

class IndexAWC extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{},
      first:true,
      second:false,
      third:false,
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
      event.target.nextSibling.nextSibling.className = '';
    }else if(event.target.getAttribute('name') == 'second'){
      event.target.previousSibling.className = '';
      event.target.nextSibling.className = '';
    }else if (event.target.getAttribute('name') == 'third'){
      event.target.previousSibling.className = '';
      event.target.previousSibling.previousSibling.className = '';
    }
    this.setState({
      [event.target.getAttribute('name')]:true,
      current:event.target.getAttribute('name')
    })
  }

  render() {
    return (
      <div  style={{width:'900PX',margin:'50px auto',textAlign:'center'}}>
        {/*<Tabs onChange={callback} type="card" animated={false}>*/}
          {/*<TabPane tab="自动扣款 / ACH" key="1"><ACH></ACH></TabPane>*/}
          {/*<TabPane tab="银行电汇 / Wire" key="2"><Wire></Wire></TabPane>*/}
          {/*<TabPane tab="支票 / Check" key="3"><Check></Check></TabPane>*/}
        {/*</Tabs>*/}

        <div style={{overflow:'hidden'}}>
          <div className="active" style={{width:'290px',height:'60px',background:'#ffffff',float:'left',textAlign:'center',lineHeight:'60px',fontSize:'18px',color:'#c9c9c9',border:'3px solid #ffffff',borderRadius:'4px 4px 0 0'}} name="first" onClick={this.handleClick.bind(this)}>自动扣款 / ACH</div>
          <div style={{width:'290px',height:'60px',background:'#ffffff',float:'left',marginLeft:'15px',textAlign:'center',lineHeight:'60px',fontSize:'18px',color:'#c9c9c9',border:'3px solid #ffffff',borderRadius:'4px 4px 0 0',boxShadow: '0px 5px 0px #888888'}} name="second" onClick={this.handleClick.bind(this)}>银行电汇 / Wrie</div>
          <div style={{width:'290px',height:'60px',background:'#ffffff',float:'left',marginLeft:'15px',textAlign:'center',lineHeight:'60px',fontSize:'18px',color:'#c9c9c9',border:'3px solid #ffffff',borderRadius:'4px 4px 0 0'}} name="third" onClick={this.handleClick.bind(this)}>支票 / Check</div>
        </div>

        <div style={{background:'#ffffff'}}>
          <div style={{display:this.state.first==true?'block':'none'}}><ACH></ACH></div>
          <div style={{display:this.state.second==true?'block':'none'}}><Wire></Wire></div>
          <div style={{display:this.state.third==true?'block':'none'}}><Check></Check></div>
        </div>




      </div>

    );
  }
}

IndexAWC.defaultProps = {};

export default IndexAWC;
