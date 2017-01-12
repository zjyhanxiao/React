import '../components/basic/BasicInfo.css'
import React, {PropTypes} from 'react'
import {Row, Col, Button} from 'antd'
import {connect} from 'react-redux'
import {isComplete,getProduct,getCountry,getIndustry,fetchPosts} from '../Redux/actions/index'
import ItemAmount from '../components/infoPages/ItemAmount'
import ItemName from '../components/infoPages/ItemName'
import AmountShow from '../components/infoPages/amountShow'
import IndexPlate from '../components/infoPages/indexPlate'
import IndexButton from '../components/Capacity/indexButton'
import ConfirmInvestment from './ConfirmInvestment'
import GoldenWay from './GoldenWay'


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
            page: {
              one: true,
              two: false,
              current: 'one'
            }
        }
    }

  changeP=(event)=>{
    var cur
    if (event.target.tagName == 'SPAN') {
      cur = event.target.parentNode.name
    }
    if(event.target.tagName == 'BUTTON'){
      cur = event.target.name
    }
    this.setState(
      {
        page: {
          one: false,
          two: false,
          [cur]: true,
          current: cur
        }
      }
    )
    event.preventDefault();
  }



    changeMessage = (event) => {
        // this.setState({message: false})
    }

    componentWillMount() {
        const {dispatch} = this.props
        const product_id=getUrlParam('product_id')
        // dispatch(isComplete())

        dispatch(fetchPosts())
        dispatch(getProduct(product_id))
        dispatch(getCountry({}))
        dispatch(getIndustry({}))
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
            <ItemName {...this.props.getsProfile.Product} />
            <div style={{position: 'absolute', top: '30px', left: '60px'}}>
              <ItemAmount {...this.props.getsProfile.Product} />
            </div>
          </div>


                {this.props.getsProfile.Complete ?
                    <div style={{width: '900px', margin: '0 auto'}}>
                      <p style={{
                          width: '900px',
                          textAlign: 'center',
                          background: '#ffffff',
                          padding: '40px 0',
                          color: '#bbb',
                          fontSize: '16px'
                      }}>您的个人信息尚未完善,请填写后继续投资。</p>
                      <IndexButton {...this.props.getsProfile.Complete} changeMessage={this.changeMessage} />
                    </div>
                    :
                    <div style={{width: '900px', margin: '0 auto'}}>
                      <IndexPlate {...this.state.page} {...this.props}  changeP={this.changeP}/>
                      <ConfirmInvestment {...this.state.page} {...this.props}  changeP={this.changeP}/>
                      <GoldenWay {...this.state.page} {...this.props}  changeP={this.changeP}/>
                    </div>
                }
                {JSON.stringify(this.props.getsProfile.base_profile)}
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


/********
 <Row style={{
                          paddingTop: '40px',
                          paddingBottom: '40px',
                          margin: '0 auto',
                          textAlign: 'center',
                          background: '#ffffff'}}>
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
 *********/
