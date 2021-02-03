const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);
const themes = require('@storybook/theming');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/theming',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    'storybook-dark-mode/register',
  ],
  parameters: {
    theme: themes.dark,
    docs: {
      theme: themes.dark,
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
