import axios from 'axios'
import errorCode from '@/utils/errorCode'
import { ElMessage } from 'element-plus'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000,
})
// request拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  // const isToken = (config.headers || {}).isToken === false
  // if (getToken() && !isToken) {
  //     config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // loadingClose();
      // console.log("响应拦截器",res)
      // 未设置状态码则默认成功状态
      const code = res.data.code || 200;
      // 获取错误信息
      const msg = errorCode[code] || res.data.msg || errorCode['default']
      if (code !== 200) {
          Notification.error({
              title: msg
          })
          return Promise.reject('error')
      } else {
          if (res.data.status == '10001') {
              return res.data.data
          }else if (res.data.status == '10006'){
            // store.dispatch('LogOut').then(() => {
            //   location.href = '/'
            // })
            // return Promise.reject(new Error(res.data.msg))
          } else {
            console.log("res",res)
              // 1002 1003 1004
            if (res.headers['content-type'] !="application/force-download") {
                ElMessage({
                message: res.data.msg,
                type: 'error'
              })
              return Promise.reject(new Error(res.data.msg))
            }

          }
      }
  },
  error => {
    // loadingClose();
      console.log('err' + error)
      let { message } = error;
      if (message == "Network Error") {
          message = "后端接口连接异常";
      } else if (message.includes("timeout")) {
          message = "系统接口请求超时";
      } else if (message.includes("Request failed with status code")) {
          message = "系统接口" + message.substr(message.length - 3) + "异常";
      }
      ElMessage({
          message: message,
          type: 'error',
          duration: 5 * 1000
      })
      return Promise.reject(error)
  }
)

export default service
