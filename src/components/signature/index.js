require('components/signature/index.css');
import React from 'react';
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
        this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
            .toDataURL('image/png')})
    }

    render() {
        let {trimmedDataURL} = this.state;
        return (
            <div className='container'>
                <div className='sigContainer'>
                    <SignaturePad canvasProps={{width: 900, height: 200,className: 'sigPad'}}
                                  ref={(ref) => { this.sigPad = ref }}
                                  onEnd={this.trim}

                    />
                </div>
                <div className='sigContainer_button'>

                  <Button className='buttons' onClick={this.clear}>重新签名</Button>
                </div>
            </div>
        );
    }
}

Signature.defaultProps = {};

export default Signature;
