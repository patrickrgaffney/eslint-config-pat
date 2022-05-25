/**
 * ESLint configuration file - React.js config
 *
 * An object must be exported from this file containing the
 * configuration. Anything in this file can be overridden by suppling
 * the corresponding CLI argument.
 */

module.exports = {
  "extends": "pat",
  "env": {
    "node": false,
    "browser": true,
  },
  "plugins": [ "react" ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "globalReturn": false,
      "impliedStrict": true,
      "jsx": true,
    },
  },
  "rules": {
    // ESLint Overrides
    "no-extra-parens": [ "error", "all", { "ignoreJSX": "multi-line" }],

    // React: Framework Rules
    "react/boolean-prop-naming": [ "warn", { "rule": "^is[A-Z]([A-Za-z0-9]?)+" }],
    "react/button-has-type": [ "error" ],
    "react/destructuring-assignment": [ "error", "always" ],
    "react/forbid-foreign-prop-types": [ "error" ],
    "react/function-component-definition": [ "error", {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function",
    }],
    "react/no-access-state-in-setstate": [ "error" ],
    "react/no-adjacent-inline-elements": [ "error" ],
    "react/no-array-index-key": [ "error" ],
    "react/no-danger": [ "error" ],
    "react/no-danger-with-children": [ "error" ],
    "react/no-deprecated": [ "error" ],
    "react/no-did-mount-set-state": [ "error" ],
    "react/no-did-update-set-state": [ "error" ],
    "react/no-direct-mutation-state": [ "error" ],
    "react/no-find-dom-node": [ "error" ],
    "react/no-is-mounted": [ "error" ],
    "react/no-multi-comp": [ "error", { "ignoreStateless": true }],
    "react/no-redundant-should-component-update": [ "error" ],
    "react/no-render-return-value": [ "error" ],
    "react/no-string-refs": [ "error" ],
    "react/no-this-in-sfc": [ "error" ],
    "react/no-typos": [ "error" ],
    "react/no-unescaped-entities": [ "error" ],
    "react/no-unknown-property": [ "error" ],
    "react/no-unsafe": [ "error" ],
    "react/no-unused-prop-types": [ "error" ],
    "react/no-unused-state": [ "error" ],
    "react/no-will-update-set-state": [ "error" ],
    "react/react-in-jsx-scope": [ "error" ],
    "react/require-render-return": [ "error" ],
    "react/self-closing-comp": [ "error" ],
    "react/sort-comp": [ "error" ],
    "react/sort-prop-types": [ "error" ],
    "react/state-in-constructor": [ "error" ],
    "react/static-property-placement": [ "error", "static public field" ],
    "react/style-prop-object": [ "error" ],
    "react/void-dom-elements-no-children": [ "error" ],

    // React: JSX Style
    "react/jsx-boolean-value": [ "error" ],
    "react/jsx-child-element-spacing": [ "error" ],
    "react/jsx-closing-bracket-location": [ "error" ],
    "react/jsx-closing-tag-location": [ "error" ],
    "react/jsx-curly-brace-presence": [ "error", { "props": "never", "children": "never" }],
    "react/jsx-curly-newline": [ "error", "consistent" ],
    "react/jsx-curly-spacing": [ "error", { "when": "never", "children": true }],
    "react/jsx-equals-spacing": [ "error", "never" ],
    "react/jsx-filename-extension": [ "error", { "allow": "as-needed" }],
    "react/jsx-first-prop-new-line": [ "error", "multiline-multiprop" ],
    "react/jsx-fragments": [ "error", "element" ],
    "react/jsx-indent": [ "error", 2 ],
    "react/jsx-indent-props": [ "error", 2 ],
    "react/jsx-key": [ "error", { "warnOnDuplicates": true }],
    "react/jsx-newline": [ "error" ],
    "react/jsx-no-comment-textnodes": [ "error" ],
    "react/jsx-no-duplicate-props": [ "error" ],
    "react/jsx-no-script-url": [ "error" ],
    "react/jsx-no-target-blank": [ "error" ],
    "react/jsx-no-undef": [ "error" ],
    "react/jsx-no-useless-fragment": [ "error" ],
    "react/jsx-one-expression-per-line": [ "error", { "allow": "single-child" }],
    "react/jsx-pascal-case": [ "error" ],
    "react/jsx-props-no-multi-spaces": [ "error" ],
    "react/jsx-sort-default-props": [ "error" ],
    "react/jsx-sort-props": [ "error" ],
    "react/jsx-tag-spacing": [ "error", { "beforeSelfClosing": "always" }],
    "react/jsx-uses-react": [ "error" ],
    "react/jsx-uses-vars": [ "error" ],
    "react/jsx-wrap-multilines": [ "error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line"
    }],
  },
}
