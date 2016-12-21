/**
 * Created by robot on 2016/12/21.
 */
import React from 'react';

class Topbar extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>

        <div className="page-top-bar" style={{backgroundColor:'#194661',color:'#fff',padding:'6px 6px 6px 3%',fontSize:'13px',fontWeight:'300'}}>联系我们：400-094-1580
          <a className="index-spirits top-weibo-logo"
             style={{width:'16px',height:'14px',display:'inline-block',marginLeft:'15px',background:'url(../images/index-spirits.png) no-repeat',backgroundPosition:'-169px -17px'}}
             href="http://weibo.com/meixingroup"
             target="_blank">
          </a>
          <a className="index-spirits top-wechat-logo "
             style={{width:'16px',height:'13px',display:'inline-block',marginLeft:'15px',background:'url(../images/index-spirits.png) no-repeat',backgroundPosition:'-169px 0'}}
             id="wechat-popover"
             data-toggle="popover">
          </a>
          <div className="top-float-right" style={{float:'right',paddingRight:'2%'}}>
            <a href="/newhelp.html" style={{color:'#fff',marginLeft:'20px',fontSize:'13px',fontWeight:'300'}}>新手指引</a>
            <a href="/safety.html" style={{color:'#fff',marginLeft:'20px',fontSize:'13px',fontWeight:'300'}}>安全保障</a>
            <a href="/faq.html" style={{color:'#fff',marginLeft:'20px',fontSize:'13px',fontWeight:'300'}}>帮助中心</a>
            <a href="//news.meixinfinance.com" target="_blank" style={{color:'#fff',marginLeft:'20px',fontSize:'13px',fontWeight:'300'}}>财经资讯</a>
            <a href="/about.html#05" style={{color:'#fff',marginLeft:'20px',fontSize:'13px',fontWeight:'300'}}>加入我们</a>
            <a href="/about.html#06" style={{color:'#fff',marginLeft:'20px',fontSize:'13px',fontWeight:'300'}}>联系我们</a>
          </div>
        </div>

      </div>
    );
  }
}

Topbar.defaultProps = {};

export default Topbar;


