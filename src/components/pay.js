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
        <IndexW></IndexW>
      </div>
    );
  }
}

Pay.defaultProps = {};

export default Pay;
