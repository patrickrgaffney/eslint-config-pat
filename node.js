/**
 * ESLint configuration file - Node.js config
 *
 * An object must be exported from this file containing the
 * configuration. Anything in this file can be overridden by suppling
 * the corresponding CLI argument.
 */

module.exports = {
  "extends": "pat",
  "env": {
    "node": true,
  },
  "plugins": [ "node" ],
  "parserOptions": {
    "sourceType": "script",
    "ecmaFeatures": {
      "globalReturn": false,
      "impliedStrict": true,
      "jsx": false,
    },
  },
  "rules": {
    // Node: Possible Errors
    "node/no-extraneous-import": [ "error" ],
    "node/no-extraneous-require": [ "error" ],
    "node/no-missing-import": [ "error" ],
    "node/no-missing-require": [ "error" ],
    "node/no-unsupported-features/es-builtins": [ "error" ],
    "node/no-unsupported-features/es-syntax": [ "error" ],
    "node/no-unsupported-features/node-builtins": [ "error" ],
    "node/process-exit-as-throw": [ "error" ],

    // Node: Best Practices
    "node/no-deprecated-api": [ "error" ],

    // Node: Stylistic Issues
    "node/exports-style": [ "error", "module.exports", { "allowBatchAssign": false }],
    "node/file-extension-in-import": [ "error", "never" ],
    "node/prefer-global/buffer": [ "error", "never" ],
    "node/prefer-global/console": [ "error", "always" ],
    "node/prefer-global/process": [ "error", "always" ],
    "node/prefer-global/text-decoder": [ "error", "never" ],
    "node/prefer-global/text-encoder": [ "error", "never" ],
    "node/prefer-global/url-search-params": [ "error", "never" ],
    "node/prefer-global/url": [ "error", "never" ],
    "node/prefer-promises/dns": [ "error" ],
    "node/prefer-promises/fs": [ "error" ],
  },
}
