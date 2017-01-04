/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';
import {Modal, Button, Row, Col} from 'antd';
import BasicInformation from '../../view/BasicInformation'



class BasicPlate extends React.Component {

  constructor() {
    super();
    this.state = {
      huzhao:false,
      shenfenzheng:false,
      touziren:true,
      touziren1:false,
      profile:{}
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  render() {
    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>
        {this.state.touziren ?
          <div>
            <Row style={{paddingTop: '30px'}}>
              <Col span={12} offset={2}>
                <p style={{fontWeight: '900', fontSize: '16px'}}>基本信息
                  <span style={{fontWeight: '100', fontSize: '12px'}}>（Yuechen Zhao,非美国-其他国家 / 港澳台地区投资人）</span>
                </p>
              </Col>
              <Col span={1} offset={7}>
                <a style={{marginBottom: '-5px', color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>修改</a>
              </Col>
            </Row>
      <Modal title="" visible={this.state.visible}
             onOk={this.handleOk} onCancel={this.handleCancel} closable={false} footer={''} width={900}>
        <BasicInformation/>
      </Modal>




            <Row style={{margin: '15px 0',}}>
              <Col span={20} offset={2}>
                <p style={{width: '100%', height: '1px', background: '#cccccc'}}></p>
              </Col>
            </Row>

            <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>出生日期</span></Col>
              <Col span={7}><p>Yue cheng Zhao</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>出生国家</span></Col>
              <Col span={6}><p>03/04/2012</p></Col>
            </Row>
            <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>国籍</span></Col>
              <Col span={7}><p>Yue cheng Zhao</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>资金来源</span></Col>
              <Col span={6}><p>03/04/2012</p></Col>
            </Row>
            <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>行业</span></Col>
              <Col span={7}><p>Yue cheng Zhao</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>职业</span></Col>
              <Col span={6}><p>03/04/2012</p></Col>
            </Row>
            <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>纳税国</span></Col>
              <Col span={7}><p>Yue cheng Zhao</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>纳税号</span></Col>
              <Col span={6}><p>03/04/2012</p></Col>
            </Row>
            <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>护照号</span></Col>
              <Col span={7}><p>Yue cheng Zhao</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>有效期</span></Col>
              <Col span={6}><p>03/04/2012</p></Col>
            </Row>
            {this.state.huzhao ?
              <Row style={{}}>
                <Col span={20} offset={2}><p style={{color: '#fe593e'}}>护照证件已经失效，请重新<a
                  style={{color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>上传</a></p></Col>

              </Row>

              : ''
            }

            <Row style={{marginTop: '5px'}}>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>身份证号</span></Col>
              <Col span={7}><p>Yue cheng Zhao</p></Col>
              <Col span={3} offset={2}><span style={{fontWeight: '600'}}>有效期</span></Col>
              <Col span={6}><p>03/04/2012</p></Col>
            </Row>
            {this.state.shenfenzheng ?
              <Row style={{}}>
                <Col span={20} offset={2}><p style={{color: '#fe593e'}}>护照证件已经失效，请重新<a
                  style={{color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>上传</a></p></Col>

              </Row>
              : ''
            }
          </div>
          :
          <div>
              <Row style={{marginTop: '5px'}}>
                <Col span={3} offset={2}><span style={{fontWeight: '600'}}>出生日期</span></Col>
                <Col span={7}><p>Yue cheng Zhao</p></Col>
                <Col span={3} offset={2}><span style={{fontWeight: '600'}}>出生国家</span></Col>
                <Col span={6}><p>03/04/2012</p></Col>
              </Row>

            {this.state.touziren1 ?
              <Row style={{marginTop: '5px'}}>
                <Col span={3} offset={2}><span style={{fontWeight: '600'}}>SSN</span></Col>
                <Col span={7}><p>Yue cheng Zhao</p></Col>
                <Col span={3} offset={2}><span style={{fontWeight: '600'}}>国籍</span></Col>
                <Col span={6}><p>03/04/2012</p></Col>
              </Row>
              :
              ''
            }




              <Row style={{marginTop: '5px'}}>
                <Col span={3} offset={2}><span style={{fontWeight: '600'}}>行业</span></Col>
                <Col span={7}><p>Yue cheng Zhao</p></Col>
                <Col span={3} offset={2}><span style={{fontWeight: '600'}}>职业</span></Col>
                <Col span={6}><p>03/04/2012</p></Col>
              </Row>


              {this.state.touziren1 ?
                ''
                :
                <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>资金来源</span></Col>
                  <Col span={7}><p>Yue cheng Zhao</p></Col>
                </Row>
              }
              <Row style={{marginTop: '5px'}}>
                <Col span={3} offset={2}><span style={{fontWeight: '600'}}>护照号</span></Col>
                <Col span={7}><p>Yue cheng Zhao</p></Col>
                <Col span={3} offset={2}><span style={{fontWeight: '600'}}>有效期</span></Col>
                <Col span={6}><p>03/04/2012</p></Col>
              </Row>
              {this.state.huzhao ?
                <Row style={{}}>
                  <Col span={20} offset={2}><p style={{color: '#fe593e'}}>护照证件已经失效，请重新<a
                  style={{color: '#159bd6', cursor: 'pointer'}} onClick={this.showModal}>上传</a></p></Col>

                </Row>
                : ''
              }
          </div>
        }


      </div>
    );
  }
}

BasicPlate.defaultProps = {};

export default BasicPlate;
