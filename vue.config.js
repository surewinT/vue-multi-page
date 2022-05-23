/*
 * @Date: 2022-03-28 21:43:26
 * @Author: surewinT 840325271@qq.com
 * @LastEditTime: 2022-05-23 21:23:48
 * @LastEditors: surewinT 840325271@qq.com
 * @Description: 打包配置文件
 */
const path = require('path')


module.exports = {
  productionSourceMap: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@srcview': path.join(__dirname, './srcview'),
      }
    },

  },

  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'index.html',
      title: "主应用",
    },
    view: {
      entry: './srcview/main.js',
      template: './public/view.html',
      filename: 'view.html',
      title: "子应用",
    },
  }
}