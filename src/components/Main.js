import 'antd/dist/antd.min.css'
import React from 'react';
import { Row, Col,Button,Input,Select} from 'antd';
import DatePickerComponent from 'components/datePicker/index'
import Avatar from 'components/uploader/index'
import Signature from 'components/signature/index'

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class AppComponent extends React.Component {
  render() {
    return (
      <div style={{ width: 900 ,background:'#fff'}}>
        <Signature></Signature>
        <Row style={{paddingTop:'30px'}}>
          <Col span={2} offset={2}><h2 style={{color: '#159bd6',fontFamily:'宋体'}}>个人信息</h2></Col>
          <Col span={11} offset={1}><p style={{color: '#ff6600',fontFamily:'宋体',marginTop:'5px'}}>投资人姓名必须与汇款银行帐号上的姓名一致,且一旦提交不可修改。</p></Col>
        </Row>

        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>姓氏</Col>
          <Col span={7}><Input placeholder="姓的汉语拼音" style={{width: '240px',height:'32px'}}/></Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>名</Col>
          <Col span={7}><Input placeholder="名的汉语拼音" style={{width: '240px',height:'32px'}}/></Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>出生日期</Col>
          <Col span={7}><DatePickerComponent style={{ height: '32px' }}></DatePickerComponent></Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>出生国家</Col>
          <Col span={7}>
              <Select size="large" defaultValue="lucy" style={{ width: 240 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled">Disabled</Option>
                <Option value="yiminghe">Yiminghe</Option>
              </Select>
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>纳税国</Col>
          <Col span={7}>
            <Select size="large" defaultValue="lucy" style={{ width: 240 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="yiminghe">Yiminghe</Option>
            </Select>
          </Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>国籍</Col>
          <Col span={7}>
              <Select size="large" defaultValue="lucy" style={{ width: 240 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled">Disabled</Option>
                <Option value="yiminghe">Yiminghe</Option>
              </Select>
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>行业</Col>
          <Col span={7}>
            <Select size="large" defaultValue="lucy" style={{ width: 240 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="yiminghe">Yiminghe</Option>
            </Select>
          </Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>职业</Col>
          <Col span={7}>
            <Select size="large" defaultValue="lucy" style={{ width: 240 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="yiminghe">Yiminghe</Option>
            </Select>
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>资金来源</Col>
          <Col span={7}>
            <Select size="large" defaultValue="lucy" style={{ width: 240 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="yiminghe">Yiminghe</Option>
            </Select>
          </Col>
        </Row>

        <Row style={{marginTop:'30px'}}>
          <Col span={2} offset={2}><h2 style={{color: '#159bd6',fontFamily:'宋体',height:'30px'}}>证件上传</h2></Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>护照号</Col>
          <Col span={7}><Input placeholder="" style={{width: '240px',height:'32px'}}/></Col>
          <Col span={2} offset={2} style={{height:'32px',lineHeight:'32px'}}>有效期至</Col>
          <Col span={7}><DatePickerComponent></DatePickerComponent></Col>
        </Row>
        <Row style={{marginTop:'40px'}}>
          <Col span={10} offset={7}><Avatar></Avatar></Col>
        </Row>
        <Row style={{marginTop:'20px'}}>
          <Col span={12} offset={6} style={{color:'#999999',fontFamily:'宋体',textAlign:'center'}}>如果您的护照证件 (例如:旧版中国护照) 不包含签名部分,请将证件置于白纸之上,</Col>
        </Row>
        <Row>
          <Col span={12} offset={6} style={{color:'#999999',fontFamily:'宋体',textAlign:'center'}}>并于证件下方签名, 拍照或扫描上传。证件必须为原件, 不能为复印件。</Col>
        </Row>
        <Row style={{marginTop:'50px',paddingBottom:'40px'}}>
          <Col span={4} offset={10}>
            <Button style={{width: '100%',height:'50px',borderRadius:'30px',background:'#223976',color:'#fff',fontSize:'18px'}}>下一步</Button></Col>
        </Row>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
