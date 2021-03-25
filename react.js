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
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx'],
    }],
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
    // funcion 키워드는 named function으로 사용합니다.
    // unnamed component는 대부분 callback이나 함수의 return 으로 사용되기 때문에 arrow function으로 사용합니다.
    'react/function-component-definition': ['error', {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function',
    }],
  },
};
