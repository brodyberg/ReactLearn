module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module : {
    rules: [
      {
        "include": __dirname,
        "exclude": __dirname + '/node_modules/', 
        "loader": 'babel-loader',
        "options": {
          "presets": ['es2015', 'react', 'stage-0']
        },
        "test": /\.jsx?/
      }
    ]
  } 
}