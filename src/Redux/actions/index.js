import fetch from 'isomorphic-fetch'
import *as types from './ActionTypes'
import $ from 'jquery'
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
// 获取profile信息
export const fetchPosts = () => {
    let url = 'https://api.meixinglobal.com/web/profile/get?mx_token=25b6ca3901730fba2cb6098d34912f34&mx_secret=da9d83c022637e7eda9fb59299026e7c';
    return dispatch => {
        dispatch(requestPosts())
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}
// 提交profile信息
/*export const updateProfile = (data) => {
    let url = 'https://api.meixinglobal.com/web/profile/update';
    return dispatch => {
        dispatch(requestPosts(JSON.stringify(data)))
        return fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        })
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}*/
export const updateProfile = (data,success) => {
    $.ajax({
        type: 'post',
        url: 'https://api.meixinglobal.com/web/profile/update',
        data: JSON.stringify(data),
        "contentType": "application/json; charset=utf-8",
        success:function (res) {
            success(res)
        }
    })
}

export const updateUploader = (path, key) => {
    return {
        type: types.UPDATE_UPLOADER,
        data: path,
        key: key
    }
}

