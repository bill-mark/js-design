 const path  = require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin')

 module.exports = {
 	entry:'./src/index.js',
 	output:{
 		path:__dirname,
 		filename:'./release/bundle.js'  //release 会自动创建
 	},

 	// module:{
  //      rules:[{
  //      	  test:/\.js?$/,
  //      	  exclude:/(node_modules)/,
  //         loader:'babel-loader'
  //      }]
 	// },

 	plugins:[
       new HtmlWebpackPlugin({
       	   template:'./index.html'  //bundle.js会自动注入
       })
 	],
 	devServer:{
 		contentBase:path.join(__dirname,'./release'),  //根目录
 		open:true,//自动打开浏览器窗口
 		port:9000,
 	}
 }