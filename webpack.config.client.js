const path=require('path')
const webpack=require('webpack')
const CURRENT_WORKING_DIR=process.cwd()
const config = {
    name: "browser",
    mode: "development",
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        
        filename: 'bundle.js',
        path: path.join(__dirname , '/dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
				test:/\.(css)$/,
				exclude:/\.module\.css$/,
				use:[
                    'style-loader',
                    'css-loader'
                ]
				
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
				test:/\.module\.css$/,
                // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
				use:[
					{
						loader:'style-loader'
					},
					{
						loader:'css-loader',
						options:{
							modules:{
								mode: 'local',
            					auto: true,
            					exportGlobals: true,
            					localIdentName: '[hash:base64:5]',
            		
							},
							importLoaders:1,
							
						}
					}
					
				]
			}
        ]
    }, plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin()
      ]
}

// const config={
//     name:"browser",
//     mode:"development",
//     devtool:"eval-source-map",
//     entry:[
//         'react-hot-loader/patch',
//         'webpack-hot-middleware/client?reload=true',
//         path.join(CURRENT_WORKING_DIR,'client/main.js')

//     ],
//     output:{
//         path:path.join(CURRENT_WORKING_DIR,'/dist'),
//         filename:'bundle.js',
//         publicPath:'/dist/'

//     },
//     module:{
//         rules:[
//             {
//                 test:'/\.(js|jsx)$/',
//                 use:'babel-loader',
//                 exclude:/node_modules/
                
//             },
//             {
// 				test:/\.(css)$/,
// 				exclude:/\.module\.css$/,
// 				use:[
// 					'style-loader',
// 					'css-loader'
// 				]	
//             },
//             {
// 				test:/\.module\.css$/,
				
// 				use:[
// 					{
// 						loader:'style-loader'
// 					},
// 					{
// 						loader:'css-loader',
// 						options:{
// 							modules:{
// 								mode: 'local',
//             					auto: true,
//             					exportGlobals: true,
//             					localIdentName: '[hash:base64:5]',
//             					context: path.resolve(__dirname, 'src'),
            		
// 							},
// 							importLoaders:1,
							
// 						}
// 					}
					
// 				]
// 			}
//         ]
//     },
//      plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoEmitOnErrorsPlugin()
//     ]
    
// }
module.exports=config