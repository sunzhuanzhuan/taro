// devServer实现跨越请求
console.log(22222)
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer:{
      host: 'dev.v.juhe.cn',
      port: 8080,
      proxy:{
        '/joke':{
          target: 'http://v.juhe.cn/',
          changeOrigin: true,

        },
        '/toutiao':{
          target: 'http://v.juhe.cn/',
          changeOrigin: true,

        },

      }
    }
  }
}
