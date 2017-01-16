import React from 'react';
import InformationConfirmation from '../view/InformationConfirmation'
import GoldenWay from '../view/GoldenWay'
import ConfirmInvestment from '../view/ConfirmInvestment'

class CapacityShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
              <InformationConfirmation/>
            </div>
        );
    }
}

CapacityShow.defaultProps = {};

export default CapacityShow;

