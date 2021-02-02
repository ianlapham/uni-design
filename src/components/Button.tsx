import React from 'react';
import PropTypes from 'prop-types';
import { Button as ChakraButton } from '@chakra-ui/react';

const TYPE = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondaryOutline',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const buttonStyleProps = {
  type: PropTypes.oneOf(Object.values(TYPE)),

  children: PropTypes.node.isRequired,
  /**
   Buttons with icons by themselves have a circular shape
  */
  containsIcon: PropTypes.bool,
  /**
   Buttons that have hrefs should use <a> instead of <button>
  */
  isLink: PropTypes.bool,
  isLoading: PropTypes.bool,
  /**
   Prevents users from clicking on a button multiple times (for things like payment forms)
  */
  isUnclickable: PropTypes.bool,

  size: PropTypes.oneOf(Object.values(SIZES)),
};

const buttonStyleDefaultProps = {
  isLoading: false,
  isLink: false,
  type: TYPE.PRIMARY,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined,
};

export const Button = ({ children, type, isLoading, ...rest }: typeof buttonStyleProps) => {
  const outlined = type === TYPE.PRIMARY_OUTLINE;

  return (
    <ChakraButton
      borderRadius="12px"
      color={outlined ? 'blue.500' : 'white'}
      isLoading={!!isLoading}
      bg={outlined ? 'white' : 'blue.500'}
      _hover={{
        background: outlined ? 'bg.100' : 'blue.600',
      }}
      _focus={{
        background: outlined ? 'bg.100' : 'blue.600',
      }}
      _active={{
        background: outlined ? 'bg.100' : 'blue.600',
      }}
      border={outlined ? '1px' : 0}
      borderColor="blue.500"
    >
      {children}
    </ChakraButton>
  );
};

Button.propTypes = {
  ...buttonStyleProps,
  isDisabled: PropTypes.bool,
  /**
   When a button is in the loading state you can supply custom text
  */
  loadingText: PropTypes.node,
};

Button.defaultProps = {
  loadingText: null,
  isDisabled: false,
  ...buttonStyleDefaultProps,
};
