/**
 * Created by robot on 2016/12/23.
 */
import 'antd/dist/antd.css';
require('../basic/BasicInfo.css');

import React from 'react';
import {Form,Row,Col, Input, Button, DatePicker} from 'antd';
import AddressChina from './AddressChina';
import AddressOther from './AddressOther';
import AddressProve from './AddressProve';
import AddressPublic from './AddressPublic';


const FormItem = Form.Item;


class Address extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {

    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };


    return (
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
        <Form horizontal>

          <AddressChina></AddressChina>



          <FormItem {...tailFormItemLayout}>
            <Row style={{paddingTop: '20px', paddingBottom: '40px',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
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
          </FormItem>
        </Form>
      </div>
    );
  }
}

Address.defaultProps = {};

export default Address;
