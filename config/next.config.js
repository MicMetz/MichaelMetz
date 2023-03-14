module.exports = {
  reactStrictMode: true,
  assetPrefix    : process.env.NODE_ENV === 'production' ? '/MichaelMetz' : '',
  basePath       : process.env.NODE_ENV === 'production' ? '/MichaelMetz' : '',
  images         : {
    unoptimized: true
  }
}
