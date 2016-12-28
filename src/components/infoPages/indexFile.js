/**
 * Created by robot on 2016/12/26.
 */
import 'antd/dist/antd.css';
require('../basic/BasicInfo.css');

import React from 'react';
import {Row,Col,Button} from 'antd';

import AmountShow from './amountShow';
import ItemAmount from './ItemAmount';
import ItemName from './ItemName';
import Docs from './docs';
import Signature from '../signature/index';



class FilePages extends React.Component {
  constructor() {
    super();
    this.state = {
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
        <div style={{width:'98%',margin:'0 auto',background:'#ffffff'}}>
          <Docs></Docs>
        </div>
        <div style={{width:'98%',margin:'0 auto',background:'#ffffff'}}>
          <Row style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <Col span={20} offset={2}>
              <Signature></Signature>
            </Col>
          </Row>
        </div>

        <div style={{width:'98%',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
          <Row style={{paddingTop: '50px', paddingBottom: '40px'}}>
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
      </div>
    );
  }
}

FilePages .defaultProps = {};

export default FilePages ;
