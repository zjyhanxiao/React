/**
 * Created by robot on 2016/12/21.
 */
import React from 'react';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>

        <div className="navbar" role="navigation" style={{overflow:'hidden',border:'1px solid #cccccc'}}>
          <div className="container" style={{paddingBottom: '0',padding:'10px 0', width:'96%',margin:'auto'}}>
            <div className="navbar-header" style={{display: 'inline'}}>
              <a id="logo" href="/"
                 className="navbar-brand"
                 style={{width:'250px',height:'50px',float:'left',background:'url(./images/logo.png) no-repeat',backgroundSize:'contain',marginLeft:'15px',lineHeight:'20px'}}
              >
              </a> <span className="logo-alpha" style={{fontSize: '12px', float: 'left'}}></span>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right nav_right_on_mobile" style={{marginRight: '-15px', float: 'right'}}>
                <li style={{float: 'left',lineHeight:'1.5',display:'block'}}><a href="/" style={{marginRight:'30px',fontSize:'16px',padding:'14px 0 0',color:'#454545',lineHeight:'20px',display:'inline-block'}}>首页</a></li>
                <li style={{float: 'left',lineHeight:'1.5',display:'block'}}><a href="/product_list.html" style={{marginRight:'30px',fontSize:'16px',padding:'14px 0 0',color:'#454545',lineHeight:'20px',display:'inline-block'}}>个人理财</a></li>
                <li style={{float: 'left',lineHeight:'1.5',display:'block'}}><a href="/alipay/companyAlipay.html" style={{marginRight:'30px',fontSize:'16px',padding:'14px 0 0',color:'#454545',lineHeight:'20px',display:'inline-block'}}>企业理财</a></li>
                <li style={{float: 'left',lineHeight:'1.5',display:'block'}}><a href="/house_list.html" style={{marginRight:'30px',fontSize:'16px',padding:'14px 0 0',color:'#454545',lineHeight:'20px',display:'inline-block'}}>海外房产</a></li>
                <li style={{float: 'left',lineHeight:'1.5',display:'block'}}><a href="/about.html" style={{marginRight:'30px',fontSize:'16px',padding:'14px 0 0',color:'#454545',lineHeight:'20px',display:'inline-block'}}>关于美信</a></li>
                <li style={{float: 'right',lineHeight:'1.5',display:'block'}}><a className="login_no_margin_right nav_login_button"
                                                style={{marginRight:'30px',marginTop:'8px',fontSize:'16px',padding:'3.5px 10px',color:'#454545',border:'1px solid #159bd6',lineHeight:'20px',display:'inline-block',borderRadius:'3px'}}
                                                href="/login.html">登录</a></li>
                <li style={{float: 'right',lineHeight:'1.5',display:'block'}}><a href="/signup.html"
                                                style={{marginRight:'10px',marginTop:'8px',fontSize:'16px',padding:'5px 12px',color:'#ffffff',backgroundColor:'#159bd6',lineHeight:'20px',display:'inline-block',borderRadius:'3px'}}
                                             className="nav_register_button">注册</a></li>

              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Navbar.defaultProps = {};

export default Navbar;
