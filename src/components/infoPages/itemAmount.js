/**
 * Created by robot on 2016/12/26.
 */
import React from 'react';

import {Button, Icon} from 'antd';


class ItemAmount extends React.Component {

  constructor() {
    super();
    this.state = {
      a:true,
      profile:{}
    }
  }
  onChange(e) {
  console.log('changed', e.target.value);
  }





  render() {
    return (
              <div style={{width:'500px',height:'160px',border:'1px solid #cccccc',borderTop:'5px solid #4760a1',borderRadius:'5px',background:'#ffffff'}}>
                <div style={{width:'340px',height:'100px',margin:'10px auto',textAlign:'center'}}>
                  <p style={{color:'#4760a1',fontSize:'18px'}}>投资金额</p>

                  {/*<div style={{marginTop:'10px',color:'#ff6600',fontSize:'20px'}}>*/}
                    {/*$<span style={{width:'200px',height:'37px'}}>1234567</span>*/}
                  {/*</div>*/}
                  {/*<div style={{color:'#159bd6',fontSize:'16px'}}>投资确认</div>*/}

                  <div style={{margin:'10px 0'}}>
                    <Button type="ghost" shape="circle" icon="minus" style={{width:'30px',height:'30px',border:'1px solid #4760a1',color:'#4760a1',fontWeight:'900',marginRight:'10px'}} />
                    <span style={{display:'inline-block',width:'220px',height:'40px',color:'#ff6600',fontSize:'20px',border:'1px solid #cccccc',borderRadius:'5px'}}>
                      &nbsp;$<input type="number" defaultValue="10000" step="5000" min="10000" onChange={this.onChange} style={{display:'inline',width:'200px',height:'37px',fontSize:'20px',color:'#ff6600',border:'none',outline:'none',textAlign:'center'}} />
                    </span>
                    <Button type="ghost" shape="circle" icon="plus" style={{width:'30px',height:'30px',border:'1px solid #4760a1',color:'#4760a1',fontWeight:'900',marginLeft:'10px'}} />
                  </div>

                  <p style={{color:'#4760a1'}}>投资金额为5000美元的整数倍</p>

                </div>
                <div style={{borderTop:'1px dashed #4760a1',color:'#4760a1',lineHeight:'32px'}}>
                  <p style={{marginLeft:'10px',float:'left'}}>优惠福利：体验金$<span>1000</span></p>
                  <i style={{float:'right',marginRight:'10px',cursor:'pointer'}}>
                    <Icon type="question-circle-o"  style={{fontSize:'16px'}} />
                  </i>
                </div>
              </div>
    );
  }
}

ItemAmount.defaultProps = {};

export default ItemAmount;
