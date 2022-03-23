const prettier = require('./.prettierrc.js')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'standard-react',
  ],
  settings: {
    react: {
      version: '17.0.2',
    },
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'jsx-one-expression-per-line': 'off',
    'prettier/prettier': ['error', prettier],
  },
}
