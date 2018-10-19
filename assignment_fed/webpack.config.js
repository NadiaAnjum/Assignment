var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function()
{
	return{
		
		entry: {
			vendor: ['angular',	
					'angular-aria',
					'angular-animate',
					'angular-material',
					'angular-filter'],
			app: './app/app.js',        
			'styles-custom': './app/styles-custom.js'
			
		},
		// Where Webpack spits the output
		output: {
			path: 'D:\\assignment\\assignment_fer\\js',
			filename: '[name].bundle.js'
		},
		module: {
		  rules: [
			{
			  test: /\.js$/,
			  exclude: /node_modules/,
			  use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
				  fallback: 'style-loader',
				  use:
					{
						loader: 'css-loader',
						options: {
							url: false,
							minimize: true,
							sourceMap: true
						}
					}, 
				})
			},
			{ 
				test: /\.html$/,
				exclude: /node_modules/,
				use: {loader: 'html-loader'}
			}
		  ]
		},
		plugins: [
			new ExtractTextPlugin("styles-custom.css"),
			new HtmlWebpackPlugin({
				hash: true,
				title: 'Custom template',
				template: './index.html'
			})
			
		]
	}
};