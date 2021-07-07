module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 적절하게 쓰면 가독성을 해치지 않음
    'no-nested-ternary': 'off',
    // 한글 컴포넌트 import를 위함
    'react/jsx-pascal-case': 'off',
    // 한글/영어 혼용된 컴포넌트/메서드명 사용을 위함
    'camelcase': 'off',
    // react import를 jsx/tsx에 무조건 넣도록 하는 룰. tsconfig.comiplierOptions.jsx 가 react-jsx일 때는 필요 없음
    'react/react-in-jsx-scope': 'off',
    // typescript라서 필요없음
    'react/require-default-props': 'off',
    // props spreading 허용
    'react/jsx-props-no-spreading': 'off',
    // 리액트 컴포넌트 파일을 만들 때 .jsx 나 .tsx 확장자를 사용함
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx'],
    }],
    // div에 키보드 이벤트 없이 onClick 자유롭게 넣을 수 있게 함
    'jsx-a11y/click-events-have-key-events': 'off',
    // label 태그는 control 관련 태그를 감싸고 있어야 함
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
    // import 문을 통일하고, React 내장 Hooks는 `React.useState()` 형태로 사용합니다.
    // Bad: `import React, { useState } from 'react';`
    // Bad: `import * as React from 'react';`
    // Good: `import React from 'react';`
    'no-restricted-imports': ['error', {
      paths: [{
        name: 'react',
        importNames: [
          'useState',
          'useEffect',
          'useContext',
          'useReducer',
          'useCallback',
          'useMemo',
          'useRef',
          'useImperativeHandle',
          'useLayoutEffect',
          'useDebugValue',
        ],
      }],
    }],

    // React component는 funcion 키워드를 사용하는 named function으로 선언합니다.
    // 콜백이나 함수의 반환 값으로 사용되는 unnamed component는 arrow function으로 작성합니다.
    'react/function-component-definition': ['error', {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function',
    }],

    // 함수의 인자나 콜백으로 사용되는 컴포넌트를 named function으로 작성하기 위해 예외를 허용합니다. (e.g. React.forwardRef)
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
  },
};
