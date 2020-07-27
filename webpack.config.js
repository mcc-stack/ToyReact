module.exports = {
  entry: {
    main: './src/app.js'
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
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
  }
};
