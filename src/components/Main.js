import 'antd/dist/antd.min.css'
import React from 'react';
import { Row, Col,Button,Input,Select} from 'antd';
import DatePickerComponent from 'components/datePicker/index'
import Avatar from 'components/uploder/index'

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class AppComponent extends React.Component {
  render() {
    return (
      <div style={{ width: 900 }}>

        <Row>
          <Col span={2} offset={2}><h2 style={{color: '#159bd6',fontFamily:'宋体',height:'30px'}}>个人信息</h2></Col>
          <Col span={11} offset={1}><p style={{color: '#ff6600',fontFamily:'宋体',height:'30px'}}>投资人姓名必须与汇款银行帐号上的姓名一致,且一旦提交不可修改。</p></Col>
        </Row>

        <Row>
          <Col span={2} offset={2}>姓氏</Col>
          <Col span={7}><Input placeholder="姓的汉语拼音" style={{width: '240px'}}/></Col>
          <Col span={2} offset={2}>名</Col>
          <Col span={7}><Input placeholder="名的汉语拼音" style={{width: '240px'}}/></Col>
        </Row>
        <Row>
          <Col span={2} offset={2}>出生日期</Col>
          <Col span={7}><DatePickerComponent></DatePickerComponent></Col>
          <Col span={2} offset={2}>出生国家</Col>
          <Col span={7}><DatePickerComponent></DatePickerComponent></Col>
        </Row>
        <Row>
          <Col span={2} offset={2}>纳税国</Col>
          <Col span={7}><DatePickerComponent></DatePickerComponent></Col>
          <Col span={2} offset={2}>国籍</Col>
          <Col span={7}>
            <div>
              <Select size="large" defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">Yiminghe</Option>
              </Select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={2}>行业</Col>
          <Col span={7}><DatePickerComponent></DatePickerComponent></Col>
          <Col span={2} offset={2}>职业</Col>
          <Col span={7}><DatePickerComponent></DatePickerComponent></Col>
        </Row>
        <Row>
          <Col span={2} offset={2}>资金来源</Col>
          <Col span={7}><DatePickerComponent></DatePickerComponent></Col>
        </Row>

        <Row>
          <Col span={2} offset={2}><h2 style={{color: '#159bd6',fontFamily:'宋体',height:'30px'}}>证件上传</h2></Col>
        </Row>
        <Row>
          <Col span={2} offset={2}>护照号</Col>
          <Col span={7}><Input placeholder="" style={{width: '240px'}}/></Col>
          <Col span={2} offset={2}>有效期至</Col>
          <Col span={7}><DatePickerComponent></DatePickerComponent></Col>
        </Row>
        <Row>
          <Col span={10} offset={7}><Avatar></Avatar></Col>
        </Row>
        <Row>
          <Col span={4} offset={10}><Button type="primary" style={{width: '100%'}}>下一步</Button></Col>
        </Row>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
