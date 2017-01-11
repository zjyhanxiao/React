import '../components/basic/BasicInfo.css'
import React, {PropTypes} from 'react'
import {Row, Col, Button} from 'antd'
import {connect} from 'react-redux'
import {getProduct,getCountry} from '../Redux/actions/index'
import ItemAmount from '../components/infoPages/ItemAmount'
import ItemName from '../components/infoPages/ItemName'
import AmountShow from '../components/infoPages/amountShow'
import IndexPlate from '../components/infoPages/indexPlate'
import IndexButton from '../components/Capacity/indexButton'

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
class InformationConfirmation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: true,
            pages: {
                first: true,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                current: 'first'
            }
        }
    }

    changeMessage = (event) => {
        this.setState({message: false})
    }

    componentWillMount() {
        const {dispatch} = this.props
        const product_id=getUrlParam('product_id')
        dispatch(getProduct(product_id))
        dispatch(getCountry({"parent": 1}))
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    render() {
        return (
            <div style={{background: '#fff'}}>
                <div style={{
                    width: '920px',
                    margin: '0 auto',
                    position: 'relative',
                    border: '1px solid #eee',
                    borderRadius: '3px'
                }}>
            <ItemName {...this.props.getsProfile.product} />
            <div style={{position: 'absolute', top: '30px', left: '60px'}}>
              <ItemAmount />
            </div>
          </div>


                {this.state.message ?
                    <div style={{width: '900px', margin: '0 auto'}}>
              <p style={{
                  width: '900px',
                  textAlign: 'center',
                  background: '#ffffff',
                  padding: '40px 0',
                  color: '#bbb',
                  fontSize: '16px'
              }}>您的个人信息尚未完善,请填写后继续投资。</p>
              <IndexButton {...this.state.message} changeMessage={this.changeMessage} />
            </div>
                    :
                    <div style={{width: '900px', margin: '0 auto'}}>
                      <IndexPlate {...this.props} />
              <Row style={{
                  paddingTop: '40px',
                  paddingBottom: '40px',
                  margin: '0 auto',
                  textAlign: 'center',
                  background: '#ffffff'
              }}>
                <Col span={8} offset={8}>
                  <Button style={{
                      width: '120px',
                      height: '50px',
                      borderRadius: '30px',
                      background: '#223976',
                      color: '#fff',
                      fontSize: '18px'
                  }} type="primary" htmlType="submit" size="large">下一步</Button>
                </Col>
              </Row>
            </div>
                }

        </div>
        )
    }
}

InformationConfirmation.defaultProps = {}

InformationConfirmation.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        getsProfile: state.getsProfile
    }
}


export default connect(mapStateToProps)(InformationConfirmation)
