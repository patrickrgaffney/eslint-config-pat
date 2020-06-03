# eslint-config-pat

> Same great taste, same low price!

A very me-specific [ESLint][eslint] config.

```sh
npm install --save-dev eslint-config-pat
```

## Use

This package takes advantage of ESLint's [shared multiple configs][eslint-configs] — that is, there are four different configs shared via this package:

- `pat`: For linting Javascript.
- `pat/node`: For linting [Node.js][node] projects.
- `pat/react`: For linting [React.js][react] projects.
- `pat/mocha`: For linting [Mocha][mocha] test suites.

All configs rely on `eslint`, but the most specific configs rely on plugins as well.

### `pat`: Base Config

- **Requires**:
    - `eslint >=7.1.0`

The `pat` configuration is the base for this package. It **only** declares rules that are shipped with [ESLint][eslint] — therefore it relies on no plugins. It's useful for linting really any Javascript.

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
    - `eslint >=7.1.0`
    - `eslint-plugin-node >=11.1.0`

The `pat/node` configuration is used for linting [Node.js][node] projects. It extends from the `pat` base config, while adding rules from [`eslint-plugin-node`][eslint-node].

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
    - `eslint >=7.1.0`
    - `eslint-plugin-react >=7.19.0`

The `pat/react` configuration is used for linting [React.js][react] projects. It extends from the `pat` base config, while adding rules from [`eslint-plugin-react`][eslint-react].

Example usage:

```js
/**
 * .eslintrc.js
 */
module.exports = {
  extends: "pat/react",
}
```

### `pat/mocha`: Mocha Config

- **Requires**:
    - `eslint >=7.1.0`
    - `eslint-plugin-mocha >=7.0.1`

The `pat/mocha` configuration is used for linting [Mocha][mocha] test suites. It extends from the `pat` base config, while adding rules from [`eslint-plugin-mocha`][eslint-mocha].

Example usage:

```js
/**
 * .eslintrc.js
 */
module.exports = {
  extends: "pat/mocha",
}
```

[eslint]: https://eslint.org/
[eslint-configs]: https://eslint.org/docs/developer-guide/shareable-configs#sharing-multiple-configs
[eslint-mocha]: https://github.com/lo1tuma/eslint-plugin-mocha
[eslint-node]: https://github.com/mysticatea/eslint-plugin-node
[eslint-react]: https://github.com/yannickcr/eslint-plugin-react
[mocha]: https://mochajs.org/
[node]: https://nodejs.org/
[react]: https://reactjs.org/
