module.exports = {
  extends: [
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['warn', {
      singleQuote: true,
      trailingComma: 'all',
    }],
  },
};
