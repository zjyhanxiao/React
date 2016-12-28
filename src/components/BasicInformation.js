import 'antd/dist/antd.css';
import './basic/BasicInfo.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPosts} from '../Redux/actions/index'

import BasicInfo from './basic/index'




class AsyncApp extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchPosts())
    }
/*    shouldComponentUpdate(nextProps, nextState) {
        // 进行判断，当数据发生改变时，Component重新渲染
        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
            this.updateState(nextProps)
            return true
        }
    }*/
    render () {
        return (
            <div>
                {/*{JSON.stringify(this.props.getsProfile.base_profile)}*/}
                <BasicInfo {...this.props.getsProfile.base_profile}></BasicInfo>
            </div>
        )
    }
}

AsyncApp.propTypes = {
    // getsByProfile: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps=(state) =>{
    return {
        getsProfile:state.getsProfile
    }
}


export default connect(mapStateToProps)(AsyncApp)
