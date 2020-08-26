// devServer实现跨越请求
console.log(11111)
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServe:{
      host: 'http://172.16.121.158/',
      port: 10086,
      proxy:{
        '/api':{
          target: 'https://ms-api.caibowen.net/',
          changeOrigin: true,
        }
      }
    }
  }
}
