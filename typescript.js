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
        // 값을 정의하기 전에 사용하지 않습니다.
        'no-use-before-define': 'off',
        // function definition은 hoisting되기 때문에 필요없음
        '@typescript-eslint/no-use-before-define': ['error', {
          functions: false,
        }],

        // Type 만 사용하는 경우 import 문에 type을 명시적으로 붙여줍니다. (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)
        '@typescript-eslint/consistent-type-imports': 'error',

        // 함수의 return type은 명시적으로 적는 대신 타입 추론을 이용합니다. (tsconfig에서 compilerOptions.noImplicitAny 사용을 권장합니다.)
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // Promise 는 async/await 또는 then/catch 로 처리되야 합니다. 단 void 연산자를 사용할 경우 무시됩니다.
        '@typescript-eslint/no-floating-promises': [
          'error',
          {
            ignoreVoid: true,
          },
        ],
        // Enums를 사용하려면, no-shadow 대신 @typescript-eslint/no-shadow 사용
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        // void 연산자를 사용하지 않습니다. 단, 변수 할당이 아닌 구문으로는 사용할 수 있습니다.
        'no-void': ['error', {
          allowAsStatement: true
        }],
        // json import 허용
        'import/extensions': [
          'error',
          {
            ignorePackages: true,
            pattern: {
              js: 'never',
              jsx: 'never',
              ts: 'never',
              tsx: 'never',
              json: 'always',
            },
          },
        ],
        // no-null-assertion(!) 을 사용하지 않습니다.
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};
