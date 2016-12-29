import React from 'react';
import Address from '../components/address';


class AddressInformation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Address></Address>
            </div>
        );
    }
}

AddressInformation.defaultProps = {};

export default AddressInformation;
