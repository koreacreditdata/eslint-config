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
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx'],
    }],
    'react/function-component-definition': ['error', {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function',
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // React.forwardRef에서 function expression을 사용하기 위해 예외를 허용합니다.
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
  },
};
