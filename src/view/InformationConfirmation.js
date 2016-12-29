import React from 'react'
import Compliance from '../components/compliance/index'

class ComplianceInformation extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Compliance></Compliance>
            </div>
        );
    }
}

ComplianceInformation.defaultProps = {};

export default ComplianceInformation;
