// var webpack = require('webpack');
// var path = require('path');

// var APP_DIR = path.resolve(__dirname, 'client/app');

// var BUILD_DIR = path.resolve(__dirname, 'client/public');

// var config = {
//   //Entry point for compile
//   entry: APP_DIR + '/index.jsx',
//   output: {
//     //Defines path for bundled path
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   },
//     module: {
//       loaders: [
//         {
//           test: /\.jsx?/,
//           //Compiles files in APP_DIR
//           include: APP_DIR,
//           //Gives loaders to pass files through before bundle
//           loader: 'babel'  
//         }
//       ]
//     }
// }

// module.exports = config;


var webpack = require('webpack');
var path = require('path');


var config = { 
  context: path.join(__dirname, 'client/app'),
  entry: [
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'client/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};

module.exports = config;
