module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "./public/bundle.js"
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
