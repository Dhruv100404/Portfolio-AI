module.exports = {
  extends: ['next'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
} 