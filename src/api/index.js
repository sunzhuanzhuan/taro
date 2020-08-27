// 封装一下request请求

import Taro from '@tarojs/taro'


export default {
  baseOptions(params,method='GET'){
    let {url,data}=params
    let contentType='applications/x-www-form-urlencoded'
    contentType = params.contentType || contentType;
    const options={
      isShowLoading:false,
      url:url,
      data:data,
      method:method,
      header: { 'content-type': contentType },
      success(){},
      error(){}

    }
    return Taro.request(options)
  },
  get(option){
    return this.baseOptions(option)
  },
  // 增加了contentType 不同的后端框架会要求不同的请求头部
  post(option) {
    return this.baseOptions(params, 'POST')
  }
}
