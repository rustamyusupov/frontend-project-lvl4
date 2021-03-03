module.exports = {
  plugins: ['lodash'],
  presets: [
    ['@babel/preset-env', { targets: { node: 6 } }],
    '@babel/preset-react',
  ],
};
