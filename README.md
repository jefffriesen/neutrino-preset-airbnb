# Neutrino Prettier Lint Preset
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]

`neutrino-preset-lint-prettier` is a Neutrino preset that supports linting JavaScript projects with [Prettier](https://github.com/prettier/prettier) ESLint
config.

#### This is very alpha. Seems to be working for me but try it out and submit a PR or bug if you find problems

Note: This will not reformat your code, it will only tell your IDE that there are linting errors. It is intended to be used along side a `prettier` formatting tool such as [`prettier-atom`](https://github.com/jlongster/prettier-atom).

There is a work-in-progress neutrino preset that will format your code called [neutrino-preset-prettier](https://github.com/SpencerCDixon/neutrino-preset-prettier)

## Requirements

* Node.js v6.9+
* Yarn or npm client
* Neutrino v4, Neutrino build preset

## Installation

neutrino-preset-lint-prettier can be installed via the Yarn or npm clients. Inside your project, make sure
neutrino and neutrino-preset-lint-prettier are development dependencies. You will also be using another
Neutrino preset for building your application source code.

### Yarn

```bash
❯ yarn add --dev neutrino-preset-lint-prettier
```

### npm

```bash
❯ npm install --save-dev neutrino-preset-lint-prettier
```

## Documentation

See the [Neutrino docs](https://neutrino.js.org/presets/neutrino-preset-airbnb-base/)
for more details.

[npm-image]: https://img.shields.io/npm/v/neutrino-preset-lint-prettier.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-lint-prettier.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-lint-prettier
