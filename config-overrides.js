const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');

// customized theme in browser
const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/'),
  varFile: path.join(__dirname, './src/variables.less'),
  mainLessFile: path.join(__dirname, './src/index.less'),
  themeVariables: [
    '@primary-color',
    '@text-color',
    '@heading-color',
    '@layout-header-background',
    '@msa-header-icon-color',
    '@layout-sider-background',
    '@msa-sider-text-color',
    '@layout-body-background',
    '@layout-footer-background',
    '@msa-footer-text-color',
    '@msa-layout-sider-menu-background',
    '@msa-layout-sider-submenu-background',
    '@msa-layout-sider-selected-submenu-background',
  ],
  indexFileName: 'index.html',
  generateOnce: false,
};
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#00375B',
    },
    javascriptEnabled: true,
  })(config, env);

  config.plugins.push(new AntDesignThemePlugin(options));

  return config;
};
