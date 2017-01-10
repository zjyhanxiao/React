import React from 'react';
import InformationConfirmation from '../view/InformationConfirmation'

import AddressPlate from './infoPages/addressPlate'
import BankPlate from './infoPages/bankPlate'
import BasicPlate from './infoPages/basicPlate'
import CompliancePlate from './infoPages/compliancePlate'

class CapacityShow extends React.Component {
    constructor() {
        super()
        this.state = {
          a: true,
        }
    }
    render() {
        return (

            <div>
              {this.state.a?
                <InformationConfirmation/>
                :
                <div>
                  <BasicPlate></BasicPlate>
                  <AddressPlate></AddressPlate>
                  <BankPlate></BankPlate>
                  <CompliancePlate></CompliancePlate>
                </div>
              }

            </div>
        );
    }
}

CapacityShow.defaultProps = {};

export default CapacityShow;

