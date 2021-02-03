import React from 'react';

import styled from 'styled-components';
import { Button } from './Button';

const FixedColumn = styled.div`
  display: grid;
  grid-row-gap: 20px;
  width: 200px;
`;

export default {
  title: 'Button',
  component: Button,
};

export const All = () => (
  <FixedColumn>
    <Button>Primary</Button>
    <Button type="primaryOutline">Outlined</Button>
  </FixedColumn>
);
