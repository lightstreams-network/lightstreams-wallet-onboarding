# Lightstreams Onboarding

This library is used to help onboard new Lightstreams users. It allows you to ask the Lightstreams extension to redirect users back to your page after onboarding has finished.

This library will register the current page as having initiated onboarding, so that Lightstreams knows where to redirect the user after onboarding. Note that the page will be automatically reloaded a single time once a Lightstreams installation is detected, in order to facilitate this registration.

## Installation

`@lightstreams/onboarding` is made available as either a CommonJS module, and ES6 module, or an ES5 bundle.

- ES6 module: `import LightstreamsOnboarding from '@lightstreams/onboarding'`
- ES5 module: `const LightstreamsOnboarding = require('@lightstreams/onboarding')`
- ES5 bundle: `dist/lightstreams-onboarding.bundle.js` (this can be included directly in a page)


## API

Assuming `import LightstreamsOnboarding from '@lightstreams/onboarding'`, the following API is available.

### Static methods

#### `LightstreamsOnboarding.isMetaMaskInstalled()`

Returns `true` if a Lightstreams-like provider is detected, or `false` otherwise. Note that we don't provide any guarantee that this is correct, as non-Lightstreams wallets can disguise themselves as Lightstreams.

### Static properties

#### `LightstreamsOnboarding.FORWARDER_MODE`

A set of constants for each of the available forwarder modes.

| Constant   | Description                                                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `INJECT`   | Inject a `iframe` to that will refresh until Lightstreams has installed                                                                    |
| `OPEN_TAB` | Open a tab to a new page that will refresh until Lightstreams has installed—this is only useful if the client app has disallowed `iframes` |

### Constructor

#### `new LightstreamsOnboarding()`

The constructor accepts an optional options bag with the following:

| Option            | Description                                                                                                 |
| :---------------- | :---------------------------------------------------------------------------------------------------------- |
| `forwarderOrigin` | Override the forwarder URL, useful for testing. **Optional**.      |
| `forwarderMode`   | One of the available forwarder modes. **Optional**, defaults to `LightstreamsOnboarding.FORWARDER_MODE.INJECT`. |

### Instance methods

#### `startOnboarding()`

Starts onboarding by opening the Lightstreams download page and waiting for Lightstreams to be installed. Once the Lightstreams extension installation is detected, a message will be sent to Lightstreams to register the current site as the onboarding initiator.

#### `stopOnboarding()`

Stops onboarding registration, including removing the injected `iframe` (if any).

## Contributing

### Setup

- Install [Node.js](https://nodejs.org) version 12
  - If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm use` will automatically choose the right node version for you.
- Install [Yarn v1](https://yarnpkg.com/en/docs/install)
- Run `yarn setup` to install dependencies and run any requried post-install scripts
  - **Warning:** Do not use the `yarn` / `yarn install` command directly. Use `yarn setup` instead. The normal install command will skip required post-install scripts, leaving your development environment in an invalid state.

### Linting

Run `yarn lint` to run the linter.

### Release & Publishing

The project follows the same release process as the other libraries in the Lightstreams organization:

1. Create a release branch
   - For a typical release, this would be based on `main`
   - To update an older maintained major version, base the release branch on the major version branch (e.g. `1.x`)
2. Update the changelog
3. Update version in package.json file (e.g. `yarn version --minor --no-git-tag-version`)
4. Create a pull request targeting the base branch (e.g. `main` or `1.x`)
5. Code review and QA
6. Once approved, the PR is squashed & merged
7. The commit on the base branch is tagged
8. The tag can be published as needed

## License

This project is available under the [MIT license](./LICENSE).
