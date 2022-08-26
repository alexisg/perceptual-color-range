module.exports = (env = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["css-loader", "style-loader", "sass-loader"]
        }
      ]
    }
  };
};
