const pat = require('../../index.js')
const react = require('../../react.js')

module.exports = {
  env: {
    ...pat.env,
    ...react.env,
    node: true,
  },
  plugins: [ 'react' ],
  parserOptions: {
    ...pat.parserOptions,
    ...react.parserOptions,
  },
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
  rules: {
    ...pat.rules,
    ...react.rules,
  },
  settings: {
    react: {
      version: '16.0',
    },
  },
}
