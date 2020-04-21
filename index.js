/**
 * ESLint configuration file - Base config
 *
 * An object must be exported from this file containing the
 * configuration. Anything in this file can be overridden by suppling
 * the corresponding CLI argument.
 */

module.exports = {
  "env": {
    "es6": true,
  },
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "script",
    "ecmaFeatures": {
      "globalReturn": false,
      "impliedStrict": true,
      "jsx": false,
    },
  },
  "noInlineConfig": false,
  "reportUnusedDisableDirectives": true,
  "rules": {
    // ESLint: Possible Errors
    "for-direction": [ "error" ],
    "getter-return": [ "error" ],
    "no-async-promise-executor": [ "error" ],
    "no-await-in-loop": [ "error" ],
    "no-compare-neg-zero": [ "error" ],
    "no-cond-assign": [ "error", "always" ],
    "no-console": [ "error", { "allow": [ "warn", "info", "error" ]}],
    "no-constant-condition": [ "error" ],
    "no-control-regex": [ "error" ],
    "no-debugger": [ "error" ],
    "no-dupe-args": [ "error" ],
    "no-dupe-else-if": [ "error" ],
    "no-dupe-keys": [ "error" ],
    "no-duplicate-case": [ "error" ],
    "no-empty": [ "error" ],
    "no-empty-character-class": [ "error" ],
    "no-ex-assign": [ "error" ],
    "no-extra-boolean-cast": [ "error" ],
    "no-extra-parens": [ "error" ],
    "no-extra-semi": [ "error" ],
    "no-func-assign": [ "error" ],
    "no-import-assign": [ "error" ],
    "no-inner-declarations": [ "error", "both" ],
    "no-invalid-regexp": [ "error" ],
    "no-irregular-whitespace": [ "error", { "skipStrings": false }],
    "no-misleading-character-class": [ "error" ],
    "no-obj-calls": [ "error" ],
    "no-prototype-builtins": [ "error" ],
    "no-regex-spaces": [ "error" ],
    "no-setter-return": [ "error" ],
    "no-sparse-arrays": [ "error" ],
    "no-template-curly-in-string": [ "error" ],
    "no-unexpected-multiline": [ "error" ],
    "no-unreachable": [ "error" ],
    "no-unsafe-finally": [ "error" ],
    "no-unsafe-negation": [ "error", { "enforceForOrderingRelations": true }],
    "require-atomic-updates": [ "error" ],
    "use-isnan": [ "error", { "enforceForSwitchCase": true, "enforceForIndexOf": true }],
    "valid-typeof": [ "error" ],

    // ESLint: Best Practices
    "accessor-pairs": [ "error", { "setWithoutGet": true, "enforceForClassMembers": true }],
    "array-callback-return": [ "error" ],
    "block-scoped-var": [ "error" ],
    "class-methods-use-this": [ "error" ],
    "complexity": [ "error", { "max": 5 }],
    "consistent-return": [ "error", { "treatUndefinedAsUnspecified": false }],
    "curly": [ "error", "all" ],
    "default-case": [ "error" ],
    "default-param-last": [ "error" ],
    "dot-location": [ "error", "object" ],
    "dot-notation": [ "error", { "allowKeywords": true }],
    "eqeqeq": [ "error", "always" ],
    "grouped-accessor-pairs": [ "error", "getBeforeSet" ],
    "guard-for-in": [ "error" ],
    "max-classes-per-file": [ "error", 1 ],
    "no-alert": [ "error" ],
    "no-caller": [ "error" ],
    "no-case-declarations": [ "error" ],
    "no-constructor-return": [ "error" ],
    "no-div-regex": [ "error" ],
    "no-else-return": [ "error", { "allowElseIf": true }],
    "no-empty-function": [ "error", { "allow": []}],
    "no-empty-pattern": [ "error" ],
    "no-eq-null": [ "error" ],
    "no-eval": [ "error", { "allowIndirect": false }],
    "no-extend-native": [ "error", { "exceptions": [ "Error" ]}],
    "no-extra-bind": [ "error" ],
    "no-extra-label": [ "error" ],
    "no-fallthrough": [ "error" ],
    "no-floating-decimal": [ "error" ],
    "no-global-assign": [ "error" ],
    "no-implicit-coercion": [ "error", {
      "boolean": true,
      "number": true,
      "string": true,
      "allow": [],
    }],
    "no-implicit-globals": [ "error" ],
    "no-implied-eval": [ "error" ],
    "no-invalid-this": [ "error" ],
    "no-iterator": [ "error" ],
    "no-labels": [ "error", { "allowLoop": false, "allowSwitch": false }],
    "no-lone-blocks": [ "error" ],
    "no-loop-func": [ "error" ],
    "no-magic-numbers": [ "error", {
      "ignore": [ -1, 0, 1, 2 ],
      "enforceConst": true,
      "detectObjects": false,
    }],
    "no-multi-spaces": [ "error", { "ignoreEOLComments": false }],
    "no-multi-str": [ "error" ],
    "no-new": [ "error" ],
    "no-new-func": [ "error" ],
    "no-new-wrappers": [ "error" ],
    "no-octal": [ "error" ],
    "no-octal-escape": [ "error" ],
    "no-param-reassign": [ "error", { "props": true }],
    "no-proto": [ "error" ],
    "no-redeclare": [ "error", { "builtinGlobals": true }],
    "no-return-assign": [ "error", "always" ],
    "no-return-await": [ "error" ],
    "no-script-url": [ "error" ],
    "no-self-assign": [ "error" ],
    "no-self-compare": [ "error" ],
    "no-sequences": [ "error" ],
    "no-throw-literal": [ "error" ],
    "no-unmodified-loop-condition": [ "error" ],
    "no-unused-expressions": [ "error", {
      "allowShortCircuit": false,
      "allowTernary": false,
      "allowTaggedTemplates": false,
    }],
    "no-unused-labels": [ "error" ],
    "no-useless-call": [ "error" ],
    "no-useless-catch": [ "error" ],
    "no-useless-concat": [ "error" ],
    "no-useless-escape": [ "error" ],
    "no-useless-return": [ "error" ],
    "no-void": [ "error" ],
    "no-with": [ "error" ],
    "prefer-promise-reject-errors": [ "error", { "allowEmptyReject": false }],
    "prefer-regex-literals": [ "error" ],
    "radix": [ "error", "always" ],
    "require-await": [ "error" ],
    "vars-on-top": [ "error" ],
    "wrap-iife": [ "error", "inside" ],
    "yoda": [ "error", "never" ],

    // ESLint: Variables
    "init-declarations": [ "error", "always" ],
    "no-delete-var": [ "error" ],
    "no-label-var": [ "error" ],
    "no-shadow": [ "error" ],
    "no-shadow-restricted-names": [ "error" ],
    "no-undef": [ "error", { "typeof": true }],
    "no-undef-init": [ "error" ],
    "no-unused-vars": [ "error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": true,
      "caughtErrors": "all",
    }],
    "no-use-before-define": [ "error", {
      "functions": true,
      "classes": true,
      "variables": true,
    }],

    // ESLint: Node.js and CommonJS
    "global-require": [ "error" ],
    "no-buffer-constructor": [ "error" ],
    "no-mixed-requires": [ "error", { "grouping": false, "allowCall": false }],
    "no-new-require": [ "error" ],
    "no-path-concat": [ "error" ],
    "no-restricted-modules": [ "error", {
      "name": "lodash",
      "message": "Use specific 'lodash/FUNCTION' packages.",
    }],
    "no-sync": [ "error" ],

    // ESLint: Stylistic Issues
    "array-bracket-newline": [ "error", "consistent" ],
    "array-bracket-spacing": [ "error", "always", {
      "objectsInArrays": false,
      "arraysInArrays": false,
    }],
    "array-element-newline": [ "error", "consistent" ],
    "block-spacing": [ "error", "always" ],
    "brace-style": [ "error", "1tbs" ],
    "camelcase": [ "error", {
      "properties": "always",
      "ignoreDestructuring": false,
      "ignoreImports": true,
    }],
    "comma-dangle": [ "error", "always-multiline" ],
    "comma-spacing": [ "error", { "before": false, "after": true }],
    "comma-style": [ "error", "last" ],
    "computed-property-spacing": [ "error", "never", { "enforceForClassMembers": true } ],
    "consistent-this": [ "error", "that" ],
    "eol-last": [ "error", "always" ],
    "func-call-spacing": [ "error", "never" ],
    "func-name-matching": [ "error", "always" ],
    "func-names": [ "error", "as-needed" ],
    "func-style": [ "error", "declaration", { "allowArrowFunctions": true }],
    "function-call-argument-newline": [ "error", "never" ],
    "function-paren-newline": [ "error", "multiline" ],
    "implicit-arrow-linebreak": [ "error", "beside" ],
    "indent": [ "error", 2, {
      "SwitchCase": 1,
      "MemberExpression": 1,
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": true,
    }],
    "jsx-quotes": [ "error", "prefer-single" ],
    "key-spacing": [ "error", {
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict",
    }],
    "keyword-spacing": [ "error", { "before": true, "after": true }],
    "line-comment-position": [ "error", { "position": "above" }],
    "linebreak-style": [ "error", "unix" ],
    "lines-around-comment": [ "error", {
      "beforeBlockComment": true,
      "beforeLineComment": true,
      "allowBlockStart": true,
      "allowBlockEnd": false,
      "allowClassStart": false,
      "allowClassEnd": false,
      "allowObjectStart": true,
      "allowObjectEnd": false,
      "allowArrayStart": true,
      "allowArrayEnd": false,
    }],
    "lines-between-class-members": [ "error", "always" ],
    "max-len": [ "error", {
      "code": 100,
      "tabWidth": 2,
      "ignoreComments": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
    }],
    "max-lines": [ "error", {
      "max": 200,
      "skipBlankLines": false,
      "skipComments": false,
    }],
    "max-nested-callbacks": [ "error", { "max": 3 }],
    "max-params": [ "error", { "max": 3 }],
    "max-statements-per-line": [ "error", { "max": 1 }],
    "multiline-comment-style": [ "error", "separate-lines" ],
    "multiline-ternary": [ "error", "always-multiline" ],
    "new-cap": [ "error", {
      "newIsCap": true,
      "capIsNew": true,
      "properties": true,
    }],
    "new-parens": [ "error", "always" ],
    "no-array-constructor": [ "error" ],
    "no-bitwise": [ "error" ],
    "no-inline-comments": [ "error" ],
    "no-lonely-if": [ "error" ],
    "no-mixed-spaces-and-tabs": [ "error" ],
    "no-multi-assign": [ "error" ],
    "no-multiple-empty-lines": [ "error", { "max": 2 }],
    "no-nested-ternary": [ "error" ],
    "no-new-object": [ "error" ],
    "no-plusplus": [ "error", { "allowForLoopAfterthoughts": false }],
    "no-tabs": [ "error", { "allowIndentationTabs": false }],
    "no-trailing-spaces": [ "error", {
      "skipBlankLines": false,
      "ignoreComments": false,
    }],
    "no-underscore-dangle": [ "error" ],
    "no-unneeded-ternary": [ "error", { "defaultAssignment": false }],
    "no-whitespace-before-property": [ "error" ],
    "object-curly-newline": [ "error", { "consistent": true }],
    "object-curly-spacing": [ "error", "always", {
      "arraysInObjects": false,
      "objectsInObjects": false,
    }],
    "one-var": [ "error", "never" ],
    "operator-assignment": [ "error", "always" ],
    "padded-blocks": [ "error", "never" ],
    "padding-line-between-statements": [ "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
    ],
    "prefer-exponentiation-operator": [ "error" ],
    "prefer-object-spread": [ "error" ],
    "quote-props": [ "error", "as-needed" ],
    "quotes": [ "error", "single" ],
    "semi": [ "error", "never" ],
    "space-before-blocks": [ "error", "always" ],
    "space-before-function-paren": [ "error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always",
    }],
    "space-in-parens": [ "error", "never" ],
    "space-infix-ops": [ "error" ],
    "space-unary-ops": [ "error" ],
    "spaced-comment": [ "error", "always" ],
    "switch-colon-spacing": [ "error", { "after": true, "before": false }],
    "template-tag-spacing": [ "error", "never" ],
    "unicode-bom": [ "error", "never" ],

    // ESLint: ES6
    "arrow-body-style": [ "error", "as-needed", { "requireReturnForObjectLiteral": false }],
    "arrow-parens": [ "error", "as-needed", { "requireForBlockBody": false }],
    "arrow-spacing": [ "error", { "before": true, "after": true }],
    "constructor-super": [ "error" ],
    "generator-star-spacing": [ "error", { "before": false, "after": true }],
    "no-class-assign": [ "error" ],
    "no-const-assign": [ "error" ],
    "no-dupe-class-members": [ "error" ],
    "no-duplicate-imports": [ "error" ],
    "no-new-symbol": [ "error" ],
    "no-this-before-super": [ "error" ],
    "no-useless-computed-key": [ "error", { "enforceForClassMembers": true }],
    "no-useless-constructor": [ "error" ],
    "no-useless-rename": [ "error" ],
    "no-var": [ "error" ],
    "object-shorthand": [ "error", "always" ],
    "prefer-arrow-callback": [ "error", { "allowNamedFunctions": false, "allowUnboundThis": true }],
    "prefer-const": [ "error", { "destructuring": "any", "ignoreReadBeforeAssign": false }],
    "prefer-destructuring": [ "error" ],
    "prefer-numeric-literals": [ "error" ],
    "prefer-rest-params": [ "error" ],
    "prefer-spread": [ "error" ],
    "prefer-template": [ "error" ],
    "require-yield": [ "error" ],
    "rest-spread-spacing": [ "error", "never" ],
    "sort-imports": [ "error", {
      "ignoreCase": false,
      "ignoreDeclarationSort": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": [ "none", "all", "single", "multiple" ],
    }],
    "symbol-description": [ "error" ],
    "template-curly-spacing": [ "error", "never" ],
    "yield-star-spacing": [ "error", { "before": false, "after": true }],
  }
}