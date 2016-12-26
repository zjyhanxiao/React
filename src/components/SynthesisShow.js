/**
 * Created by robot on 2016/12/26.
 */
import React from 'react';
import InfoPages from './infoPages/index';


class SynthesisShow extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div>
        <InfoPages></InfoPages>
      </div>
    );
  }
}

SynthesisShow.defaultProps = {};

export default SynthesisShow;
