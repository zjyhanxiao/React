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
        if (this.props.getsProfile.invest_amount < this.props.getsProfile.Product.invest_par_value) {
            alert('投资金额不能少于' + this.props.getsProfile.Product.minimum_invest_amount)
            return false
        }
        this.props.changeP(e)
    }

    render() {
        let data = this.props.getsProfile.base_profile || null
        let id_card_expired = true, driving_license_expired = true, bill_expired = true, passport_expired = true
        if (data != null && data.id_card_expire_date != '' && data.id_card_expire_date != null && data.id_card_expire_date != undefined) {
            if (moment(data.id_card_expire_date).fromNow().split('ago').length > 0) {
                id_card_expired = false
            }
        }
        if (data != null && data.driving_license_expire_date != '' && data.driving_license_expire_date != null && data.driving_license_expire_date != undefined) {
            if (moment(data.driving_license_expire_date).fromNow().split('ago').length > 0) {
                driving_license_expired = false
            }
        }
        if (data != null && data.bill_expired != '' && data.bill_expired != null && data.bill_expired != undefined) {
            if (moment(moment(bill_expired).add(90, 'days').format('YYYY-MM-DD')).fromNow().split('ago').length > 0) {
                bill_expired = false
            }
        }
        if (data != null && data.passport_expire_date != '' && data.passport_expire_date != null && data.passport_expire_date != undefined) {
            if (moment(data.id_card_expire_date).fromNow().split('ago').length > 0) {
                passport_expired = false
            }
        }
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
          <Col span={8} offset={8}>
            <Button style={{
                width: '120px',
                height: '50px',
                borderRadius: '30px',
                background: passport_expired && bill_expired && driving_license_expired && id_card_expired ? '#223976' : '#ccc',
                color: '#fff',
                fontSize: '18px'
            }} type="primary" htmlType="submit" name="two" onClick={this.handleClick.bind(this)}
                    size="large"
                    disabled={passport_expired && bill_expired && driving_license_expired && id_card_expired ? '' : 'disabled'}>下一步</Button>
          </Col>
        </Row>

      </div>
        );
    }
}

IndexPlate.defaultProps = {};

export default IndexPlate;
