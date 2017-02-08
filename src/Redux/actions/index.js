import fetch from 'isomorphic-fetch'
import cookie from 'react-cookie'
import *as types from './ActionTypes'
import $ from 'jquery'
const baseUrl = 'https://api.meixinglobal.com:442'
// const baseUrl = 'https://gl-api2.meixincn.com'
// 用户信息是否完善
export const isComplete = () => {
    let url = baseUrl + '/web/invest/is_complete'
    return dispatch => {
        $.ajax({
            type: 'get',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: '',
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(isCompleteSuccess(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

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
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getProductSuccess(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

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
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getCountrySuccess(json)),

            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

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
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getStateSuccess(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

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
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getCitySuccess(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

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
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getCountySuccess(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

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
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getIndustrySuccess(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

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
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getOccupationSuccess(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

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


// 获取银行信息
export const getBank = (data) => {
    let url = baseUrl + '/web/invest/access_bank_dic';
    return dispatch => {
        $.ajax({
            type: 'get',
            url: url,
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: data,
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getBankSuccess(json,data)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

        })
    }
}
// 获取银行信息成功
const getBankSuccess = (json,data) => {
    return {
        type: types.GET_BANK,
        json,
        data
    }
}
// 获取profile信息
export const fetchPosts = () => {
    let url = baseUrl + '/web/invest/get_user_info';
    return dispatch => {
        $.ajax({
            type: 'get',
            url: url,
            data: '',
            async: false,
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(receivePosts(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

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

// 提交信息
export const updateProfile = (data, success) => {
    return dispatch => {
        $.ajax({
            type: 'post',
            url: baseUrl+'/web/invest/user_info',
            //baseUrl + '/web/invest/user_info_confirm',
            // url: 'https://api.meixinglobal.com/web/profile/update',
            data: JSON.stringify(data),
            async: false,
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: function (res) {
                success&&success()
            },

            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }
        })
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
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: function (res) {
                success&&success()
            },

            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
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
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: function (res) {
                success&&success()
            },

            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }
        })
    }
}


// 签名
export const signature = (key,val) => {
    return {
        type: types.SIGNATURE,
        key: key,
        val: val
    }
}
// 投资金额
export const investAmount = (val) => {
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
// 证件上传
export const updateUploader = (path, key) => {
    return {
        type: types.UPDATE_UPLOADER,
        data: path,
        key: key
    }
}
//  获取支付信息
export const getPayment = ( data ) => {
    return dispatch => {
        $.ajax({
            type: 'get',
            url: baseUrl+'/web/product/payment_list/'+data.product_id,
            // url: 'https://gl-api2.meixincn.com/web/product/payment_list/{product_id}',
            data: data,
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getPaymentSuccess(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

        })
    }
}
//  获取支付信息成功
const getPaymentSuccess = (json) => {
    return {
        type: types.GET_PAYMENT,
        json
    }
}

//  获取文档信息
export const getDocument = ( data ) => {
    return dispatch => {
        $.ajax({
            type: 'get',
            url: baseUrl+'/web/product_document/get',
            // url: 'https://gl-api2.meixincn.com/web/product_document/get',,
            data: data,
            contentType: "application/json; charset=utf-8",
            headers: {
                "mx_token": cookie.load('mx_token'),
                "mx_secret": cookie.load('mx_secret')
            },

            success: json => dispatch(getDocumentSuccess(json)),
            complete:function (XHR, TS) {
                if(JSON.parse(XHR.responseText).msg == 'auth failed'){
                    window.location='/login.html'
                }
                /*console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+JSON.stringify(XHR))
                 console.log('AAAAAAAAAAAAAAAAAAAAAAAA'+TS)*/
            }

        })
    }
}
//  获取文档信息成功
const getDocumentSuccess = (json) => {
    return {
        type: types.GET_DOCUMENT,
        json
    }
}
//  获取文档信息成功
export const changeComplete = (val) => {
    return {
        type: types.CHANGE_COMPLETE,
        val
    }
}
//  美国投资人切换地址证明类型
export const changeAddressType = (val) => {
    return {
        type: types.CHANGE_ADDRESS_TYPE,
        val
    }
}



