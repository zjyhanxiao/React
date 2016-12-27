/**
 * Created by robot on 2016/12/26.
 */
import React from 'react';
import FilePages from './infoPages/indexFile';
import InfoPages from './infoPages/index';
import IndexButton from './Capacity/indexButton';

class SynthesisShow extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width:'100%',paddingBottom:'100px', background:'#ccc'}}>
        <div style={{width:'1000px',margin:'0 auto'}}>
          <InfoPages></InfoPages>
        </div>
      </div>
    );
  }
}

SynthesisShow.defaultProps = {};

export default SynthesisShow;
