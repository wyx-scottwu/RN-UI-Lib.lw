// metro.config.js

const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const defaultConfig = getDefaultConfig(  __dirname);
defaultConfig.resolver.resolverMainFields = [
  'sbmodern',
  ...defaultConfig.resolver.resolverMainFields,
];
defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

defaultConfig.watchFolders = [...defaultConfig.watchFolders, path.resolve(__dirname, '.storybook')];
module.exports = defaultConfig;
