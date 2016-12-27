/**
 * Created by robot on 2016/12/26.
 */
import React from 'react';
import IndexW from './payment/indexW'

class Pay extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width:'100%', background:'#ccc'}}>
        <p style={{fontSize:'20px',textAlign:'center',padding:'20px 0'}}>入金方式</p>
        <div style={{width:'1000px',margin:'0 auto'}}>
          <IndexW></IndexW>
        </div>
        <p style={{textAlign:'center',padding:'30px 0'}}>如有疑问，请邮件联系invest@meixinfinance.com。
        </p>
      </div>
    );
  }
}

Pay.defaultProps = {};

export default Pay;
