/**
 * Created by robot on 2017/1/10.
 */
import React from 'react';
import InformationConfirmation from '../view/InformationConfirmation'

import AddressPlate from './infoPages/addressPlate'
import BankPlate from './infoPages/bankPlate'
import BasicPlate from './infoPages/basicPlate'
import CompliancePlate from './infoPages/compliancePlate'

class Account extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (

      <div>

          <div>
            <BasicPlate></BasicPlate>
            <AddressPlate></AddressPlate>
            <BankPlate></BankPlate>
            <CompliancePlate></CompliancePlate>
          </div>


      </div>
    );
  }
}

Account.defaultProps = {};

export default Account;
