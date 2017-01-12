import fetch from 'isomorphic-fetch'
import cookie from 'react-cookie'
import *as types from './ActionTypes'
import $ from 'jquery'
const baseUrl = 'https://gl-api2.meixincn.com'
// 用户信息是否完善
export const isComplete = () => {
    let url = baseUrl + '/app/invest/is_complete'
    return dispatch => {
        $.ajax({
            type: 'post',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: '',
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: json => dispatch(isCompleteSuccess(json))

        })
    }
}
// 用户信息是否完善
const isCompleteSuccess = (json) => {
    return {
        type: types.IS_COMPLETE,
        json
    }
}
// 获取产品数据
export const getProduct = (id) => {
    let url = baseUrl + '/web/product/' + id
    return dispatch => {
        $.ajax({
            type: 'get',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: {product_id: id},
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: json => dispatch(getProductSuccess(json))

        })
    }
}
// 获取产品成功
const getProductSuccess = (json) => {
    return {
        type: types.GET_PRODUCT,
        json
    }
}


//开始获取数据
const requestPosts = () => {
    return {
        type: types.GET_PROFILE
    }
}


//获取国家数据成功
const getCountrySuccess = (json) => {
    return {
        type: types.GET_COUNTRY,
        json
    }
}
//获取省市数据成功
const getStateSuccess = (json) => {
    return {
        type: types.GET_STATE,
        json
    }
}
//获取市区数据成功
const getCitySuccess = (json) => {
    return {
        type: types.GET_CITY,
        json
    }
}
//获取县数据成功
const getCountySuccess = (json) => {
    return {
        type: types.GET_COUNTY,
        json
    }
}


// 获取国家信息
export const getCountry = (data) => {
    let url = baseUrl + '/web/invest/access_district';
    return dispatch => {
        $.ajax({
            type: 'post',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: json => dispatch(getCountrySuccess(json))

        })
    }
}
// 获取省信息
export const getState = (data) => {
    let url = baseUrl + '/web/invest/access_district';
    return dispatch => {
        $.ajax({
            type: 'post',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: json => dispatch(getStateSuccess(json))

        })
    }
}
// 获取市信息
export const getCity = (data) => {
    let url = baseUrl + '/web/invest/access_district';
    return dispatch => {
        $.ajax({
            type: 'post',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: json => dispatch(getCitySuccess(json))

        })
    }
}
// 获取县信息
export const getCounty = (data) => {
    let url = baseUrl + '/web/invest/access_district';
    return dispatch => {
        $.ajax({
            type: 'post',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: json => dispatch(getCountySuccess(json))

        })
    }
}
// 获取行业信息
export const getIndustry = (data) => {
    let url = baseUrl + '/web/invest/access_careers';
    return dispatch => {
        $.ajax({
            type: 'post',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: json => dispatch(getIndustrySuccess(json))

        })
    }
}
// 获取行业信息成功
const getIndustrySuccess = (json) => {
    return {
        type: types.GET_INDUSTRY,
        json
    }
}
// 获取职业信息
export const getOccupation = (data) => {
    let url = baseUrl + '/web/invest/access_careers';
    return dispatch => {
        $.ajax({
            type: 'post',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: json => dispatch(getOccupationSuccess(json))

        })
    }
}
// 获取职业信息成功
const getOccupationSuccess = (json) => {
    return {
        type: types.GET_OCCUPATION,
        json
    }
}

// 获取profile信息
export const fetchPosts = () => {
    let url = baseUrl + '/web/invest/get_user_info';
    return dispatch => {
        $.ajax({
            type: 'get',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: '',
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: json => dispatch(receivePosts(json))

        })
    }
}
//获取数据成功
const receivePosts = (json) => {
    return {
        type: types.GET_PROFILE_SUCCESS,
        json
    }
}
// 提交profile信息
/*export const updateProfile = (data) => {
 let url = 'https://gl-api2.meixincn.com/web/invest/user_info_confirm';
 // let url = 'https://gl-api2.meixincn.com/web/invest/user_info';
 // let url = 'https://api.meixinglobal.com/web/profile/update';
 return dispatch => {
 dispatch(requestPosts(JSON.stringify(data)))
 return fetch(url, {
 method: 'POST',
 mode: "no-cors",
 headers: {
 "Content-Type": "application/json; charset=utf-8",
 "mx_token": "c75dd2dcbe05e153eb99dbf5525061da",
 "mx_secret": "4075f668c903ce41558377313bd3f7b8"
 }
 })
 .then(response => response.json())
 .then(json => dispatch(receivePosts(json)))
 }
 }*/

// 提交信息
export const updateProfile = (data, success) => {
    return dispatch => {
        $.ajax({
            type: 'post',
            url: baseUrl + '/web/invest/user_info_confirm',
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: function (res) {
                console.log(res.body)
                success&&success()
            }
        })
    }
}
// 提交信息成功
export const updateUploader = (path, key) => {
    return {
        type: types.UPDATE_UPLOADER,
        data: path,
        key: key
    }
}
// 提交签名信息
export const updateSignature = (data, success) => {
    return dispatch => {
        $.ajax({
            type: 'post',
            url: baseUrl + '/web/invest/update_signature',
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: function (res) {
                console.log(res.body)
                success&&success()
            }
        })
    }
}
// 提交订单信息
export const createOrder = (data, success) => {
    return dispatch => {
        $.ajax({
            type: 'post',
            url: baseUrl + '/web/order/create',
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": "3952a10e64671c9995367254766bbfa5",
                "mx_secret": "50e481d3822b00d5b520d07bf3de826b"
            },

            success: function (res) {
                console.log(res.body)
                success&&success()
            }
        })
    }
}


// 签名
export const signature = (key,val) => {
    console.log(val)
    return {
        type: types.SIGNATURE,
        key: key,
        val: val
    }
}
// 投资金额
export const investAmount = (val) => {
    console.log(val)
    return {
        type: types.INVEST_AMOUNT,
        val: val
    }
}
export const saveFields = (key, val) => {
    return {
        type: types.SAVE_FIELDS,
        key: key,
        val: val
    }
}
export const changeInvestorType = (key, val) => {
    return {
        type: types.INVESTOR_TYPE,
        key: key,
        val: val
    }
}

