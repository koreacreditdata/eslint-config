module.exports = {
  rules: {
    'object-curly-newline': ['error', {
      consistent: true,
    }],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', 'consistent'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
