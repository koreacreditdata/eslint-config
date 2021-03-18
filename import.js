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
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
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
    'import/order': 'off',
  },
};
