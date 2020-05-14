/**
 * ESLint configuration file - Mocha config
 *
 * An object must be exported from this file containing the
 * configuration. Anything in this file can be overridden by suppling
 * the corresponding CLI argument.
 */

module.exports = {
  "env": {
    "mocha": true,
    "node": true,
    "browser": false,
  },
  "plugins": [ "mocha" ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "globalReturn": false,
      "impliedStrict": true,
      "jsx": false,
    },
  },
  "rules": {
    "mocha/max-top-level-suites": [ "error", { "limit": 1 }],
    "mocha/no-async-describe": [ "error" ],
    "mocha/no-exclusive-tests": [ "error" ],
    "mocha/no-global-tests": [ "error" ],
    "mocha/no-hooks-for-single-case": [ "error" ],
    "mocha/no-identical-title": [ "error" ],
    "mocha/no-nested-tests": [ "error" ],
    "mocha/no-pending-tests": [ "error" ],
    "mocha/no-return-from-async": [ "error" ],
    "mocha/no-sibling-hooks": [ "error" ],
    "mocha/no-skipped-tests": [ "error" ],
    "mocha/no-top-level-hooks": [ "error" ],
  },
}