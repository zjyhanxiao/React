import fetch from 'isomorphic-fetch'
import *as types from './ActionTypes'

//开始获取数据
const requestPosts = () => {
    return {
        type: types.GET_PROFILE
    }
}

//获取数据成功
const receivePosts = (json) => {
    return {
        type: types.GET_PROFILE_SUCCESS,
        json
    }
}

export const fetchPosts = () => {
    let url = 'https://api.meixinglobal.com/web/profile/get?mx_token=25b6ca3901730fba2cb6098d34912f34&mx_secret=da9d83c022637e7eda9fb59299026e7c';
    return dispatch => {
        dispatch(requestPosts())
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}

export const updateUploader = (path, key) => {
    return {
        type: types.UPDATE_UPLOADER,
        data: path,
        key: key
    }
}

