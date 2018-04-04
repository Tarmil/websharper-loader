const path = require('path');

const testDir = path.resolve(__dirname, 'test')

module.exports = {
  entry: './test/src/index.js',
  output: {
    filename: 'bundle.js',
    path: testDir
  },
  module: {
    rules: [
      {
        test: /\.fs$/,
        include: testDir,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          },
          {
            loader: path.resolve('loader.js'),
            options: {}
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: testDir
  }
};
