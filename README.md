# Uni Design System

## Overview

- 📚 [Storybook](https://storybook.js.org) for UI component development and [auto-generated docs](https://medium.com/storybookjs/storybook-docs-sneak-peak-5be78445094a)
- ⚡ [Chakra-UI](https://chakra-ui.com/) for component-scoped styling
- ⚛️ [React](https://reactjs.org/) declarative component-centric UI

Maintaining the system

- 📦 [NPM](https://www.npmjs.com/) for [packaging and distribution](https://blog.hichroma.com/how-packaging-makes-it-dead-simple-to-share-ui-components-29912593539d)
- ✅ [Chromatic](https://www.chromatic.com/) to prevent UI bugs in components (by Storybook maintainers)
- 🚥 [CircleCI](https://circleci.com/) Continuous integration

## Develop

```bash
yarn install
```

#### Work on components

```bash
yarn storybook
```

## Development Scripts

#### `yarn release`

> Bump the version

> Push a release to GitHub and npm

> Push a changelog to GitHub

_Notes:_

- Requires authentication with [`npm adduser`](https://docs.npmjs.com/cli/adduser.html)
- [`auto`](https://github.com/intuit/auto) is used to generate a changelog and push it to GitHub. In order for this to work correctly, **an environment variable called `GH_TOKEN` is needed** that references a [GitHub personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) with the appropriate permissions to update the repo.

## License

MIT © [shilman](https://github.com/shilman)
