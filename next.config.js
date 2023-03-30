const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  }
}

module.exports = nextConfig
