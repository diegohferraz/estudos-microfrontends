const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "dhf",
    projectName: "routing-example",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    externals: ['react-router-dom']
  });
};
