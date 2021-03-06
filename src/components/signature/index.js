require('components/signature/index.css');
import React from 'react';
import {connect} from 'react-redux'
import {signature} from '../../Redux/actions/index'
import { Button } from 'antd';
import SignaturePad from 'react-signature-canvas'

class Signature extends React.Component {
    state = {trimmedDataURL: null}
    sigPad = {}
    clear = () => {
        this.sigPad.clear()
        this.setState({trimmedDataURL:null})
    }
    getCanvas = () => {
        this.sigPad.getCanvas()
    }
    trim = () => {
        const {dispatch} = this.props
        dispatch(signature(this.props.id,this.sigPad.getTrimmedCanvas()
            .toDataURL('image/png')))
        this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
            .toDataURL('image/png')})
    }

    render() {
        let {trimmedDataURL} = this.state;
        return (
            <div className='container'>
                <p style={{color:'#898a8b',fontWeight:'500',fontSize:'14px',paddingBottom:'10px',background:'#ffffff'}}>

                  {this.props.mode.people}
                  {/*<span style={{fontWeight:'600',fontSize:'14px',color:'#898000'}}>zhao yue cheng</span>*/}
                </p>

                <div className='sigContainer' id={this.props.id}>
                    <SignaturePad canvasProps={{width: 750, height: 200,className: 'sigPad'}}
                                  ref={(ref) => { this.sigPad = ref }}
                                  onEnd={this.trim}

                    />
                </div>

              <p style={{float:'left',color:'#ff6600',lineHeight:'35px'}}>
                {this.props.mode.notice}
              </p>

                <div className='sigContainer_button'>
                  <Button className='buttons' onClick={this.clear}>重新签名</Button>
                </div>
            </div>
        );
    }
}

Signature.defaultProps = {};
const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(Signature)
