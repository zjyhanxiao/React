/**
 * Created by robot on 2016/12/28.
 */
import React from 'react';

import {Button,Icon} from 'antd';


class AmountShow extends React.Component {

  constructor() {
    super();
    this.state = {
      a:true,
      profile:{}
    }
  }

  render() {
    return (

      <div style={{width:'500px',height:'160px',border:'1px solid #cccccc',borderTop:'5px solid #4760a1',borderRadius:'5px',background:'#ffffff'}}>
        <div style={{width:'340px',height:'100px',margin:'10px auto',textAlign:'center'}}>

          <p style={{color:'#335095',textAlign:'center',lineHeight:'100px',fontSize:'18px'}}>投资金额  <span style={{color:'#ff6600',fontSize:'24px'}}>$</span> <span style={{color:'#ff6600',fontSize:'24px'}}>{this.props.getsProfile.invest_amount}</span></p>

        </div>

      </div>
    );
  }
}

AmountShow.defaultProps = {};

export default AmountShow;
