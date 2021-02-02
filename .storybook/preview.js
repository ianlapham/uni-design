import React from 'react';
import { loadFontsForStorybook } from '../src/utils/index';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import theme from '../src/components/shared/theme';

export const parameters = {
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
};

const withGlobalStyle = (storyFn) => (
  <>
    <ChakraProvider theme={theme}>
      <CSSReset />
      {storyFn()}
    </ChakraProvider>
  </>
);

export const decorators = [withGlobalStyle];

loadFontsForStorybook();
