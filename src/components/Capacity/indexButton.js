import '../identity/identity.css'
import React, {PropTypes} from 'react';
import {Modal, Button, Row, Col} from 'antd';
import {connect} from 'react-redux'
import {fetchPosts} from '../../Redux/actions/index'
import Indexbar from './indexbar'
import BasicInformation from '../../view/BasicInformation'
import AddressInformation from '../../view/AddressProof'
import BankInformation from '../../view/BankInformation'
import ComplianceReview from '../../view/ComplianceReview'
import IdentityConfirmation from '../../view/IdentityConfirmation'

const IndexButton = React.createClass({
    getInitialState() {
        return {
            visible: false,
            pages: {
                first: true,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                current: 'first'
            }
        };
    },
    showModal() {
        this.setState({
            visible: true,
        });
    },
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(fetchPosts())
    },
    handleOk() {
        this.setState({
            visible: false,
        });
    },
    changeIndex(event){
        var cur
        if (event.target.tagName == 'SPAN') {
            cur = event.target.parentNode.name
        }
        if(event.target.tagName == 'BUTTON'){
            cur = event.target.name
        }
        this.setState(
            {
                pages: {
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                    fifth: false,
                    [cur]: true,
                    current: cur
                }
            }
        )
        event.preventDefault();
    },
/*    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    },*/
    render() {
        let data = this.props.getsProfile.base_profile
        return (
            <div>
                <div style={{width: '100%', margin: '0 auto', textAlign: 'center', background: '#ffffff'}}>
                    <Row style={{paddingTop: '30px', paddingBottom: '40px'}}>
                        <Col span={8} offset={8}>
                            <Button style={{
                                width: '120px',
                                height: '50px',
                                borderRadius: '30px',
                                color: '#159bd6',
                                fontSize: '18px'
                            }} type="ghost" onClick={this.showModal}>填写信息</Button>
                        </Col>
                    </Row>
                </div>

                <Modal title="" visible={this.state.visible}
                       onOk={this.handleOk} closable={false} footer={''} width={932}>
                  <Indexbar {...this.state.pages} {...this.props} />
                  <IdentityConfirmation {...this.state.pages} {...this.props} changeIndex={this.changeIndex} />
                  <BasicInformation {...this.state.pages} {...this.props} changeIndex={this.changeIndex} />
                  <AddressInformation {...this.state.pages} {...this.props} changeIndex={this.changeIndex} />
                  <BankInformation  {...this.state.pages} {...this.props} changeIndex={this.changeIndex} />
                  <ComplianceReview {...this.state.pages} {...this.props} changeIndex={this.changeIndex} />
                </Modal>

            </div>
        );
    },
});
IndexButton.defaultProps = {};
IndexButton.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(IndexButton)
