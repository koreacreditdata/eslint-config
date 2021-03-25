module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'import'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',

        // Type 만 사용하는 경우 import 문에 type을 명시적으로 붙여줍니다.
        '@typescript-eslint/consistent-type-imports': 'error',

        //
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
