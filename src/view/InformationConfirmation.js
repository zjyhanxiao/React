import 'antd/dist/antd.css'
require('../components/basic/BasicInfo.css')

import React from 'react'
import {Row,Col,Button} from 'antd'

import ItemAmount from '../components/infoPages/ItemAmount'
import ItemName from '../components/infoPages/ItemName'
import AmountShow from '../components/infoPages/amountShow'
import AddressPlate from '../components/infoPages/addressPlate'
import BankPlate from '../components/infoPages/bankPlate'
import BasicPlate from '../components/infoPages/basicPlate'
import CompliancePlate from '../components/infoPages/compliancePlate'
import IndexButton from '../components/Capacity/indexButton'


class InformationConfirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a:true,
      profile:{}
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    return (


        <div style={{background:'#fff'}}>

          <div style={{width:'920px',margin:'0 auto',position:'relative',border:'1px solid #eee',borderRadius:'3px'}}>
            <ItemName/>
            <div style={{position:'absolute',top:'30px',left:'60px'}}>
              <ItemAmount/>
            </div>
          </div>



          {this.state.a ?
            <div style={{width:'900px',margin:'0 auto'}}>
              <p style={{width:'900px',textAlign:'center',background:'#ffffff',padding:'40px 0',color:'#bbb',fontSize:'16px'}}>您的个人信息尚未完善,请填写后继续投资。</p>
              <IndexButton></IndexButton>
            </div>
            :
            <div style={{width:'900px',margin:'0 auto'}}>
              <BasicPlate></BasicPlate>
              <AddressPlate></AddressPlate>
              <BankPlate></BankPlate>
              <CompliancePlate></CompliancePlate>
              <Row style={{paddingTop: '40px', paddingBottom: '40px',margin:'0 auto',textAlign:'center',background:'#ffffff'}}>
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
          }

        </div>
    )
  }
}

InformationConfirmation.defaultProps = {}

export default InformationConfirmation
