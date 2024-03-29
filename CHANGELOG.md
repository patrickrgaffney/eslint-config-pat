# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v5.0.0][v5.0.0] - 2022-05-25

### Changes

- **pat**: Add `no-constant-binary-expression` rule.
- **pat**: Add `no-unused-private-class-members` rule.
- **pat**: Add `prefer-object-has-own` rule.
- **pat/mocha**: Add `mocha/no-empty-description` rule.
- **pat/react**: Add `react/prefer-exact-props` rule.
- **pat/react**: Add `react/hook-use-state` rule.
- **pat/react**: Add `react/no-arrow-function-lifecycle` rule.
- **pat/react**: Add `react/no-invalid-html-attribute` rule.
- **pat/react**: Add `react/no-namespace` rule.
- **pat/react**: Add `react/no-unstable-nested-components` rule.
- **pat/react**: Add `react/no-unused-class-component-methods` rule.
- **pat/react**: Add `react/iframe-missing-sandbox` rule.
- **pat/react**: Add `react/jsx-key` rule.
- **pat/react**: Add `react/jsx-newline` rule.
- **pat/react**: Add `react/jsx-no-constructed-context-values` rule.
- **pat/react**: Add `react/jsx-no-leaked-render` rule.

### Dependencies

- require `node >= 16.x`
- upgrade `eslint@8.16.0`
- upgrade `eslint-plugin-mocha@10.0.0`
- upgrade `eslint-plugin-react@7.30.0`

## [v4.6.0][v4.6.0] - 2021-10-06

### Changes

- **pat**: set `ecmaVersion` option to `latest`.

### Dependencies

- upgrade `eslint@7.32.0`
- upgrade `eslint-plugin-mocha@9.0.0`

## [v4.5.0][v4.5.0] - 2020-12-27

### Changes

- **pat**: Add `enforceForJSX` option to `no-unused-expressions`.

### Dependencies

- upgrade `eslint@7.22.0`
- upgrade `eslint-plugin-mocha@8.1.0`

## [v4.4.1][v4.4.1] - 2020-12-27

### Dependencies

- upgrade `eslint@7.16.0`

## [v4.4.0][v4.4.0] - 2020-12-15

### Added

- **pat:** Enable new ESLint rule `no-nonoctal-decimal-escape`.
- **pat:** Enable new ESLint rule `no-unsafe-optional-chaining`.

### Changes

- **pat/node:** Don't warn on import of `lodash`.

### Dependencies

- upgrade `eslint@7.15.0`

## [v4.3.0][v4.3.0] - 2020-10-20

### Added

- **pat:** Set new `ignoreDefaultValues` option on `no-magic-numbers`.
- **pat/react:** Set new `allow: as-needed` option on `react/jsx-filename-extension`.

### Changes

- **pat:** ECMA version is now `2021`.
- **pat:** Add all RFC-standard HTTP status codes to `no-magic-numbers` ignore list.

### Fixes

- `pat/mocha` now extends `pat` base config.

### Dependencies

- upgrade `eslint@7.11.0`
- upgrade `eslint-plugin-react@7.21.0`

## [v4.2.0][v4.2.0] - 2020-08-15

### Added

- **pat/mocha:** `expect` defined as a `readonly` global.

### Dependencies

- upgrade `eslint@7.7.0`

## [v4.1.0][v4.1.0] - 2020-08-10

### Added

- **pat/mocha:** new Mocha rules [`no-exports`][mocha/no-exports].

### Changes

- **pat**: change [`complexity`][complexity] limit to 6.
- **pat/mocha**: disable ESLint rules `no-unused-expressions` and `max-lines`.

### Dependencies

- upgrade `eslint@7.6.0`
- upgrade `eslint-plugin-mocha@8.0.0`

[complexity]: https://eslint.org/docs/rules/complexity
[mocha/no-exports]: https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exports.md

## [v4.0.0][v4.0.0] - 2020-07-21

