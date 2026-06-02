const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    texttile: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname,
    library: "[name]",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { test: /\.css$/, use: [ 'to-string-loader', 'css-loader' ] }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"]
  },
  externals: {
    'react': {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    },
    'react-dom': {
      amd: 'react-dom',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      root: 'ReactDOM'
    }
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    allowedHosts: 'all', 
    server: 'https',
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
  stats: {}
};
