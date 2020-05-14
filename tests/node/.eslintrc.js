const pat = require('../../index.js')
const node = require('../../node.js')

module.exports = {
  env: {
    ...pat.env,
    ...node.env,
  },
  plugins: [ 'node' ],
  parserOptions: {
    ...pat.parserOptions,
    ...node.parserOptions,
  },
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
  rules: {
    ...pat.rules,
    ...node.rules,
  },
}
