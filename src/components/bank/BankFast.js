import React from 'react';
import {connect} from 'react-redux'
import {saveFields} from '../../Redux/actions/index'
import {Row, Col, Button, Radio} from 'antd';

class BankFast extends React.Component {
    constructor() {
        super();
        this.state = {
            profile: {},
            size: ''
        }
    }

    handleSizeChange = (e) => {
        this.setState({size: e.target.value});
        console.log(e.target.value)
    }
    chooseBank = () => {
        if (this.state.size !== '') {
            const {dispatch}=this.props
            let baseBank=this.props.getsProfile.Bank
            console.log(JSON.stringify(baseBank['2'][this.state.size].bank_name_cn))
            this.props.getsProfile.base_profile.bank_type == 'US' ?
                dispatch(saveFields('bank_us', {
                    ...this.props.getsProfile.base_profile.bank_us,
                    account_number:baseBank['2'][this.state.size].account_number,
                    account_type:baseBank['2'][this.state.size].account_type,
                    bank_address:baseBank['2'][this.state.size].bank_address,
                    bank_name:baseBank['2'][this.state.size].bank_name_en,
                    routing_number:baseBank['2'][this.state.size].routing_number
                })) :
                dispatch(saveFields('bank_non_us', {
                    ...this.props.getsProfile.base_profile.bank_non_us,
                    account_number:baseBank['1'][this.state.size].account_number||'',
                    bank_address:baseBank['1'][this.state.size].bank_address,
                    bank_name:baseBank['1'][this.state.size].bank_name_en,
                    have_middlebank:1,
                    middle_bank_address:baseBank['1'][this.state.size].middle_bank_address,
                    middle_bank_name:baseBank['1'][this.state.size].middle_bank_name,
                    middle_bank_swift_code:baseBank['1'][this.state.size].middle_bank_swift_code,
                    swift_code:baseBank['1'][this.state.size].bank_swift_code
                }))

        }
        this.props.hideBank()
    }

    render() {
        const bank_us = this.props.getsProfile.Bank['2']
        const bank_non_us = this.props.getsProfile.Bank['1']
        let bankData
        bankData = this.props.getsProfile.base_profile.bank_type == 'NON_US' ?
            this.props.getsProfile.Bank['1'].map((data, index) => <Radio.Button key={data.bank_name_en+index} value={index}
                                                                                style={{
                                                                                    width: 260,
                                                                                    height: 80,
                                                                                    float: 'left',
                                                                                    marginLeft: '20px',
                                                                                    marginTop: '20px',
                                                                                    borderRadius: '5px',
                                                                                    position: 'relative'
                                                                                }}>

            <div style={{width: 50, height: 50, position: 'absolute', top: '15px', left: '15px', lineHeight: '50px'}}>
              <img style={{width: '100%',}} src={data.bank_url} alt="" />
            </div>
            <div style={{width: 180, height: 55, position: 'absolute', top: '15px', right: '0px'}}>
              <p style={{lineHeight: '1.5'}}>{data.bank_name_cn}</p>
              <p style={{lineHeight: '1.5'}}>{data.bank_name_en}</p>
            </div>

          </Radio.Button>)

            :this.props.getsProfile.base_profile.bank_type == 'US' ?
                this.props.getsProfile.Bank['2'].map((data, index) => <Radio.Button key={data.bank_name_en+index} value={index}
                                                                                    style={{
                                                                                        width: 260,
                                                                                        height: 80,
                                                                                        float: 'left',
                                                                                        marginLeft: '20px',
                                                                                        marginTop: '20px',
                                                                                        borderRadius: '5px',
                                                                                        position: 'relative'
                                                                                    }}>

            <div style={{width: 50, height: 50, position: 'absolute', top: '15px', left: '15px', lineHeight: '50px'}}>
              <img style={{width: '100%',}} src={data.bank_url} alt="" />
            </div>
            <div style={{width: 180, height: 55, position: 'absolute', top: '15px', right: '0px'}}>
              <p style={{lineHeight: '1.5', wordBreak: 'break-all'}}>{data.bank_name_en}</p>
            </div>

          </Radio.Button>)
             : ''
        return (
            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>

        <Radio.Group onChange={this.handleSizeChange}
                     style={{width: 860, background: '#fff', overflow: 'hidden', margin: '0 auto'}}>
            {bankData}
            {/*          <Radio.Button value="美国投资人"
             style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative'}}>

             <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
             <img style={{width:'100%',}} src="../images/bank-hua.png" alt=""/>
             </div>
             <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
             <p style={{lineHeight:'1.5'}}>中国银行-香港银行</p>
             <p style={{lineHeight:'1.5'}}>China Merchants Bank (HongKong Branch)</p>
             </div>

             </Radio.Button>
             <Radio.Button value="国投资人"
             style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative'}}>

             <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
             <img style={{width:'100%',}} src="../images/bank-hua.png" alt=""/>
             </div>
             <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
             <p style={{lineHeight:'1.5'}}>中国银行-香港银行</p>
             <p style={{lineHeight:'1.5'}}>China Merchants Bank (Hong
             Kong Branch)</p>
             </div>

             </Radio.Button>
             <Radio.Button value="投资人"
             style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative'}}>

             <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
             <img style={{width:'100%',}} src="../images/bank-xin.jpg" alt=""/>
             </div>
             <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
             <p style={{lineHeight:'1.5'}}>中国银行-香港银行</p>
             <p style={{lineHeight:'1.5'}}>China Merchants Bank (Hong
             Kong Branch)</p>
             </div>

             </Radio.Button>
             <Radio.Button value="投资"
             style={{width: 260,height:80, float:'left',marginLeft:'20px',marginTop:'20px',borderRadius:'5px',position:'relative'}}>

             <div style={{width: 50,height:50,position: 'absolute',top:'15px',left:'15px',lineHeight:'50px'}}>
             <img style={{width:'100%',}} src="../images/bank-xin.jpg" alt=""/>
             </div>
             <div style={{width: 180,height:55,position: 'absolute',top:'15px',right:'0px'}}>
             <p style={{lineHeight:'1.5'}}>中国银行-香港银行</p>
             <p style={{lineHeight:'1.5'}}>China Merchants Bank (Hong
             Kong Branch)</p>
             </div>

             </Radio.Button>*/}

        </Radio.Group>



        <Row style={{marginTop: '50px'}}>
          <Col span={4} offset={6}><Button
              style={{width: '100%', height: '45px', fontSize: '18px', borderRadius: '45px'}} type="ghost"
              onClick={this.props.hideBank}>取消</Button></Col>
          <Col span={4} offset={4}><Button
              style={{width: '100%', height: '45px', fontSize: '18px', borderRadius: '45px', background: '#223976'}}
              onClick={this.chooseBank} type="primary">确定</Button></Col>
        </Row>
      </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}
BankFast.defaultProps = {};
export default connect(mapStateToProps)(BankFast)

