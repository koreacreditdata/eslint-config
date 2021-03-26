# @koreacreditdata/eslint-config

## Installation

```sh
$ npm install --save-dev @koreacreditdata/eslint-config
```

or

```sh
$ yarn add -D @koreacreditdata/eslint-config
```

## How to use

#### 1. Recommended

```js
module.exports = {
  extends: "@koreacreditdata",
};
```

또는 필요한 규칙만 extends 해서 사용할 수 있습니다.

```js
module.exports = {
  extends: [
    "@koreacreditdata/eslint-config/react",
    "@koreacreditdata/eslint-config/typescript",
    "@koreacreditdata/eslint-config/bestpractice",
    "@koreacreditdata/eslint-config/import",
  ],
};
```

#### 2. with Prettier

prettier와 함께 사용하려면,

```js
module.exports = {
  extends: ["@koreacreditdata", "@koreacreditdata/eslint-config/prettier"],
};
```

또는

```js
module.exports = {
  extends: [
    "@koreacreditdata/eslint-config/react",
    "@koreacreditdata/eslint-config/typescript",
    "@koreacreditdata/eslint-config/prettier",
  ],
};
```

와 같이 사용합니다.
