import axios from 'axios'



const instance = axios.create({
  baseURL: 'https://api.example.com'
});
// 发送请求之前需要做的
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 数据响应之后操作的
axios.interceptors.response.use(function (response) {

  return response;
}, function (error) {

  return Promise.reject(error);
});

export default instance
