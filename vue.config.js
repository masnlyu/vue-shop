module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-shop/' // vue-shop 為 repo 名稱
      : '/'
  }