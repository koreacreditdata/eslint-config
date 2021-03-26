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
    // 함수 인자의 줄넘김을 일관되게 합니다.
    'function-call-argument-newline': ['error', 'consistent'],

    // 함수 인자 사이에 줄넘김이 있는 경우, 항상 괄호 안에 줄넘김이 필요합니다.
    'function-paren-newline': ['error', 'multiline'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
