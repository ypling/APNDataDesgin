module.exports = {
  context: __dirname + "/src",
  entry: "./server.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js"
  },
  target: 'node'
};
