module.exports = function (api) {
  api.cache(true);
  const aliases = {
    "@assets": "./assets",
    "@components": ["./src/components"],
    "@colors": ["./src/theme"],
    "@screens": ["./src/screens"],
    "@common": ["./src/common"],
  };

  const plugins = [["module-resolver", { alias: aliases }]];

  return {
    presets: ["babel-preset-expo"],
    plugins,
  };
};