### Changes

- **pat**: Enable the `allowSeparatedGroups` option to the [`sort-imports`][sort-imports] rule.

### Dependencies

- Move all plugins to `optionalDependencies`. This way you're only alerted to the ones you need based on which config you're using.
- upgrade `eslint@7.5.0`

[sort-imports]: https://eslint.org/docs/rules/sort-imports

## [v2.3.0][v2.3.0] - 2020-06-24

### Added

- **pat**: new ESLint rule [`no-unreachable-loop`][no-unreachable-loop]
- **pat**: new ESLint rule [`no-promise-executor-return`][no-promise-executor-return]

### Dependencies

- upgrade `eslint@7.3.1`

[no-promise-executor-return]: https://eslint.org/docs/rules/no-promise-executor-return
[no-unreachable-loop]: https://eslint.org/docs/rules/no-unreachable-loop

## [v2.2.0][v2.2.0] - 2020-06-02

### Added

- **pat:** new ESLint rule [`no-lose-of-precision`][no-lose-of-precision].

### Fixed

- Change `node` engine to `>=12.x`.

### CI/CD

- Add CI action to run tests on pull request.
- Use `npm bin` to find executable paths.

### Dependencies

- upgrade `eslint@7.1.0`
- upgrade `eslint-plugin-mocha@7.0.1`

[no-lose-of-precision]: https://eslint.org/docs/rules/no-loss-of-precision

## [v2.1.1][v2.1.1] - 2020-05-14

### Fixed

- Ignore all test files and scripts when publishing NPM package.
- Add LICENSE file.

## [v2.1.0][v2.1.0] - 2020-05-14

### Features

- **pat/mocha**: New config for linting [Mocha][mocha] test suites.
- Added chicken tests for all configs to ensure they are always usable.

### Dependencies

- install `eslint-plugin-mocha`: `>=7.0.0`
- upgrade `eslint-plugin-react`: `>=7.20.0`

[mocha]: https://mochajs.org/

## [v2.0.0][v2.0.0] - 2020-05-12

### Features

- **pat**: Change `sourceType` to always be `module`.
- **pat**: Add new [`default-case-last`][default-case-last] ESLint rule.
- **pat**: Add new [`no-useless-backreference`][no-useless-backreference] ESLint rule.
- **pat**: Turn on new `enforceForLogicalOperands` option to [`no-extra-boolean-cast`][no-extra-boolean-cast] ESLint rule.

[default-case-last]: https://eslint.org/docs/rules/default-case-last
[no-extra-boolean-cast]: https://eslint.org/docs/rules/no-extra-boolean-cast
[no-useless-backreference]: https://eslint.org/docs/rules/no-useless-backreference

### Dependencies

- upgrade `eslint`: `>=7.0.0`

## [v1.1.0][v1.1.0] - 2020-04-23

### Updated

- **pat/node**: `parserOptions.sourceType` is now `module`.

### Dependencies

- upgrade `eslint-plugin-node`: `>=11.1.0`.

## [v1.0.1][v1.0.1] - 2020-04-23

### Fixed

- **pat/node**: `node/no-restricted-require` rules had incorrect name (`node/no-restricted-modules`).

## [v1.0.0][v1.0.0] - 2020-04-20

Initial public release.

[v5.0.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v5.0.0
[v4.6.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v4.6.0
[v4.5.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v4.5.0
[v4.4.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v4.4.0
[v4.3.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v4.3.0
[v4.2.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v4.2.0
[v4.1.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v4.1.0
[v4.0.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v4.0.0
[v2.3.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v2.3.0
[v2.2.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v2.2.0
[v2.1.1]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v2.1.1
[v2.1.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v2.1.1
[v2.0.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v2.0.0
[v1.1.1]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v1.1.1
[v1.0.1]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v1.0.1
[v1.0.0]: https://github.com/patrickrgaffney/eslint-config-pat/releases/tag/v1.0.0