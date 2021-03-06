import React from 'react';
import {updateProfile} from '../../Redux/actions/index'
import {Modal, Button, Row, Col} from 'antd';
import ComplianceReview from '../../view/ComplianceReview'


class CompliancePlate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        fifth:true,
        is_single:true,
        modelKey:1
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
    this.setState({
      visible: false,
        modelKey:this.state.modelKey+1
    });
  }

  render() {
    const data=this.props.getsProfile.base_profile
    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>
        <Row style={{paddingTop:'30px'}}>
          <Col span={6} offset={2}>
            <p style={{fontWeight:'900',fontSize:'16px'}}>美国投资人合规身份验证</p>
          </Col>
          <Col span={1} offset={13}>
            <span style={{marginBottom:'-5px',color:'#159bd6',cursor:'pointer'}} onClick={this.showModal}>修改</span>
          </Col>
        </Row>
    <Modal title="" visible={this.state.visible} key={'compliance'+this.state.modelKey}
           closable={false} footer={''} width={900}>
      <ComplianceReview {...this.state} handleCancel={this.handleCancel}/>
    </Modal>

        <Row style={{margin:'15px 0',}}>
          <Col span={20} offset={2}>
            <p style={{width:'100%',height:'1px',background:'#cccccc'}}></p>
          </Col>
        </Row>
          {data&&data.accreditation.type=='INCOME'?
              <Row style={{margin:'10px 0',}}>
                  <Col span={20} offset={2}>
                    <p style={{width:'100%',color:'#555'}}>您选择了收入审查
              {data&&data.accreditation.with_spouse==true?'，您填写的配偶信息如下：':''}
              </p>
                  </Col>
              </Row>
          :
          data&&data.accreditation.type=='NET_WORTH'?
              <Row style={{margin:'10px 0',}}>
                  <Col span={20} offset={2}>
                    <p style={{width:'100%',color:'#555'}}>您选择了净值审查
                    {data&&data.accreditation.with_spouse==true?'，您填写的配偶信息如下：':''}
                  </p>
                  </Col>
              </Row>
          :
              ''
          }
          {data && data.accreditation.with_spouse == true ?
              <div>
                  <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>姓名</span></Col>
                  <Col
                      span={17}><p>{data && data.accreditation.spouse_first_name != null? data.accreditation.spouse_first_name + ' ' + data.accreditation.spouse_last_name : ''}</p></Col>
                  </Row>
                  <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>电话</span></Col>
                  <Col
                      span={17}><p>{data && data.accreditation.spouse_phone != null ? data.accreditation.spouse_phone : ''}</p></Col>
                  </Row>
                  <Row style={{marginTop: '5px'}}>
                  <Col span={3} offset={2}><span style={{fontWeight: '600'}}>邮箱</span></Col>
                  <Col
                      span={17}><p>{data && data.accreditation.spouse_email != null ? data.accreditation.spouse_email : ''}</p></Col>
                  </Row>
              </div>
          :
              ''
          }
      </div>
    );
  }
}

CompliancePlate.defaultProps = {};

export default CompliancePlate;
