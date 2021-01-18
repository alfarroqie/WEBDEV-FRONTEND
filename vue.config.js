module.exports = {
    devServer: {
      port: 8083
    },
    configureWebpack:{
      performance: {
        hints: false
      },
      optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000,
        }
      }
    }
  }