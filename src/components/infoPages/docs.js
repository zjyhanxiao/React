/**
 * Created by robot on 2016/12/22.
 */
import React from 'react';
import { Row, Col,Checkbox} from 'antd';
import Signature from '../signature/index';

const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}



let dosc
class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:{}
    }
  }

  render() {

    const { size } = this.props;
    const state = this.state;
    let a = [1,2,3,4,5,7,8,9,0]


    if (a != undefined) {
      dosc = a.map((dos) => <Row style={{paddingTop: '15px'}}>
        <Col span={20} offset={2}><Checkbox onChange={onChange} style={{color:'#159bd6'}}></Checkbox><a
          href="">dos</a> </Col>
      </Row>)
    }


    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>

          <Row style={{paddingTop: '20px'}}>
              <Col span={20} offset={2}><p style={{color:'#aaaaaa'}}>请认真查看以下文件并核对所填写的信息和已勾选的选项。</p></Col>
          </Row>

        <div>{dosc}</div>




        {/*<Row style={{paddingTop: '15px'}}>*/}
          {/*<Col span={20} offset={2}><Checkbox onChange={onChange} style={{color:'#159bd6'}}></Checkbox><a*/}
            {/*href="">安心定期四期认购协议 / Subscription Document</a> </Col>*/}
        {/*</Row>*/}
        {/*<Row style={{paddingTop: '15px'}}>*/}
          {/*<Col span={20} offset={2}><Checkbox onChange={onChange} style={{color:'#159bd6'}}>基金备忘录 / Private Placement Memorandum</Checkbox></Col>*/}
        {/*</Row>*/}
        {/*<Row style={{paddingTop: '15px'}}>*/}
          {/*<Col span={20} offset={2}><Checkbox onChange={onChange} style={{color:'#159bd6'}}>个人投资人身份信息表 / Due Diligence Request Form</Checkbox></Col>*/}
        {/*</Row>*/}
        {/*<Row style={{paddingTop: '15px'}}>*/}
          {/*<Col span={20} offset={2}><Checkbox onChange={onChange} style={{color:'#159bd6'}}></Checkbox> <a href="">美国海外账户税收遵从法个人认证表 / Indivdual Self Certification</a></Col>*/}
        {/*</Row>*/}
        {/*<Row style={{paddingTop: '15px'}}>*/}
          {/*<Col span={20} offset={2}><Checkbox onChange={onChange} style={{color:'#159bd6'}}>美国预提税及申报收益所有人之外国人身份证明 / w-8BEN</Checkbox></Col>*/}
        {/*</Row>*/}
        <Row style={{paddingTop: '25px'}}>
          <Col span={20} offset={2}><p style={{color:'#b4b5b6'}}>本人声明：本人提供的所有信息均真实准确并同意在内容有任何变化的情况下以电话或邮件形式通知美信金融。必要时，本人授权美信金融对资料的准确性进行确认。此处输入本人签名并通过网络发送之前，本人确认，阅读并已了解申购过程中提供的所有信息；本人了解同意此签名同等于手写签名，同时授权美信金融在必要时可以使用此签名人作为确认依据。</p></Col>
        </Row>
        {/*<Row style={{paddingTop: '25px'}}>*/}
          {/*<Col span={20} offset={2}></Col>*/}
        {/*</Row>*/}

      </div>
    );
  }
}


Docs.defaultProps = {};

export default Docs;
