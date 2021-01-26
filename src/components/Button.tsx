import React from 'react';
import styled from 'styled-components';
import { chakra } from '@chakra-ui/react';

export const StyledButton = styled.button``;

export const Button = () => {
  return (
    <chakra.button px="3" py="2" bg="green.200" rounded="md" _hover={{ bg: 'green.300' }}>
      Button from chakra
    </chakra.button>
  );
};

Button.propTypes = {};

Button.defaultProps = {};
