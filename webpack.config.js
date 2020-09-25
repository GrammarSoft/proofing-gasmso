const devCerts = require("office-addin-dev-certs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const webpack = require("webpack");

const urlDev="https://localhost:3000/";
const urlProd="https://www.contoso.com/"; // CHANGE THIS TO YOUR PRODUCTION DEPLOYMENT LOCATION

module.exports = async (env, options) => {
  const dev = options.mode === "development";
  const buildType = dev ? "dev" : "prod";
  const config = {
    mode: "development",
    devtool: "source-map",
    entry: {
      polyfill: "@babel/polyfill",
      app: "./src/app.js",
      // commands: "./src/commands/commands.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      // alias: {
      //   // Necessary in webpack > 5 https://medium.com/@sanchit3b/how-to-polyfill-node-core-modules-in-webpack-5-905c1f5504a0
      //   assert: "assert",
      //   buffer: "buffer",
      //   console: "console-browserify",
      //   constants: "constants-browserify",
      //   crypto: "crypto-browserify",
      //   domain: "domain-browser",
      //   events: "events",
      //   http: "stream-http",
      //   https: "https-browserify", 
      //   os: "os-browserify/browser",
      //   path: "path-browserify",
      //   punycode: "punycode",
      //   process: "process/browser",
      //   querystring: "querystring-es3",
      //   stream: "stream-browserify",
      //   _stream_duplex: "readable-stream/duplex",
      //   _stream_passthrough: "readable-stream/passthrough",
      //   _stream_readable: "readable-stream/readable",
      //   _stream_transform: "readable-stream/transform",
      //   _stream_writable: "readable-stream/writable",
      //   string_decoder: "string_decoder",
      //   sys: "util",
      //   timers: "timers-browserify",
      //   tty: "tty-browserify",
      //   url: "url",
      //   util: "util",
      //   vm: "vm-browserify",
      //   zlib: "browserify-zlib"
      // }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader", 
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      // "edge": "17",
                      // "firefox": "60",
                      // "chrome": "67",
                      // "safari": "11.1",
                      "ie": "11"
                    },
                  }
                ]
              ],
            }
          }
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: "html-loader"
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: "file-loader",
          options: {
            name: '[path][name].[ext]',          
          }
        },
        // {
        //   test: /\.tsx?$/,
        //   use: 'ts-loader',
        //   // exclude: /node_modules/,
        // },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: "sidebar.html",
        template: "./src/sidebar.html",
        chunks: ["polyfill","app"]
      }),
      new CopyWebpackPlugin({
        patterns: [
        // {
        //   to: "taskpane.css",
        //   from: "./src/taskpane/taskpane.css"
        // },
        {
          to: "[name]." + buildType + ".[ext]",
          from: "manifest*.xml",
          transform(content) {
            if (dev) {
              return content;
            } else {
              return content.toString().replace(new RegExp(urlDev, "g"), urlProd);
            }
          }
        }
      ]}),
      // "@babel/plugin-proposal-class-properties"
    ],
    output: {
      filename: '[name].[contenthash].js',
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },      
      https: (options.https !== undefined) ? options.https : await devCerts.getHttpsServerOptions(),
      port: process.env.npm_package_config_dev_server_port || 3000
    },
    // node: {
      // child_process: 'empty',
      // fs: 'empty',
      // crypto: 'empty',
      // net: 'empty',
      // tls: 'empty'
    // }
  };

  return config;
};
