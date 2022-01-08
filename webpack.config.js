const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const mode = process.env.NODE_ENV || 'development'
const mode = 'development'

module.exports = {
  mode: mode,
  entry: {
    app: './src/ts/app.ts',
    'app-react': './src/tsx/app.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  // devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    port: 8080,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
        // use: [
        //   {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env'],
        //     },
        //   },
        //   {
        //     loader: 'ts-loader',
        //   },
        // ],
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
