module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'simple-import-sort',
    'import',
    'import-name',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // 유사한 항목을 그룹으로 묶어서 정렬합니다.
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports
          ['^\\u0000'],
          // Packages. 'react' related packages come first.
          ['^react', '^\\w', '^@'],
          // Aliases imports.
          ['^~'],
          // Relative imports. Put same-folder imports first and parent imports last.
          ['^\\.', '^\\.\\.'],
          // SVG icons
          ['^.+\\.svg$'],
          // Style imports.
          ['^.+\\.css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // import 문은 문서 상단에 위치합니다.
    'import/first': 'error',

    // import 문 아래에 빈 줄을 삽입합니다.
    'import/newline-after-import': 'error',

    // 중복된 import를 허용하지 않습니다.
    'import/no-duplicates': 'error',

    // ts, tsx 확장자를 추가합니다.
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      },
    ],

    // import 플러그인으로도 ordering을 강제할 수 있지만, order group 지정이 더 간편한 simple-import-sort 플러그인을 대신 사용합니다.
    'import/order': 'off',
  },
};
