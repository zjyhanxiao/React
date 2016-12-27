/**
 * Created by robot on 2016/12/27.
 */
import React from 'react';
import { Modal, Button,Row ,Col } from 'antd';
import Basic from '../basic/index'

const IndexButton = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('Clicked OK');
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>

        <div style={{width:'100%',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
          <Row style={{paddingTop: '30px', paddingBottom: '40px'}}>
            <Col span={8} offset={8}>
              <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                color: '#159bd6',
                fontSize: '18px'
              }} type="ghost" onClick={this.showModal}>填写信息</Button>
            </Col>
          </Row>
        </div>

        <Modal title="" visible={this.state.visible}
               onOk={this.handleOk} onCancel={this.handleCancel} closable={false} footer={''} width={932}
        >
          <Basic></Basic>
        </Modal>

      </div>
    );
  },
});
IndexButton.defaultProps = {};

export default IndexButton;
