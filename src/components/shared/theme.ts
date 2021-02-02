import { extendTheme } from '@chakra-ui/react';
import { theme } from '@chakra-ui/core';

const config = {
  ...theme,

  initialColorMode: 'dark',
  useSystemColorMode: false,

  colors: {
    blue: {
      100: '#D4E4FA',
      200: '#A9C8F5',
      300: '#7DACF0',
      400: '#5190EB',
      500: '#2172E5',
      600: '#1A5BB6',
      700: '#144489',
      800: '#0E2F5E',
      900: '#081B37',
    },
    primary: {
      500: '##FF007A',
    },
    bg: {
      100: '#F7F8FA',
      200: '#EDEEF2',
      300: '#CED0D9',
      400: '#888D9B',
      500: '#6C7284',
      600: '#565A69',
      700: '#40444F',
      800: '#2C2F36',
      900: '#191B1F',
    },
  },
};

// 3. extend the theme
export default extendTheme(config);
