module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-redux/recommended",
    "plugin:flowtype/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "react-redux", "flowtype"],
  rules: {
    "react-redux/prefer-separate-component-file": 0,
  },
  parser: "@babel/eslint-parser",
};
