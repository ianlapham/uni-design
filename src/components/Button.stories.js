import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = (args) => (
  <Button size="sm" variant="solid">
    Click me
  </Button>
);
Primary.args = { children: 'Label' };
