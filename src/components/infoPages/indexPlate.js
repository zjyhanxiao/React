import React from 'react';
import AddressPlate from './addressPlate'
import BankPlate from './bankPlate'
import BasicPlate from './basicPlate'
import CompliancePlate from './compliancePlate'

class IndexPlate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{width: '100%', background: '#fff', overflow: 'hidden'}}>
          {JSON.stringify(this.props)}
        <BasicPlate {...this.props} />
        <AddressPlate/>
        <BankPlate/>

        {this.props.getsProfile.base_profile.with_spouse?
          <CompliancePlate/>
          :
          ''
        }


        <CompliancePlate/>
      </div>
    );
  }
}

IndexPlate.defaultProps = {};

export default IndexPlate;
