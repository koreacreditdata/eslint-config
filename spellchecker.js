module.exports = {
  plugins: ["spellcheck"],
  rules: {
    // 주석과 import문에서는 오타를 잡지 않습니다.
    "spellcheck/spell-checker": [
      "warn",
      {
        comments: false,
        ignoreRequire: true,
      },
    ],
  },
};
