/**
 * Created by robot on 2016/12/19.
 */
import 'antd/dist/antd.min.css'
import React from 'react';
import {connect} from 'react-redux'
import {Row, Col, Button, Radio} from 'antd';

class BankFast extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{},
      size: '美国投资人'
    }
  }
  handleSizeChange = (e) => {
    this.setState({size: e.target.value});
    console.log(e.target.value)
  }

  render() {

    return (
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>

        <Radio.Group value={this.state.size} onChange={this.handleSizeChange}
                     style={{width: 860, background: '#fff', overflow: 'hidden',margin:'0 auto'}}>

          <Radio.Button value="美国投资人"
                        style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative'}}>

            <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
              <img style={{width:'100%',}} src="../images/bank-hua.png" alt=""/>
            </div>
            <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
              <p style={{lineHeight:'1.5'}}>中国银行-香港银行</p>
              <p style={{lineHeight:'1.5'}}>China Merchants Bank (HongKong Branch)</p>
            </div>

          </Radio.Button>
          <Radio.Button value="国投资人"
                        style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative'}}>

            <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
              <img style={{width:'100%',}} src="../images/bank-hua.png" alt=""/>
            </div>
            <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
              <p style={{lineHeight:'1.5'}}>中国银行-香港银行</p>
              <p style={{lineHeight:'1.5'}}>China Merchants Bank (HongKong Branch)</p>
            </div>

          </Radio.Button>
          <Radio.Button value="投资人"
                        style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative'}}>

            <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
              <img style={{width:'100%',}} src="../images/bank-hua.png" alt=""/>
            </div>
            <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
              <p style={{lineHeight:'1.5'}}>中国银行-香港银行</p>
              <p style={{lineHeight:'1.5'}}>China Merchants Bank (HongKong Branch)</p>
            </div>

          </Radio.Button>

        </Radio.Group>







        <ul style={{width: 860, background: '#fff', overflow: 'hidden',margin:'0 auto'}}>
          <li style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative',border:'1px solid #223976'}}>
            <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
              <img style={{width:'100%',}} src="../images/bank-hua.png" alt=""/>
            </div>
            <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
              <p style={{color:'#223976'}}>中国银行-香港银行</p>
              <p style={{color:'#223976'}}>China Merchants Bank (Hong
                Kong Branch)</p>
            </div>
          </li>
          <li style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative',border:'1px solid #cccccc'}}>
            <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
              <img style={{width:'100%',}} src="../images/bank-hua.png" alt=""/>
            </div>
            <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
              <p style={{color:'#223976'}}>中国银行-香港银行</p>
              <p style={{color:'#223976'}}>China Merchants Bank (Hong
                Kong Branch)</p>
            </div>
          </li>
          <li style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative',border:'1px solid #cccccc'}}>
            <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
              <img style={{width:'100%',}} src="../images/bank-xin.jpg" alt=""/>
            </div>
            <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
              <p style={{color:'#223976'}}>中国银行-香港银行</p>
              <p style={{color:'#223976'}}>China Merchants Bank (Hong
                Kong Branch)</p>
            </div>
          </li>
          <li style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative',border:'1px solid #cccccc'}}>
            <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
              <img style={{width:'100%',}} src="../images/bank-hua.png" alt=""/>
            </div>
            <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
              <p style={{color:'#223976'}}>中国银行-香港银行</p>
              <p style={{color:'#223976'}}>China Merchants Bank (Hong
                Kong Branch)</p>
            </div>
          </li>
        </ul>
        <Row style={{marginTop:'50px'}}>
          <Col span={4} offset={6}><Button style={{width:'100%',height:'45px',fontSize:'18px',borderRadius:'45px'}} type="ghost">取消</Button></Col>
          <Col span={4} offset={4}><Button style={{width:'100%',height:'45px',fontSize:'18px',borderRadius:'45px',background:'#223976'}} type="primary">确定</Button></Col>
        </Row>
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    getsProfile: state.getsProfile
  }
}
BankFast.defaultProps = {};
export default connect(mapStateToProps)(BankFast)

