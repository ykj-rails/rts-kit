const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/ts/app.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js'),
  },
}
