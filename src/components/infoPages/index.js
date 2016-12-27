/**
 * Created by robot on 2016/12/26.
 */
import 'antd/dist/antd.css';
require('../basic/BasicInfo.css');

import React from 'react';
import {Row,Col,Button} from 'antd';

import ItemAmount from './ItemAmount';
import ItemName from './ItemName';
import AddressPlate from './AddressPlate';
import BankPlate from './BankPlate';
import BasicPlate from './BasicPlate';
import CompliancePlate from './CompliancePlate';


class InfoPages extends React.Component {
  constructor() {
    super();
    this.state = {
      a:true,
      profile:{}
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    return (

      <div>
        <div style={{width:'100%',height:'235px',background:'#fafbfe',paddingTop:'1px',borderRadius:'5px'}}>
          <div style={{width:'98%',height:'220px',position:'relative',border:'1px solid #eee',margin:'1% 1%'}}>
            <ItemName></ItemName>
            <div style={{position:'absolute',top:'30px',left:'60px'}}>
              <ItemAmount></ItemAmount>
            </div>
          </div>
        </div>




          {this.state.a ?
            <div style={{width:'98%',margin:'0 auto'}}>
              <p style={{width:'100%',textAlign:'center',background:'#ffffff',padding:'40px 0',color:'#223976',fontSize:'16px'}}>你的信息不完善,请完善个人信息！</p>
              <div style={{width:'100%',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
                <Row style={{paddingTop: '30px', paddingBottom: '40px'}}>
                  <Col span={8} offset={8}>
                    <Button style={{
                    width: '120px',
                    height: '50px',
                    borderRadius: '30px',
                    background: '#223976',
                    color: '#fff',
                    fontSize: '18px'
                  }} type="primary" htmlType="submit" size="large">完善信息</Button>
                  </Col>
                </Row>
              </div>
            </div>

            :

            <div style={{width:'98%',margin:'0 auto'}}>
              <BasicPlate></BasicPlate>
              <AddressPlate></AddressPlate>
              <BankPlate></BankPlate>
              <CompliancePlate></CompliancePlate>
              <Row style={{paddingTop: '50px', paddingBottom: '40px',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
                <Col span={8} offset={8}>
                  <Button style={{
                    width: '120px',
                    height: '50px',
                    borderRadius: '30px',
                    background: '#223976',
                    color: '#fff',
                    fontSize: '18px'
                  }} type="primary" htmlType="submit" size="large">下一步</Button>
                </Col>
              </Row>
            </div>
          }

      </div>
    );
  }
}

InfoPages .defaultProps = {};

export default InfoPages ;
