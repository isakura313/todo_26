const path = require('path');


module.exports = {
  mode: "development",
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  entry: './js/code.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.bundle.js'
  }
};