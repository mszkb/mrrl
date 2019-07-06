module.exports = {
  devServer:{
   proxy: {
      "/api": {
        target: 'http://www.vanion.eu/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false
      }
    }
  }
}