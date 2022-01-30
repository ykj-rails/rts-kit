const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode: mode,
  entry: {
    app: './src/ts/app.ts',
    'app-react': './src/tsx/app.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    clean: {
      keep: /img\//,
    },
  },
  devtool: mode === 'development' ? 'inline-source-map' : false,
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
    hot: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
}
