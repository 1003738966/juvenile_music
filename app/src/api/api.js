/*
 * Created by chao on 2017/9/29.
 */
import axios from 'axios'
import qs from 'qs'

//本地测试
const base = '/musichall'

const code_OK = 1
//模拟数据接口
const mockBase = 'https://music/api'
const isMock = false

const method = (type, address, params) => {
    return new Promise((resolve, reject) => {
        axios[type](address, params)
            .then(res => {
                  resolve(res.data)
            })
            .catch((error) => {
                reject(error);
            })
    })
}

//accessToken
const defaults =() => {
  return {
      'AccessToken':'',
  }
}
//dataAll
const extend =(a, b) => {
  Object.keys(b).forEach(k => {
    if (!a[k]) {
      a[k] = b[k]
    }
  })
  return a
}

const Get = (api, data = null) => {
    if (isMock) return axios.get(mockBase + api, data);
    return method('get', base + api, { params: extend(data || {}, defaults()) });
}
const Post = (api, data = null) => {
    if (isMock) return axios.post(mockBase + api, data);
    return method('post', base + api, qs.stringify(extend(data || {}, defaults())));
}
const cookie = (value) => {
    return Cookies.get(value)
}
export {
    base,
    Get,
    Post,
    cookie
}