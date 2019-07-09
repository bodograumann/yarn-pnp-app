const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
  configureWebpack: {
    resolve: {
      plugins: [
        PnpWebpackPlugin,
      ]
    },
    resolveLoader: {
      plugins: [
        PnpWebpackPlugin.moduleLoader(module),
      ]
    }
  }
};
