const pat = require('../../index.js')
const mocha = require('../../mocha.js')

module.exports = {
  env: {
    ...pat.env,
    ...mocha.env,
  },
  plugins: [ 'mocha' ],
  parserOptions: {
    ...pat.parserOptions,
    ...mocha.parserOptions,
  },
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
  rules: {
    ...pat.rules,
    ...mocha.rules,
  },
}
