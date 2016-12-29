import React, {PropTypes} from 'react';
import {Modal, Button, Row, Col} from 'antd';
import {connect} from 'react-redux'
import {fetchPosts} from '../../Redux/actions/index'
import BasicInformation from '../../view/BasicInformation'

const IndexButton = React.createClass({
    getInitialState() {
        return {visible: false};
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
        console.log('Clicked OK');
        this.setState({
            visible: false,
        });
    },
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    },
    render() {
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
                       onOk={this.handleOk} onCancel={this.handleCancel} closable={false} footer={''} width={932}
                >
                    <BasicInformation {...this.props.getsProfile.base_profile}/>
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
