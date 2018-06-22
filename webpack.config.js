const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode:"development",
	entry:{
		"index":"./src/index.js"
	},
	output:{
		path:__dirname+"/dist",
		filename:"[name].bundle.js"
	},
	devServer:{
		contentBase:'./src',
		open:true,
		inline:true
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:{
					loader:"babel-loader",
					options:{
						presets:[
							"env","react"
						]
					}
				},
				exclude:/node_modules/
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'./src/index.html'
		})
	]
}