/**
 * Created by robot on 2016/12/26.
 */
import React from 'react';

import {Row, Col} from 'antd';
import ItemAmount from './ItemAmount';


class ItemName extends React.Component {

    constructor() {
        super();
        this.state = {
            a:true,
        }
    }

    render() {
        return (
            <div style={{width:'100%',height:'220px',background:'url(https://www.meixinfinance.com/vendor/img/building.jpg)'}}>
        <Row>
          <Col span={6} offset={16} style={{textAlign:'center',marginTop:'60px',color:'#223976'}}>
            <span style={{fontSize:'28px',color:'#223976'}}>{this.props.name}</span>
          </Col>
          <Col span={6} offset={16} style={{textAlign:'center',color:'#223976',marginTop:'10px'}} >
            预计年化收益: <span>{this.props.return_rate}%</span>
          </Col>
          <Col span={6} offset={16} style={{textAlign:'center',color:'#223976',marginTop:'10px'}} >
            投资期限: <span>{this.props.invest_term}月</span>
          </Col>
        </Row>
      </div>
        );
    }
}

ItemName.defaultProps = {};

export default ItemName;


