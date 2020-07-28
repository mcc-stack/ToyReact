const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-react-jsx',
                { pragma: 'ToyReact.createElement' }
              ]
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    // 开启 HMR功能
    hot: true
  }
};
