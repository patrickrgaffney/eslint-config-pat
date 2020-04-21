# eslint-config-pat

> Same great taste, same low price!

A very me-specific ESLint config.

```sh
npm install --save-dev eslint-config-pat
```

## Use

This package takes advantage of ESLint's [shared multiple configs][eslint-configs] — that is, there are three different configs shared via this package:

- `pat`: For linting Javascript.
- `pat/node`: For linting Node.js projects.
- `pat/react`: For linting React.js projects.

All configs rely on `eslint`, but the most specific configs rely on plugins as well.

### `pat`: Base Config

- **Requires**:
    - `eslint >=6.8.0`

The `pat` configuration is the base for this package. It **only** declares rules that are shipped with ESLint — therefore it relies on no plugins. It's useful for linting really any Javascript.

Example usage:

```js
/**
 * .eslintrc.js
 */
module.exports = {
  extends: "pat",
}
```

### `pat/node`: Node.js Config

- **Requires**:
    - `eslint >=6.8.0`
    - `eslint-plugin-node >=11.0.0`

The `pat/node` configuration is used for linting Node.js projects. It extends from the `pat` base config, while adding rules from `eslint-plugin-node`.

Example usage:

```js
/**
 * .eslintrc.js
 */
module.exports = {
  extends: "pat/node",
}
```

### `pat/react`: React.js Config

- **Requires**:
    - `eslint >=6.8.0`
    - `eslint-plugin-react >=11.0.0`

The `pat/react` configuration is used for linting React.js projects. It extends from the `pat` base config, while adding rules from `eslint-plugin-react`.

Example usage:

```js
/**
 * .eslintrc.js
 */
module.exports = {
  extends: "pat/react",
}
```

[eslint-configs]: https://eslint.org/docs/developer-guide/shareable-configs#sharing-multiple-configs