/**
 * Created by robot on 2016/12/27.
 */
import React from 'react';
import Identity from './identity/identity'
import FilePages from './infoPages/indexFile'
import BasicInfoH from './basic/BasicInfoH'


class CapacityShow extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>
        <Identity></Identity>
        <BasicInfoH></BasicInfoH>
      </div>
    );
  }
}

CapacityShow.defaultProps = {};

export default CapacityShow;
