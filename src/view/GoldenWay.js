import React from 'react';
import IndexAWC from '../components/payment/indexAWC'
import IndexAW from '../components/payment/indexAW'
import IndexW from '../components/payment/indexW'

class GoldenWay extends React.Component {

  constructor() {
    super();
    this.state = {
      a:true,
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width: '100%', background: '#ccc', overflow: 'hidden'}}>
        <p style={{width: '100%', textAlign:'center',color:'#159bd6',fontSize:'20px',margin:'50px 0'}}>选择入金方式</p>
        <IndexAWC/>
        <IndexW/>
        <IndexAW/>
        {this.state.a ?
          ''
          :
          ''}

      </div>
    );
  }
}

GoldenWay.defaultProps = {};

export default GoldenWay;
