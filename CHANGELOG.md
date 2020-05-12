# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]()

### Features

- **pat**: Change `sourceType` to always be `module`.
- **pat**: Add new [`default-case-last`][default-case-last] ESLint rule.
- **pat**: Add new [`no-useless-backreference`][no-useless-backreference] ESLint rule.
- **pat**: Turn on new `enforceForLogicalOperands` option to [`no-extra-boolean-cast`][no-extra-boolean-cast] ESLint rule.

### Dependencies

- `eslint` now requires semver `>=7.0.0`

## [v1.1.0]() - 2020-04-23

### Updated

- **pat/node**: `parserOptions.sourceType` is now `module`.

### Dependencies

- `eslint-plugin-node` now requires semver `>=11.1.0`.

## [v1.0.1]() - 2020-04-23

### Fixed

- **pat/node**: `node/no-restricted-require` rules had incorrect name (`node/no-restricted-modules`).

## [v1.0.0]() - 2020-04-20

Initial public release.

[default-case-last]: https://eslint.org/docs/rules/default-case-last
[no-extra-boolean-cast]: https://eslint.org/docs/rules/no-extra-boolean-cast
[no-useless-backreference]: https://eslint.org/docs/rules/no-useless-backreference
