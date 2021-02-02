import { extendTheme } from '@chakra-ui/react';
import { theme } from '@chakra-ui/core';

const config = {
  ...theme,

  initialColorMode: 'light',
  useSystemColorMode: false,

  colors: {
    primary: {
      100: '#CFD1FD',
      200: '#A7ABFB',
      300: '#8388F9',
      400: '#6268F8',
      500: '#444BF7',
      600: '#262EF6',
      700: '#0B14F5',
      800: '#0911DD',
      900: '#080FC7',
    },
  },
};

// 3. extend the theme
export default extendTheme(config);
