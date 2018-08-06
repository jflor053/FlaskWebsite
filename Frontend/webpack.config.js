var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
		        exclude: /node_modules/,
                use: [
                        {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react'],
                        }
                    }
                ]
            },
	    {
		test: /\.css$/,
		loader: 'style-loader!css-loader'
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}  
              }
            ]
        },
        ]
    },
   
    plugins: [
	new webpack.HotModuleReplacementPlugin()
	], 
	devServer: {
	contentBase: './dist',
	hot: true
	}
};
module.exports = config;

