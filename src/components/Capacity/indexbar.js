/**
 * Created by robot on 2017/1/3.
 */
import React from 'react';
import {Row, Col} from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class IndexBar extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{},
      type:2
    }
  }

  render() {
    return (
      <div style={{width: '900px', background: '#fff', overflow: 'hidden'}}>

        {this.state.type==1?

          <Row style={{background:'#223976'}}>
            <Col span={6} style={{ height:'60px',textAlign:'center',lineHeight:'60px',color:'#ffffff',fontsize:'18px',borderRight:'1px solid #ffffff',fontFamily:'宋体',boxSizing:'borderBox'}}>
              <div style={{ height:'100%',width:'100%',background:'#ffffff',color:'#223976'}}>
                身份确认
              </div>
            </Col>
            <Col span={6} style={{height:'60px',textAlign:'center',lineHeight:'60px',color:'#ffffff',fontsize:'18px',borderRight:'1px solid #ffffff',fontFamily:'宋体',boxSizing:'borderBox'}}>
              <div style={{ height:'100%',width:'100%'}}>
                基本信息
              </div>
            </Col>
            <Col span={6} style={{height:'60px',textAlign:'center',lineHeight:'60px',color:'#ffffff',fontsize:'18px',borderRight:'1px solid #ffffff',fontFamily:'宋体',boxSizing:'borderBox'}}>
              <div style={{ height:'100%',width:'100%'}}>
                地址证明
              </div>
            </Col>
            <Col span={6} style={{height:'60px',textAlign:'center',lineHeight:'60px',color:'#ffffff',fontsize:'18px',fontFamily:'宋体',boxSizing:'borderBox'}}>
              <div style={{ height:'100%',width:'100%'}}>
                银行信息
              </div>
            </Col>
          </Row>

          :

          <div style={{width:'100%',background:'#223976',overflow:'hidden'}}>
            <div style={{width:'20%',height:'60px',float:'left',textAlign:'center',lineHeight:'60px',color:'#ffffff',fontsize:'18px',borderRight:'1px solid #ffffff',fontFamily:'宋体',boxSizing:'borderBox'}}>
              <div style={{ height:'100%',width:'100%',background:'#ffffff',color:'#223976'}}>
                身份确认
              </div>
            </div>
            <div style={{width:'20%',height:'60px',float:'left',textAlign:'center',lineHeight:'60px',color:'#ffffff',fontsize:'18px',borderRight:'1px solid #ffffff',fontFamily:'宋体',boxSizing:'borderBox'}}>
              <div style={{ height:'100%',width:'100%'}}>
                基本信息
              </div>
            </div>
            <div style={{width:'20%',height:'60px',float:'left',textAlign:'center',lineHeight:'60px',color:'#ffffff',fontsize:'18px',borderRight:'1px solid #ffffff',fontFamily:'宋体',boxSizing:'borderBox'}}>
              <div style={{ height:'100%',width:'100%'}}>
                地址证明
              </div>
            </div>
            <div style={{width:'20%',height:'60px',float:'left',textAlign:'center',lineHeight:'60px',color:'#ffffff',fontsize:'18px',borderRight:'1px solid #ffffff',fontFamily:'宋体',boxSizing:'borderBox'}}>
              <div style={{ height:'100%',width:'100%'}}>
                银行信息
              </div>
            </div>
            <div style={{width:'20%',height:'60px',float:'left',textAlign:'center',lineHeight:'60px',color:'#ffffff',fontsize:'18px',fontFamily:'宋体',boxSizing:'borderBox'}}>
              <div style={{ height:'100%',width:'100%'}}>
                合规审查
              </div>
            </div>
          </div>

        }


      </div>
    );
  }
}

IndexBar.defaultProps = {};

export default IndexBar;
