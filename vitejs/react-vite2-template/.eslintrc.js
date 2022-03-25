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
    './.eslintrc-auto-import.json',
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
    'react/react-in-jsx-scope': 'off', // 取消jsx文件中必须引入React
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'jsx-one-expression-per-line': 'off',
    'prettier/prettier': ['error', prettier],
  },
}
