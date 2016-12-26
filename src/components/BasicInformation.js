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
    render () {
        const { baseProfile } = this.props
        return (
            <div>
                <BasicInfo {...this.props}></BasicInfo>
            </div>
        )
    }
}

AsyncApp.propTypes = {
    // getsByProfile: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { getsByProfile } = state


    return {
        getsByProfile
    }
}

export default connect(mapStateToProps)(AsyncApp)
