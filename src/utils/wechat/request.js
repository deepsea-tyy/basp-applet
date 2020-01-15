import * as cache from './cache'
import config from '../../config'
import uri from '../uri'


// loading加载提示
const showLoading = () => {
    return new Promise((resolve, reject) => {
        wx.showLoading({ title: '加载中...' })
        resolve()
    })
}

// 关闭loading
const hideLoading = () => {
    return new Promise((resolve) => {
        setTimeout(_ => { wx.hideLoading() }, 800)
        resolve()
    })
}


// request get 请求
export function get (url, queryParams){
    showLoading()
    hideLoading()
    var token = cache.get('X-Token');
    if (uri.needLogin.indexOf(url) >= 0) {
        if (!token) {
            // console.log()
            new Error("未登陆");
        }
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.baseUrl + url,
            method: 'GET',
            data: queryParams,
            header: { "Contant-Type": "application/json", "X-Token": token },
            success(res) {
                resolve(res.data)
            },
            fail(err) {
                console.log(err)
                reject(err)
            }
        })
    })
}

// request post 请求
export function post (url, queryParams){
    showLoading()
    hideLoading()
    var token = cache.get('X-Token');
    if (uri.needLogin.indexOf(url) >= 0) {
        if (!token) {
            new Error("未登陆");
        }
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.baseUrl + url,
            method: 'POST',
            data: queryParams,
            header: { "Contant-Type": "application/json", "X-Token": token },
            success(res) {
                resolve(res.data)
            },
            fail(err) {
                console.log(err)
                reject(err)
            }
        })
    })
}