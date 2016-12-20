import React from 'react';

import BasicInfo from './BasicInfo/index';

class BasicInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
     <div>
       <BasicInfo></BasicInfo>
     </div>
    );
  }
}

BasicInformation.defaultProps = {};

export default BasicInformation;
