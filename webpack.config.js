module.exports = {
  entry: ["./app.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  watch: true
}

