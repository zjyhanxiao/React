/**
 * Created by robot on 2016/12/26.
 */
import React from 'react';

import {Row, Col, Checkbox} from 'antd';



class ItemName extends React.Component {

  constructor() {
    super();
    this.state = {
      a:true,
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col>
            <div style={{fontWeight:'900',fontSize:'16px',}}>地址</div>
          </Col>
        </Row>


      </div>
    );
  }
}

ItemName.defaultProps = {};

export default ItemName;
