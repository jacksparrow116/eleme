module.exports = {
	// chainWebpack: config => {
	// 	config.module
	// 	  .rule('scss')
	// 	  .oneOf('vue')
	// 	  .use('px2rem-loader')
	// 	  .loader('px2rem-loader')
	// 	  .before('postcss-loader') // this makes it work.
	// 	  .options({ remUnit: 16, remPrecision: 6 })
	// 	  .end()
	// },
	lintOnSave: process.env.NODE_ENV !== 'production',
	// css: {
	//         loaderOptions: {
	//           css: {},
	//           postcss: {
	//             plugins: [
	//               require('postcss-px2rem')({
	//                 remUnit: 37.5
	//               })
	//             ]
	//           }
	//         }
	//     },
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	}
}
