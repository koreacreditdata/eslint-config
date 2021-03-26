// 코드의 스타일을 일관되게 유지하는 규칙들을 작성합니다.

module.exports = {
  rules: {
    // 객체의 중괄호 줄넘김을 일관되게 합니다.
    'object-curly-newline': ['error', {
      consistent: true,
    }],

    // 객체의 속성은 한 줄에 하나씩 작성합니다. (모든 속성을 한줄에 모두 적는 것을 허용합니다.)
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // 배열의 괄호의 시작과 끝을 일관되게 합니다.
    'array-bracket-newline': ['error', 'consistent'],

    // 배열의 요소 사이 줄넘김을 일관되게 합니다.
    'array-element-newline': ['error', 'consistent'],
    
    // 함수 인자의 줄넘김을 일관되게 합니다.
    'function-call-argument-newline': ['error', 'consistent'],

    // 함수 인자 사이에 줄넘김이 있는 경우, 항상 괄호 안에 줄넘김이 필요합니다.
    'function-paren-newline': ['error', 'multiline'],

    // multiline 일 때, 마지막 comma를 필수로 작성합니다.
    'comma-dangle': ['error', 'always-multiline'],
  },
};
