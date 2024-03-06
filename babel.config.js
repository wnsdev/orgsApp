module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@mocks': './src/mocks',
            '@services': './src/services',
          },
        },
      ],
    ],
  };
};
