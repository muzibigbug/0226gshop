module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    devServer: {
      open: true,
      host: 'localhost',
      port: '8080',
      proxy: {
        '/api': { // 匹配所有以'/api开头的请求路径'
          target: 'http://localhost:4000', // 要请求的地址（代理目标的基础路径）
          ws: true,
          changeOrigin: true,
          pathRewrite: { // 重写路径：去掉路径中开头的'/api'
            '^/api': ''
          }
        }
      }
    }
  };