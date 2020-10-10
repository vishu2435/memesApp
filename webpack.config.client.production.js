const path=require('path')
const webpack=require('webpack')
const CURRENT_WORKING_DIR=process.cwd()

const config={
    mode:'production',
    entry:[
        path.join(CURRENT_WORKING_DIR,'client/main.js')
    ],
    output:{
         path:path.join(CURRENT_WORKING_DIR,'/dist'),
         filename:'bundle.js',
         publicPath:'/dist/'
    },
    module:{
        rules:[
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
			},
			
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
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
				test:/\.module\.css$/,
				
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
            					context: path.resolve(__dirname, 'src'),
            		
							},
							importLoaders:1,
							
						}
					}
					
				]
			}
        ]
    }
}
export default config