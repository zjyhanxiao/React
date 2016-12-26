/**
 * Created by robot on 2016/12/26.
 */
import React from 'react';
import FilePages from './infoPages/indexFile';

class SynthesisShow extends React.Component {
  constructor() {
    super();
    this.state = {
      profile:{}
    }
  }

  render() {
    return (
      <div style={{width:'100%', background:'#ccc'}}>
        <div style={{width:'1000px',margin:'0 auto'}}>
          <FilePages></FilePages>
        </div>
      </div>
    );
  }
}

SynthesisShow.defaultProps = {};

export default SynthesisShow;
