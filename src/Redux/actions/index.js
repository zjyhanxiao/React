import fetch from 'isomorphic-fetch'
import *as types from './ActionTypes'

export const getProfile = () => {

}


//开始获取数据
const requestPosts = (base_profile) => {
    return {
        type: types.GET_PROFILE,
        base_profile
    }
}

//获取数据成功
const receivePosts = (base_profile,json) => {
    return {
        type: types.GET_PROFILE_SUCCESS,
        base_profile,
        json
    }
}

export const fetchPosts = (base_profile) => {
    let url = 'https://api.meixinglobal.com/web/profile/get?mx_token=25b6ca3901730fba2cb6098d34912f34&mx_secret=da9d83c022637e7eda9fb59299026e7c';
    return dispatch => {
        dispatch(requestPosts(base_profile))
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(base_profile,json)))
    }
}


/*const getDataStart = path => {
    return {
        type: GET_DATA_START,
        path
    }
}


const getDataSuccess = (path, json, success, name) => {
    return {
        type: GET_DATA_SUCCESS,
        path,
        json,
        success,
        name
    }
}

export const getData = (path, postData, success, name) => {
    let url = 'https://api.meixinglobal.com/web/profile/get?mx_token=25b6ca3901730fba2cb6098d34912f34&mx_secret=da9d83c022637e7eda9fb59299026e7c';
    return dispatch => {
        dispatch(getDataStart(postData))
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors'
        })
            .then(response => response.json())
            .then(json => dispatch(getDataSuccess(path, json, success, name)))
            .catch(error => console.log(error))
    }
}*/

