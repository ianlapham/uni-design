# Uni Design System

## Overview

- 📚 [Storybook](https://storybook.js.org) for UI component development and [auto-generated docs](https://medium.com/storybookjs/storybook-docs-sneak-peak-5be78445094a)
- 💅 [Styled-components](https://www.styled-components.com/) for component-scoped styling
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

## Global Styles

Components within the design system assume that a set of global styles have been configured. Depending upon the needs of the application, this can be done several ways:

#### Option 1: Render the `GlobalStyle` component

Useful when you don't need any custom `body` styling in the application, typically this would be placed in a layout component that wraps all pages, or a top-level `App` component.

```javascript
import { global } from '@storybook/design-system';
const { GlobalStyle } = global;
```

```javascript
/* Render the global styles once per page */
<GlobalStyle />
```

#### Option 2: Use the `bodyStyles` to apply styling

Useful when you want build upon the shared global styling.

```javascript
import { createGlobalStyle } from 'styled-components';
import { global } from '@storybook/design-system';
const { bodyStyles } = global;

const CustomGlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
    // Custom body styling for the app
  }
`;
```

```javascript
/* Render the global styles once per page */
<CustomGlobalStyle />
```

## Font Loading

Rather than `@import` fonts in the `GlobalStyle` component, the design system's font URL is exported with the intention of using it in a `<link>` tag as the href. Different frameworks and environments handle component re-renders in their own way (a re-render would cause the font to be re-fetched), so this approach allows the design system consumers to choose the font loading method that is most appropriate for their environment.

#### Option 1: Build the link tag manually

```javascript
import { global } from '@storybook/design-system';

const fontLink = document.createElement('link');

fontLink.href = global.fontUrl;
fontLink.rel = 'stylesheet';

document.head.appendChild(fontLink);
```

#### Option 2: Render the link tag in a component

```jsx
import React from 'react';
import { global } from '@storybook/design-system';

const Layout = ({ children }) => (
  <html>
    <head>
      <link href={global.fontUrl} rel="stylesheet" />
    </head>

    <body>{children}</body>
  </html>
);

export default Layout;
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
