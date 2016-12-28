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
      <div style={{width:'100%',paddingBottom:'20px', background:'#ccc'}}>
        <div style={{width:'1000px',margin:'0 auto'}}>
          <FilePages></FilePages>
          <p style={{width:'900px',margin:'0 auto',marginTop:'10px'}}>美信金融提醒您：市场有风险投资需谨慎。任何保障措施均有其局限性：（1）合作机构有可能因各种原因丧失还款意愿或因财务状况严重恶化等原因丧失还款能力；（2）战争，自然灾害，骚乱，罢工，政策变更等不可抗力亦可能严重影响资金安全。</p>
        </div>
      </div>
    );s
  }
}

SynthesisShow.defaultProps = {};

export default SynthesisShow;
