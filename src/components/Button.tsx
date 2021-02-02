import React from 'react';
import { Button as CButton } from '@chakra-ui/react';

export const Button = () => {
  return (
    <CButton colorScheme="primary" color="black" bg="primary.200">
      Primary
    </CButton>
  );
};

Button.propTypes = {};
Button.defaultProps = {};
