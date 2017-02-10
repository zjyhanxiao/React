import React from 'react';
import {Row, Col, Button} from 'antd'
import moment from 'moment'
import AddressPlate from './addressPlate'
import BankPlate from './bankPlate'
import BasicPlate from './basicPlate'
import CompliancePlate from './compliancePlate'

import $ from 'jquery'

class IndexPlate extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        if (this.props.getsProfile.invest_amount % this.props.getsProfile.Product.invest_par_value != 0) {
            alert('投资金额必须为' + this.props.getsProfile.Product.invest_par_value + '的整数倍')
            return false
        }
        if (this.props.getsProfile.invest_amount < this.props.getsProfile.Product.minimum_invest_amount) {
            alert('投资金额不能少于' + this.props.getsProfile.Product.minimum_invest_amount)
            return false
        }
        document.body.scrollTop=0
        this.props.changeP(e)
    }

    render() {
        let data = this.props.getsProfile.base_profile
        return (
            <div style={{
                width: '100%',
                background: '#fff',
                overflow: 'hidden',
                display: this.props.one == true ? 'block' : 'none'
            }}>
                <BasicPlate  {...this.props} />
                <AddressPlate  {...this.props} />
                <BankPlate  {...this.props} />


                {data != undefined && data.investor_type == 2 ?
                    <CompliancePlate  {...this.props} />
                    :
                    ''
                }

                <Row style={{
                    paddingTop: '40px',
                    paddingBottom: '40px',
                    margin: '0 auto',
                    textAlign: 'center',
                    background: '#ffffff'
                }}>
                    <p style={{marginBottom:50,textAlign:'left', marginLeft:'8.33333333%',color:'#828282'}}>订单状态的更新通知将发送到您的电话：{data.phone} / 邮箱：{data.email}。</p>
          <Col span={8} offset={8}>
            <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                background: '#223976',
                background: (data && (data.passport_expired || data.bill_expired || data.driving_license_expired || data.id_card_expired)) ? '#ccc' : '#223976',
                color: '#fff',
                fontSize: '18px'
            }} type="primary" htmlType="submit" name="two" onClick={this.handleClick.bind(this)}
                    size="large"
                    disabled={(data && (data.passport_expired || data.bill_expired || data.driving_license_expired || data.id_card_expired)) ? 'disabled' :'' }
            >下一步</Button>
          </Col>
        </Row>

      </div>
        );
    }
}

IndexPlate.defaultProps = {};

export default IndexPlate;
