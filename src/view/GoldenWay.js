import React from 'react';
import {connect} from 'react-redux'
import IndexAWC from '../components/payment/indexAWC'

class GoldenWay extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div style={{width: '100%', background: '#f4f4f4', overflow: 'hidden',display: this.props.three == true ? 'block' : 'none'}}>
        <p style={{width: '100%', textAlign:'center',color:'#159bd6',fontSize:'20px',margin:'50px 0'}}>选择入金方式</p>
        <IndexAWC changeP={this.props.changeP} {...this.props} />

        <p style={{width: '100%', textAlign:'center'}}>如有疑问，请邮件联系invest@meixinfinance.com。</p>

      </div>
    );
  }
}

GoldenWay.defaultProps = {};

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(GoldenWay)
