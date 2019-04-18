import React from 'react';
import { Button } from './ButtonStyle';

export default ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
