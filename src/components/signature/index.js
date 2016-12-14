require('components/signature/index.css');
import React from 'react';
import SignaturePad from 'react-signature-canvas'

class Signature extends React.Component {
    state = {trimmedDataURL: null}
    sigPad = {}
    clear = () => {
        this.sigPad.clear()
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
                <div>
                    <button className='buttons' onClick={this.clear}>
                        Clear
                    </button>
                </div>
            </div>
        );
    }
}

Signature.defaultProps = {};

export default Signature;
