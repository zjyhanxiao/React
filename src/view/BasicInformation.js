import React ,{Component,PropTypes}from 'react';
import 'antd/dist/antd.css'
import {Form, Row, Col,Button} from 'antd';
import {connect} from 'react-redux'
import {fetchPosts} from '../Redux/actions/index'
import BasicInfoUC from '../components/basic/BasicInfoUC'
import BasicInfoH from '../components/basic/BasicInfoH'
import Basicpassport from '../components/basic/Basicpassport'

const FormItem = Form.Item;

class BasicInformation extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(fetchPosts())
    }

    onChange = (e) => {
        this.setState({a: e.target.checked});
        console.log(e.target.checked)
    }

    handleSizeChange = (e) => {
        this.setState({size: e.target.value});
        console.log(e.target.value)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        const {getFieldDecorator} = this.props.form;
        // console.log(getFieldDecorator)
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
        };

        return (
            <div style={{width: 900, background: '#fff', overflow: 'hidden'}}>
                <Form horizontal>


                    <BasicInfoH />
                    {/*<BasicInfoUC />*/}
                    <Basicpassport />

                    <FormItem {...tailFormItemLayout}>
                        <Row style={{marginTop: '50px', paddingBottom: '40px'}}>
                            <Col span={4} offset={7}>
                                <Button style={{
                                    width: '120px',
                                    height: '50px',
                                    borderRadius: '30px',
                                    background: '#223976',
                                    color: '#fff',
                                    fontSize: '18px'
                                }} type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} size="large">完成</Button>
                            </Col>
                        </Row>
                    </FormItem>

                </Form>

            </div>
        );
    }
}

BasicInformation = Form.create({})(BasicInformation);

BasicInformation.defaultProps = {};

BasicInformation.propTypes = {
    // getsByProfile: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps=(state) =>{
    return {
        getsProfile:state.getsProfile
    }
}


export default connect(mapStateToProps)(BasicInformation)
