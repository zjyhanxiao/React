/**
 * Created by robot on 2016/12/27.
 */
import React from 'react';
import Identity from './identity/identity'


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


      </div>
    );
  }
}

CapacityShow.defaultProps = {};

export default CapacityShow;
